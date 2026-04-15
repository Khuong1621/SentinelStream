Bước 1: Thiết lập Infrastructure (Azure + Terraform)
Sử dụng Azure để dựng 1 VM hoặc dùng Azure Container Instances. Cài đặt Docker Compose để chạy nhanh cụm: Kafka, Redis, Clickhouse, Grafana.

Bước 2: Định nghĩa Schema (gRPC & Protobuf)
Dùng gRPC để định nghĩa DeviceSignal. Đây là "hợp đồng" giữa các service.

Protocol Buffers
syntax = "proto3";
message DeviceSignal {
    string device_id = 1;
    double value = 2;
    int64 timestamp = 3;
}
Bước 3: Xây dựng Ingestion Service (Golang)
Service này chịu tải chính.

Rule cho Jules: "Hãy dùng sarama library để tối ưu producer vào Kafka, sử dụng worker pool để handle concurrent requests".

Bước 4: Xây dựng Storage & Analytics
Dùng Clickhouse để ghi dữ liệu theo dạng cột (Column-oriented), cực nhanh cho việc tổng hợp dữ liệu IIoT.

Dùng Prometheus để đo xem service Go chiếm bao nhiêu CPU/RAM khi xử lý 10,000 thiết bị.

Bước 5: Dashboard & DevOps
Kết nối Grafana vào Clickhouse để vẽ biểu đồ real-time. Setup GitHub Action để mỗi khi bạn push code, nó tự build Docker image và deploy lên Azure.
