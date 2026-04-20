# Ý Tưởng Dự Án: SentinelStream - Tactical Observer Dashboard

## 🌟 Tổng quan (Overview)
**SentinelStream** là một hệ thống giám sát và phân tích dữ liệu telemetry hiệu năng cao, được thiết kế dành riêng cho các môi trường công nghiệp hiện đại (IIoT). Ý tưởng cốt lõi của dự án là cung cấp một "Command Center" (Trung tâm điều phối) giúp các kỹ sư và quản trị viên có cái nhìn toàn diện, tức thời về tình trạng hoạt động của hệ thống phần cứng và phần mềm.

## 🎯 Mục tiêu (Core Objectives)
1.  **Tính tức thời (Real-time):** Xử lý và hiển thị hàng ngàn tín hiệu từ thiết bị ngoại vi (PLC, cảm biến) với độ trễ cực thấp.
2.  **Khả năng mở rộng (Scalability):** Sẵn sàng xử lý lượng dữ liệu lớn thông qua kiến trúc hiện đại (Kafka, Clickhouse).
3.  **Giao diện tác chiến (Tactical UI):** Thiết kế tối giản, tập trung vào dữ liệu quan trọng, giúp người dùng ra quyết định nhanh trong tình huống khẩn cấp.

## 👥 Đối tượng sử dụng (Target Audience)
-   **Kỹ sư vận hành (Operations Engineers):** Giám sát trực tiếp các thông số kỹ thuật của máy móc.
-   **Quản lý nhà máy (Plant Managers):** Theo dõi KPI, hiệu suất tổng thể và các cảnh báo hệ thống.
-   **Đội ngũ bảo trì (Maintenance Teams):** Phân tích log và trạng thái thiết bị để dự đoán hỏng hóc.

## 🚀 Các tính năng chính (Key Features)
-   **Dashboard Sector-07:** Giao diện trung tâm với các biểu đồ telemetry động, pulse animation thể hiện sự sống của dòng dữ liệu.
-   **KPI Bento Grid:** Các chỉ số quan trọng (Uptime, Signal Rate, Critical Incidents) được trình bày rõ ràng, dễ nắm bắt.
-   **Device Grid Management:** Quản lý danh sách thiết bị PLC, trạng thái kết nối và phiên bản phần mềm.
-   **Live System Logs:** Luồng log trực tiếp với phân loại mức độ nghiêm trọng (Info, Warning, Error), hỗ trợ truy vết sự cố nhanh chóng.

## 🎨 Triết lý thiết kế (Design Philosophy)
Dự án sử dụng ngôn ngữ thiết kế **Tactical Dark Mode**:
-   **Màu sắc:** Nền tối sâu (#060e20) kết hợp với màu xanh neon (#3fff8b) làm điểm nhấn, tạo sự tương phản cao và giảm mỏi mắt khi quan sát lâu.
-   **Typography:** Sử dụng 'Space Grotesk' cho các tiêu đề mang hơi hướng công nghệ và 'Inter' cho nội dung chi tiết để đảm bảo tính dễ đọc.
-   **Iconography:** Sử dụng Material Symbols Outlined để đồng bộ hóa phong cách tối giản.

## 🏗️ Công nghệ sử dụng (Technology Stack)
-   **Frontend:** React + TypeScript + Vite + Tailwind CSS (Đảm bảo giao diện mượt mà, phản hồi nhanh).
-   **Backend:** Go (Tối ưu cho việc xử lý đồng thời và hiệu năng cao).
-   **Data Pipeline:** Kafka (Message Bus), Redis (Caching), Clickhouse (Analytics Storage).
