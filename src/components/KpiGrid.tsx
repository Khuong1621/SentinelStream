

export const KpiGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Uptime KPI */}
      <div className="bg-surface-container-low p-6 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl"></div>
        <div className="flex justify-between items-start mb-4">
          <span className="material-symbols-outlined text-primary bg-on-primary-container/30 p-2 rounded">timer</span>
          <span className="bg-on-primary-container text-primary font-label text-[10px] px-2 py-0.5 rounded tracking-widest uppercase">Stable</span>
        </div>
        <h3 className="font-label text-xs tracking-widest text-on-surface-variant uppercase mb-1">System Uptime</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black font-headline text-primary tracking-tight">99.98</span>
          <span className="text-sm opacity-50 font-headline">%</span>
        </div>
        <div className="mt-4 h-1 w-full bg-surface-container-highest overflow-hidden rounded-full">
          <div className="h-full w-[99.98%] bg-primary shadow-[0_0_10px_rgba(63,255,139,0.4)]"></div>
        </div>
      </div>

      {/* Signal Rate KPI */}
      <div className="bg-surface-container-low p-6 rounded-lg">
        <div className="flex justify-between items-start mb-4">
          <span className="material-symbols-outlined text-secondary bg-on-secondary-container/10 p-2 rounded">sensors</span>
          <div className="flex flex-col items-end">
            <span className="text-secondary font-label text-xs">+12.4%</span>
          </div>
        </div>
        <h3 className="font-label text-xs tracking-widest text-on-surface-variant uppercase mb-1">Signal Rate</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black font-headline text-on-surface tracking-tight">1,242</span>
          <span className="text-sm opacity-50 font-label uppercase tracking-widest">ev/s</span>
        </div>
        <div className="mt-4 flex gap-1 h-8 items-end">
          <div className="w-full bg-surface-container-highest h-3 rounded-sm"></div>
          <div className="w-full bg-surface-container-highest h-5 rounded-sm"></div>
          <div className="w-full bg-primary/30 h-4 rounded-sm"></div>
          <div className="w-full bg-primary h-8 rounded-sm"></div>
          <div className="w-full bg-primary/70 h-6 rounded-sm"></div>
          <div className="w-full bg-primary/40 h-5 rounded-sm"></div>
        </div>
      </div>

      {/* Errors KPI */}
      <div className="bg-surface-container-low p-6 rounded-lg">
        <div className="flex justify-between items-start mb-4">
          <span className="material-symbols-outlined text-tertiary bg-error-container/30 p-2 rounded">warning</span>
          <span className="bg-error-container text-tertiary font-label text-[10px] px-2 py-0.5 rounded tracking-widest uppercase">Critical</span>
        </div>
        <h3 className="font-label text-xs tracking-widest text-on-surface-variant uppercase mb-1">Total Errors (24h)</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black font-headline text-tertiary tracking-tight">14</span>
          <span className="text-sm opacity-50 font-headline">INCIDENTS</span>
        </div>
        <p className="mt-4 text-xs font-label opacity-40 uppercase tracking-widest">Average MTTR: 12.4m</p>
      </div>
    </div>
  );
};
