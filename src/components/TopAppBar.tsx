

export const TopAppBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060e20] flex justify-between items-center w-full px-6 py-3">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold text-[#00E676] tracking-tighter font-headline">SentinelStream</span>
        <nav className="hidden md:flex gap-6 items-center">
          <a className="font-headline text-sm tracking-tight text-[#00E676] font-bold border-b-2 border-[#00E676] px-1 py-1" href="#">Dashboard</a>
          <a className="font-headline text-sm tracking-tight text-on-surface opacity-70 hover:bg-surface-container-high hover:text-[#00E676] transition-colors px-1 py-1" href="#">Analytics</a>
          <a className="font-headline text-sm tracking-tight text-on-surface opacity-70 hover:bg-surface-container-high hover:text-[#00E676] transition-colors px-1 py-1" href="#">Nodes</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant/15">
          <span className="material-symbols-outlined text-sm opacity-50 mr-2">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-xs font-label uppercase tracking-widest text-on-surface placeholder-outline/50 w-32" placeholder="CMD_FIND..." type="text"/>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-surface-container-high transition-colors text-on-surface opacity-70 hover:opacity-100">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button className="p-2 hover:bg-surface-container-high transition-colors text-on-surface opacity-70 hover:opacity-100 relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-background"></span>
          </button>
          <button className="p-2 hover:bg-surface-container-high transition-colors text-on-surface opacity-70 hover:opacity-100">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
};
