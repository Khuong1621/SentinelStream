
import { TopAppBar } from './components/TopAppBar';
import { SideNavBar } from './components/SideNavBar';
import { KpiGrid } from './components/KpiGrid';
import { TelemetryChart } from './components/TelemetryChart';
import { DeviceGrid } from './components/DeviceGrid';
import { LiveLogs } from './components/LiveLogs';

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      <TopAppBar />
      <SideNavBar />

      {/* Main Content Area */}
      <main className="md:ml-64 pt-20 px-6 pb-12 min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black font-headline tracking-tighter text-on-surface uppercase">Sector-07_Command</h1>
            <p className="font-label text-xs tracking-[0.3em] text-primary flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(63,255,139,0.5)]"></span>
              LIVE TELEMETRY ACTIVE
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-low px-4 py-2 rounded border border-outline-variant/10">
              <p className="font-label text-[10px] opacity-50 uppercase tracking-[0.2em]">Timestamp</p>
              <p className="font-headline text-sm tabular-nums">2024-05-24 14:32:01.042</p>
            </div>
          </div>
        </div>

        <KpiGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <TelemetryChart />
          <DeviceGrid />
        </div>

        <LiveLogs />
      </main>

      {/* BottomNavBar for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-low border-t border-outline-variant/10 px-6 py-3 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-label uppercase">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-outlined">monitoring</span>
          <span className="text-[10px] font-label uppercase">Stats</span>
        </button>
        <button className="bg-primary text-on-primary p-3 rounded-full -mt-10 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">add</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-outlined">terminal</span>
          <span className="text-[10px] font-label uppercase">Logs</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-label uppercase">Menu</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
