package ingestion

import (
	"context"
	"log"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
	pb "github.com/jules/sentinelstream/pkg/api/v1"
)

var (
	signalsReceived = promauto.NewCounter(prometheus.CounterOpts{
		Name: "ingestion_signals_received_total",
		Help: "The total number of signals received by ingestion service",
	})
)

type TelemetryServer struct {
	pb.UnimplementedTelemetryServiceServer
	producer   Producer
	workerChan chan *pb.DeviceSignal
}

func NewTelemetryServer(producer Producer, workerCount int) *TelemetryServer {
	s := &TelemetryServer{
		producer:   producer,
		workerChan: make(chan *pb.DeviceSignal, 1000),
	}

	for i := 0; i < workerCount; i++ {
		go s.worker()
	}

	return s
}

func (s *TelemetryServer) SendTelemetry(ctx context.Context, req *pb.TelemetryRequest) (*pb.TelemetryResponse, error) {
	// Offload to worker pool for high performance
	s.workerChan <- req.Signal
	signalsReceived.Inc()

	return &pb.TelemetryResponse{
		Success: true,
		Message: "Signal queued for processing",
	}, nil
}

func (s *TelemetryServer) worker() {
	for signal := range s.workerChan {
		err := s.producer.Produce(context.Background(), signal)
		if err != nil {
			log.Printf("Worker failed to produce signal: %v", err)
		}
	}
}
