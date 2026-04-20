

const logs = [
  { timestamp: '14:32:01.042', level: 'INFO', component: 'STREAM_INGEST', payload: 'Payload validation successful for NODE_024. Packet size: 1.2MB', type: 'primary' },
  { timestamp: '14:31:58.112', level: 'ERROR', component: 'NETWORK_IO', payload: 'Connection refused on PLC-UNIT-003. Retrying handshake (1/5)...', type: 'tertiary' },
  { timestamp: '14:31:55.891', level: 'WARN', component: 'THERMAL_MON', payload: 'Sensor TEMP_A2 exceeding nominal range (72°C). Cooling cycle initiated.', type: 'secondary' },
  { timestamp: '14:31:50.004', level: 'INFO', component: 'AUTH_SVC', payload: 'Session token rotation completed for ADMIN_DASH_07.', type: 'primary' },
  { timestamp: '14:31:48.221', level: 'INFO', component: 'DATABASE', payload: 'Telemetry log batch commit successful (542 records).', type: 'primary' },
];

export const LiveLogs: React.FC = () => {
  return (
    <div className="bg-surface-container-low rounded-lg overflow-hidden flex flex-col h-[350px]">
      <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low/50 backdrop-blur-md sticky top-0 z-10">
        <h2 className="font-headline font-bold text-sm uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-tertiary">bug_report</span>
          Live System Logs
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="w-2 h-2 bg-secondary rounded-full"></span>
            <span className="w-2 h-2 bg-tertiary rounded-full"></span>
          </div>
          <span className="text-[10px] font-label opacity-50 uppercase tracking-widest">Auto-scroll: ON</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto font-headline text-xs p-0">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-surface-container-high text-[10px] uppercase tracking-widest opacity-50">
            <tr>
              <th className="px-6 py-3 font-normal">Timestamp</th>
              <th className="px-6 py-3 font-normal">Level</th>
              <th className="px-6 py-3 font-normal">Component</th>
              <th className="px-6 py-3 font-normal">Payload</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {logs.map((log, index) => (
              <tr key={index} className={`hover:bg-surface-container-high transition-colors ${log.type === 'tertiary' ? 'bg-error-container/5' : ''}`}>
                <td className="px-6 py-3 tabular-nums opacity-50">{log.timestamp}</td>
                <td className="px-6 py-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    log.level === 'INFO' ? 'bg-on-primary-container text-primary' :
                    log.level === 'ERROR' ? 'bg-error-container text-tertiary' :
                    'bg-on-secondary-container text-secondary'
                  }`}>{log.level}</span>
                </td>
                <td className={`px-6 py-3 font-medium ${log.type === 'tertiary' ? 'text-tertiary' : ''}`}>{log.component}</td>
                <td className={`px-6 py-3 ${log.type === 'tertiary' ? 'text-tertiary/90' : 'opacity-80'}`}>{log.payload}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
