package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/IBM/sarama"
	"github.com/jules/sentinelstream/internal/processor"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

func main() {
	kafkaBrokers := os.Getenv("KAFKA_BROKERS")
	if kafkaBrokers == "" {
		kafkaBrokers = "localhost:9092"
	}

	redisAddr := os.Getenv("REDIS_ADDR")
	if redisAddr == "" {
		redisAddr = "localhost:6379"
	}

	clickhouseAddr := os.Getenv("CLICKHOUSE_ADDR")
	if clickhouseAddr == "" {
		clickhouseAddr = "localhost:9000"
	}

	storage, err := processor.NewStorage(redisAddr, clickhouseAddr)
	if err != nil {
		log.Fatalf("Failed to initialize storage: %v", err)
	}
	defer storage.Close()

	if err := storage.InitClickhouse(context.Background()); err != nil {
		log.Printf("Failed to init clickhouse table: %v", err)
	}

	config := sarama.NewConfig()
	config.Consumer.Offsets.Initial = sarama.OffsetOldest
	config.Consumer.Return.Errors = true

	group, err := sarama.NewConsumerGroup([]string{kafkaBrokers}, "processor-group", config)
	if err != nil {
		log.Fatalf("Failed to create consumer group: %v", err)
	}
	defer group.Close()

	consumer := processor.NewConsumer(storage)

	// Start Prometheus metrics server
	go func() {
		log.Println("Starting metrics server on :8080")
		http.Handle("/metrics", promhttp.Handler())
		if err := http.ListenAndServe(":8080", nil); err != nil {
			log.Printf("Metrics server failed: %v", err)
		}
	}()

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	sigterm := make(chan os.Signal, 1)
	signal.Notify(sigterm, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		for {
			if err := group.Consume(ctx, []string{"telemetry"}, consumer); err != nil {
				log.Printf("Error from consumer: %v", err)
			}
			if ctx.Err() != nil {
				return
			}
		}
	}()

	<-sigterm
	log.Println("Shutting down processor...")
}
