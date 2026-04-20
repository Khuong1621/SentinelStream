# Contributing Guide

Welcome to the project! Please follow these guidelines to ensure a smooth development process.

## 🚀 Before You Start
**"Trước khi bắt đầu bất kỳ feature nào, bạn bắt buộc phải đọc CONTRIBUTING.md để nắm quy trình git, docs/ARCHITECTURE.md để hiểu cấu trúc code và docs/CONVENTIONS.md để tuân thủ các quy tắc coding & commit. Sau khi hoàn thành một UI, hãy cập nhật trạng thái vào docs/UI_CHECKLIST.md và đính kèm route URL đã attach."**

## 🌿 Branching Strategy
- Create a new branch from `main`.
- Naming convention: `feat/khuong-<feature-name>` or `fix/khuong-<bug-name>`.
  - Example: `feat/khuong-ui-login`

## 💬 Commit Messages
We follow the specific format defined in [docs/CONVENTIONS.md](docs/CONVENTIONS.md).

## 🔃 Pull Request (PR) Process
1. Fill out the PR template (if available).
2. Describe what has changed.
3. Attach screenshots or videos of UI changes.
4. Ensure your code follows the `ARCHITECTURE.md` guidelines.

## 🏗️ Project Structure (Standard Go Layout)
- `/cmd`: Application entry points (main.go).
- `/internal`: Private application and library code. Business logic goes here.
- `/pkg`: Library code that's ok to use by external applications.
- `/api`: API definitions (e.g., .proto files).

## 💻 Coding Standards
- **Interface Pollution**: Do not create interfaces before they are actually needed. Follow the mantra: "Accept interfaces, return structs".
- **Error Handling**: Use explicit error checking. No try-catch. `if err != nil { return err }`.
- **Concurrency**: Prefer using Channels for communication between Goroutines instead of Shared Memory.
- **Context**: Every function related to I/O (Database, Network) must receive `ctx context.Context` as its first parameter.
- **Naming**:
    - Variable names: `camelCase`.
    - Exported (Public) names: `PascalCase`.
    - Package names: Lowercase, short, and singular (e.g., `internal/handler`).
