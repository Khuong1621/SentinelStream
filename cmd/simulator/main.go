package main

import (
	"context"
	"fmt"
	"log"
	"math/rand"
	"time"

	pb "github.com/jules/sentinelstream/pkg/api/v1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	conn, err := grpc.Dial("localhost:50051", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	client := pb.NewTelemetryServiceClient(conn)

	devices := []string{"sensor-01", "sensor-02", "sensor-03"}

	for {
		for _, dev := range devices {
			val := rand.Float64() * 100
			req := &pb.TelemetryRequest{
				Signal: &pb.DeviceSignal{
					DeviceId:  dev,
					Value:     val,
					Timestamp: time.Now().UnixMilli(),
				},
			}

			ctx, cancel := context.WithTimeout(context.Background(), time.Second)
			resp, err := client.SendTelemetry(ctx, req)
			cancel()

			if err != nil {
				log.Printf("could not send telemetry: %v", err)
			} else {
				fmt.Printf("Sent telemetry for %s: %f - Response: %s\n", dev, val, resp.Message)
			}
		}
		time.Sleep(2 * time.Second)
	}
}
