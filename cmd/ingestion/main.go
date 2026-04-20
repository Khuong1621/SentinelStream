package main

import (
	"log"
	"net"
	"net/http"
	"os"

	"github.com/jules/sentinelstream/internal/ingestion"
	pb "github.com/jules/sentinelstream/pkg/api/v1"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"google.golang.org/grpc"
)

func main() {
	kafkaBrokers := os.Getenv("KAFKA_BROKERS")
	if kafkaBrokers == "" {
		kafkaBrokers = "localhost:9092"
	}

	producer, err := ingestion.NewKafkaProducer([]string{kafkaBrokers}, "telemetry")
	if err != nil {
		log.Fatalf("Failed to create producer: %v", err)
	}
	defer producer.Close()

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	pb.RegisterTelemetryServiceServer(s, ingestion.NewTelemetryServer(producer, 10))

	// Start Prometheus metrics server
	go func() {
		log.Println("Starting metrics server on :8080")
		http.Handle("/metrics", promhttp.Handler())
		if err := http.ListenAndServe(":8080", nil); err != nil {
			log.Printf("Metrics server failed: %v", err)
		}
	}()

	log.Printf("Ingestion server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
