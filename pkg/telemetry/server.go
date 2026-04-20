package telemetry

import (
	"context"
)

type TelemetryServer struct {
	BroadcastFunc func(msg interface{})
}

func (s *TelemetryServer) SendSignal(ctx context.Context, req *DeviceSignal) (*TelemetryResponse, error) {
	if s.BroadcastFunc != nil {
		s.BroadcastFunc(map[string]interface{}{
			"timestamp":  interface{}(req.Timestamp),
			"level":      "INFO",
			"component":  "GRPC_TELEMETRY",
			"payload":    "Received gRPC signal from " + req.DeviceID,
			"type":       "primary",
		})
	}
	return &TelemetryResponse{Success: true, Message: "Signal received via gRPC"}, nil
}
