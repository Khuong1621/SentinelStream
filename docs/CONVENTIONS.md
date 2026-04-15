Project Structure (Standard Go Layout)
Yêu cầu AI tuân theo layout:

/cmd: Điểm chạy ứng dụng (main.go).

/internal: Code nghiệp vụ (không cho phép import từ ngoài).

/pkg: Thư viện có thể dùng chung.

/api: Định nghĩa file .proto cho gRPC.

Coding Standards
Interface Pollution: Không tạo Interface trước khi thực sự cần. (Khác với .NET là luôn có IService). Trong Go: "Accept interfaces, return structs".

Error Handling: Không dùng try-catch. Phải check error ngay lập tức: if err != nil { return err }.

Concurrency: Ưu tiên dùng Channel để giao tiếp giữa các Goroutine thay vì dùng chung biến (Shared Memory).

Context: Mọi hàm liên quan đến I/O (Database, Network) phải nhận tham số đầu tiên là ctx context.Context.

Naming:

Tên biến: camelCase.

Exported (Public): PascalCase.

Tên package: Viết thường, ngắn gọn (vd: internal/handler thay vì internal/handlers).
