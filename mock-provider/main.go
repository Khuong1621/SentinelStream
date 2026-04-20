package main

import (
	"bytes"
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
	"time"

	"github.com/jules/sentinelstream/pkg/telemetry"
)

// MockProvider simulates an industrial device sending telemetry data
type MockProvider struct {
	TargetURL string
	DeviceID  string
}

func (p *MockProvider) Start() {
	log.Printf("Starting Mock Provider for %s, sending to %s", p.DeviceID, p.TargetURL)
	ticker := time.NewTicker(3 * time.Second)
	for range ticker.C {
		signal := telemetry.DeviceSignal{
			DeviceID:  p.DeviceID,
			Value:     10 + rand.Float64()*90,
			Timestamp: time.Now().UnixMilli(),
			Unit:      "°C",
		}

		p.sendData(signal)
	}
}

func (p *MockProvider) sendData(signal telemetry.DeviceSignal) {
	jsonData, err := json.Marshal(signal)
	if err != nil {
		log.Printf("Error marshaling signal: %v", err)
		return
	}

	resp, err := http.Post(p.TargetURL, "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		log.Printf("Error sending signal: %v", err)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusOK {
		log.Printf("[%s] Signal sent: %.2f %s", p.DeviceID, signal.Value, signal.Unit)
	} else {
		log.Printf("[%s] Failed to send signal: %s", p.DeviceID, resp.Status)
	}
}

func main() {
	// The user can define multiple devices or target different systems
	provider := MockProvider{
		TargetURL: "http://localhost:8080/api/telemetry",
		DeviceID:  "PLC-UNIT-X100",
	}

	provider.Start()
}
