

export const TelemetryChart: React.FC = () => {
  return (
    <div className="lg:col-span-2 bg-surface-container-low rounded-lg p-6 flex flex-col min-h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-headline font-bold text-lg uppercase tracking-tight">Signal Throughput</h2>
          <p className="font-label text-[10px] opacity-50 uppercase tracking-widest">Real-time Telemetry Analytics</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-surface-container-high px-3 py-1 rounded text-[10px] font-label uppercase tracking-widest text-primary border border-primary/20">LIVE</button>
          <button className="bg-surface-container-high px-3 py-1 rounded text-[10px] font-label uppercase tracking-widest opacity-40">1H</button>
          <button className="bg-surface-container-high px-3 py-1 rounded text-[10px] font-label uppercase tracking-widest opacity-40">24H</button>
        </div>
      </div>
      <div className="flex-1 relative mt-4">
        {/* SVG Chart Visualization */}
        <div className="absolute inset-0 flex items-end">
          <svg className="w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 800 200">
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3fff8b" stopOpacity="0.3"></stop>
                <stop offset="100%" stopColor="#3fff8b" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            <path d="M0 160 Q 40 150 80 170 T 160 140 T 240 180 T 320 150 T 400 130 T 480 160 T 560 140 T 640 170 T 720 130 T 800 150 V 200 H 0 Z" fill="url(#chartGradient)"></path>
            <path d="M0 160 Q 40 150 80 170 T 160 140 T 240 180 T 320 150 T 400 130 T 480 160 T 560 140 T 640 170 T 720 130 T 800 150" fill="none" stroke="#3fff8b" strokeWidth="2"></path>
          </svg>
          {/* Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-8 gap-0 pointer-events-none">
            <div className="border-r border-outline-variant/5"></div>
            <div className="border-r border-outline-variant/5"></div>
            <div className="border-r border-outline-variant/5"></div>
            <div className="border-r border-outline-variant/5"></div>
            <div className="border-r border-outline-variant/5"></div>
            <div className="border-r border-outline-variant/5"></div>
            <div className="border-r border-outline-variant/5"></div>
          </div>
        </div>
        {/* Data Points */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center group">
          <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_rgba(63,255,139,0.8)] border-2 border-background"></div>
          <div className="mt-2 bg-surface-container-highest px-2 py-1 rounded text-[10px] font-label border border-outline-variant/20 whitespace-nowrap">
            1.2k ev/s @ 14:30
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 border-t border-outline-variant/10 pt-4">
        <div className="flex gap-4">
          <div>
            <p className="font-label text-[10px] opacity-40 uppercase">Min</p>
            <p className="font-headline font-bold text-sm">842</p>
          </div>
          <div>
            <p className="font-label text-[10px] opacity-40 uppercase">Max</p>
            <p className="font-headline font-bold text-sm text-primary">1,492</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-label text-[10px] opacity-40 uppercase">Avg Throughput</p>
          <p className="font-headline font-bold text-sm">1,104 ev/s</p>
        </div>
      </div>
    </div>
  );
};
