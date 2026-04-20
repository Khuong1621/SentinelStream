package telemetry

type DeviceSignal struct {
	DeviceID  string  `json:"device_id"`
	Value     float64 `json:"value"`
	Timestamp int64   `json:"timestamp"`
	Unit      string  `json:"unit"`
}

type TelemetryResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}
