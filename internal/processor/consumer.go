package processor

import (
	"context"
	"encoding/json"
	"log"

	"github.com/IBM/sarama"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
	pb "github.com/jules/sentinelstream/pkg/api/v1"
)

var (
	signalsProcessed = promauto.NewCounter(prometheus.CounterOpts{
		Name: "processor_signals_processed_total",
		Help: "The total number of signals processed by consumer service",
	})
)

type Consumer struct {
	storage *Storage
}

func NewConsumer(storage *Storage) *Consumer {
	return &Consumer{storage: storage}
}

func (c *Consumer) Setup(sarama.ConsumerGroupSession) error   { return nil }
func (c *Consumer) Cleanup(sarama.ConsumerGroupSession) error { return nil }

func (c *Consumer) ConsumeClaim(session sarama.ConsumerGroupSession, claim sarama.ConsumerGroupClaim) error {
	for msg := range claim.Messages() {
		var signal pb.DeviceSignal
		if err := json.Unmarshal(msg.Value, &signal); err != nil {
			log.Printf("Failed to unmarshal signal: %v", err)
			continue
		}

		ctx := context.Background()

		// 1. Save to Redis (Current State)
		if err := c.storage.SaveCurrentState(ctx, signal.DeviceId, signal.Value); err != nil {
			log.Printf("Failed to save to Redis: %v", err)
		}

		// 2. Save to Clickhouse (History)
		if err := c.storage.SaveToHistory(ctx, signal.DeviceId, signal.Value, signal.Timestamp); err != nil {
			log.Printf("Failed to save to Clickhouse: %v", err)
		}

		signalsProcessed.Inc()
		session.MarkMessage(msg, "")
	}
	return nil
}
