

const devices = [
  { id: 'PLC-UNIT-001', version: 'v4.2.1-prod', status: 'Online', type: 'primary' },
  { id: 'PLC-UNIT-002', version: 'v4.2.1-prod', status: 'Online', type: 'primary' },
  { id: 'PLC-UNIT-003', version: 'v4.1.0-stale', status: 'Offline', type: 'tertiary' },
  { id: 'PLC-UNIT-004', version: 'v4.2.1-prod', status: 'Online', type: 'primary' },
];

export const DeviceGrid: React.FC = () => {
  return (
    <div className="bg-surface-container-low rounded-lg p-6">
      <h2 className="font-headline font-bold text-lg uppercase tracking-tight mb-6 flex items-center justify-between">
        Device Grid
        <span className="material-symbols-outlined text-on-surface-variant text-sm">filter_list</span>
      </h2>
      <div className="space-y-3 max-h-[320px] overflow-y-auto pr-2">
        {devices.map((device) => (
          <div key={device.id} className={`flex items-center justify-between p-3 bg-surface-container-high rounded border-l-4 ${device.type === 'primary' ? 'border-primary' : 'border-tertiary'}`}>
            <div className="flex items-center gap-3">
              <span className={`material-symbols-outlined ${device.type === 'primary' ? 'text-primary' : 'text-tertiary'}`}>memory</span>
              <div>
                <p className="text-xs font-bold font-headline">{device.id}</p>
                <p className="text-[10px] font-label opacity-50">{device.version}</p>
              </div>
            </div>
            <span className={`text-[10px] font-label uppercase ${device.type === 'primary' ? 'text-primary' : 'text-tertiary'}`}>{device.status}</span>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 border border-outline-variant/20 rounded font-label text-[10px] uppercase tracking-widest hover:bg-surface-container-high transition-colors">
        View Network Map
      </button>
    </div>
  );
};
