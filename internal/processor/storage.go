package processor

import (
	"context"
	"fmt"

	"github.com/ClickHouse/clickhouse-go/v2"
	"github.com/redis/go-redis/v9"
)

type Storage struct {
	redisClient      *redis.Client
	clickhouseClient clickhouse.Conn
}

func NewStorage(redisAddr, clickhouseAddr string) (*Storage, error) {
	rdb := redis.NewClient(&redis.Options{
		Addr: redisAddr,
	})

	conn, err := clickhouse.Open(&clickhouse.Options{
		Addr: []string{clickhouseAddr},
		Auth: clickhouse.Auth{
			Database: "default",
			Username: "default",
			Password: "",
		},
	})
	if err != nil {
		return nil, fmt.Errorf("failed to connect to ClickHouse: %w", err)
	}

	return &Storage{
		redisClient:      rdb,
		clickhouseClient: conn,
	}, nil
}

func (s *Storage) InitClickhouse(ctx context.Context) error {
	return s.clickhouseClient.Exec(ctx, `
		CREATE TABLE IF NOT EXISTS signals (
			device_id String,
			value Float64,
			timestamp DateTime64(3)
		) ENGINE = MergeTree()
		ORDER BY (device_id, timestamp)
	`)
}

func (s *Storage) SaveCurrentState(ctx context.Context, deviceID string, value float64) error {
	return s.redisClient.Set(ctx, fmt.Sprintf("device:%s:current", deviceID), value, 0).Err()
}

func (s *Storage) SaveToHistory(ctx context.Context, deviceID string, value float64, timestamp int64) error {
	return s.clickhouseClient.Exec(ctx, "INSERT INTO signals (device_id, value, timestamp) VALUES (?, ?, ?)",
		deviceID, value, timestamp)
}

func (s *Storage) Close() {
	s.redisClient.Close()
	s.clickhouseClient.Close()
}
