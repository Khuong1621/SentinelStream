package ingestion

import (
	"context"
	"encoding/json"
	"fmt"
	"log"

	"github.com/IBM/sarama"
	pb "github.com/jules/sentinelstream/pkg/api/v1"
)

type Producer interface {
	Produce(ctx context.Context, signal *pb.DeviceSignal) error
	Close() error
}

type kafkaProducer struct {
	syncProducer sarama.SyncProducer
	topic        string
}

func NewKafkaProducer(brokers []string, topic string) (*kafkaProducer, error) {
	config := sarama.NewConfig()
	config.Producer.Return.Successes = true
	config.Producer.RequiredAcks = sarama.WaitForAll
	config.Producer.Retry.Max = 5

	producer, err := sarama.NewSyncProducer(brokers, config)
	if err != nil {
		return nil, fmt.Errorf("failed to start Sarama producer: %w", err)
	}

	return &kafkaProducer{
		syncProducer: producer,
		topic:        topic,
	}, nil
}

func (p *kafkaProducer) Produce(ctx context.Context, signal *pb.DeviceSignal) error {
	data, err := json.Marshal(signal)
	if err != nil {
		return fmt.Errorf("failed to marshal signal: %w", err)
	}

	msg := &sarama.ProducerMessage{
		Topic: p.topic,
		Key:   sarama.StringEncoder(signal.DeviceId),
		Value: sarama.ByteEncoder(data),
	}

	partition, offset, err := p.syncProducer.SendMessage(msg)
	if err != nil {
		return fmt.Errorf("failed to send message to Kafka: %w", err)
	}

	log.Printf("Message is stored in topic(%s)/partition(%d)/offset(%d)\n", p.topic, partition, offset)
	return nil
}

func (p *kafkaProducer) Close() error {
	return p.syncProducer.Close()
}
