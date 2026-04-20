package ingestion

import (
	"context"
	"testing"
	"time"

	pb "github.com/jules/sentinelstream/pkg/api/v1"
)

type mockProducer struct {
	produced chan *pb.DeviceSignal
}

func (m *mockProducer) Produce(ctx context.Context, signal *pb.DeviceSignal) error {
	m.produced <- signal
	return nil
}

func (m *mockProducer) Close() error {
	return nil
}

func TestTelemetryServer_SendTelemetry(t *testing.T) {
	mock := &mockProducer{produced: make(chan *pb.DeviceSignal, 1)}
	server := NewTelemetryServer(mock, 1)

	req := &pb.TelemetryRequest{
		Signal: &pb.DeviceSignal{
			DeviceId: "test-device",
			Value:    42.0,
		},
	}

	resp, err := server.SendTelemetry(context.Background(), req)
	if err != nil {
		t.Fatalf("SendTelemetry failed: %v", err)
	}

	if !resp.Success {
		t.Errorf("Expected success, got false")
	}

	select {
	case signal := <-mock.produced:
		if signal.DeviceId != "test-device" {
			t.Errorf("Expected device-id test-device, got %s", signal.DeviceId)
		}
	case <-time.After(1 * time.Second):
		t.Fatal("Timed out waiting for signal to be produced")
	}
}
