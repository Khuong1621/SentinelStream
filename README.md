# SentinelStream - Tactical Observer Dashboard

SentinelStream is a high-performance, real-time telemetry monitoring system for industrial environments.

## 🚀 Features
- **SentinelSync:** Real-time data synchronization engine using WebSockets for instantaneous log and telemetry updates.
- **Live Telemetry:** Sector-based command center with real-time throughput analytics.
- **KPI Monitoring:** Track system uptime, signal rates, and critical incidents at a glance.
- **Device Grid:** Monitor PLC unit status and versions across your network.
- **System Logs:** Live-streaming log feed with multi-level severity indicators.
- **Responsive UI:** Tactical dark-mode interface optimized for both desktop and mobile.

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Vite, Tailwind CSS.
- **Backend:** Go (Standard Layout).
- **Icons:** Material Symbols Outlined.
- **Typography:** Space Grotesk (Headlines), Inter (Body).

## 📦 Getting Started

### Prerequisites
- Node.js (v20+)
- Go (v1.24+)

### Installation
1. Clone the repository.
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Build the dashboard:
   ```bash
   npm run build
   ```
4. Run the Go server:
   ```bash
   go run cmd/server/main.go
   ```
5. Open `http://localhost:8080` in your browser.

## 🏗️ Project Structure
- `/cmd/server`: Backend entry point.
- `/src`: React frontend source code.
- `/internal`: Private backend logic (Service, Repository, Handler).
- `/pkg`: Shared backend models and utilities.
- `/mock-provider`: Mock telemetry data generator for testing.
- `/docs`: Architecture, conventions, UI checklists, and [Product Concept](docs/CONCEPT.md).

## 🧪 Testing with Mock Data
To see real-time updates in action:
1. Start the main server: `go run cmd/server/main.go`
2. In a new terminal, run the mock provider:
   ```bash
   cd mock-provider
   go run main.go
   ```
3. Observe the live logs on the dashboard.

## 🚢 Deployment
The project includes a GitHub Action workflow for automated deployment to Azure Web Apps. Ensure the `AZURE_WEBAPP_PUBLISH_PROFILE` secret is configured in your repository settings.
