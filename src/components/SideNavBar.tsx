

export const SideNavBar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-[#091328] border-r border-[#40485d]/15 pt-20 pb-6 z-40">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-surface-container-highest rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">shield</span>
          </div>
          <div>
            <p className="text-xs font-headline uppercase tracking-widest opacity-60">System Admin</p>
            <p className="text-xs font-bold text-on-surface">Tactical Observer v2.4</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        <a className="flex items-center gap-4 px-6 py-3 bg-surface-container-high text-[#00E676] border-l-4 border-[#00E676] transition-all duration-200" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-headline uppercase tracking-widest text-xs">Dashboard</span>
        </a>
        <a className="flex items-center gap-4 px-6 py-3 text-on-surface opacity-60 hover:opacity-100 hover:bg-surface-variant translate-x-1 transition-all" href="#">
          <span className="material-symbols-outlined">monitoring</span>
          <span className="font-headline uppercase tracking-widest text-xs">Analytics</span>
        </a>
        <a className="flex items-center gap-4 px-6 py-3 text-on-surface opacity-60 hover:opacity-100 hover:bg-surface-variant translate-x-1 transition-all" href="#">
          <span className="material-symbols-outlined">terminal</span>
          <span className="font-headline uppercase tracking-widest text-xs">Log Stream</span>
        </a>
        <a className="flex items-center gap-4 px-6 py-3 text-on-surface opacity-60 hover:opacity-100 hover:bg-surface-variant translate-x-1 transition-all" href="#">
          <span className="material-symbols-outlined">router</span>
          <span className="font-headline uppercase tracking-widest text-xs">Devices</span>
        </a>
        <a className="flex items-center gap-4 px-6 py-3 text-on-surface opacity-60 hover:opacity-100 hover:bg-surface-variant translate-x-1 transition-all" href="#">
          <span className="material-symbols-outlined">description</span>
          <span className="font-headline uppercase tracking-widest text-xs">Reports</span>
        </a>
      </nav>
      <div className="px-6 space-y-4">
        <button className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-[10px] tracking-[0.2em] font-black rounded-lg uppercase shadow-lg shadow-primary/10 active:scale-95 transition-transform">
          DEPLOY NEW NODE
        </button>
        <div className="pt-4 border-t border-outline-variant/10 space-y-1">
          <a className="flex items-center gap-4 py-2 text-on-surface opacity-60 hover:opacity-100 text-xs font-label uppercase tracking-widest" href="#">
            <span className="material-symbols-outlined text-sm">help</span>
            Help
          </a>
          <a className="flex items-center gap-4 py-2 text-error opacity-60 hover:opacity-100 text-xs font-label uppercase tracking-widest" href="#">
            <span className="material-symbols-outlined text-sm">logout</span>
            Logout
          </a>
        </div>
      </div>
    </aside>
  );
};
