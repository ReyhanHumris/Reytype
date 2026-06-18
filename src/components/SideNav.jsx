export default function SideNav({ currentView, setView, settings, onSettingsChange }) {
  const timeOptions = [
    { value: 15, icon: 'timer_1' },
    { value: 30, icon: 'timer_10' },
    { value: 60, icon: 'timer_10' },
    { value: 120, icon: 'more_time' },
  ];

  return (
    <aside className="hidden md:flex h-screen w-20 fixed left-0 top-0 bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant flex-col items-center py-8 z-50">
      <div className="mb-10 text-center">
        <span
          className="material-symbols-outlined text-primary-fixed text-4xl cursor-pointer"
          data-icon="keyboard"
          onClick={() => setView('practice')}
        >
          keyboard
        </span>
      </div>
      <div className="flex-1 flex flex-col gap-6 w-full">
        {timeOptions.map((opt) => {
          const isActive = settings.time === opt.value && !settings.isCustomTime;
          return (
            <div key={opt.value} className="flex flex-col items-center gap-1">
              <button
                onClick={() => {
                  onSettingsChange({ ...settings, time: opt.value, isCustomTime: false });
                  setView('practice');
                }}
                className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold transition-all active:scale-90 ${
                  isActive
                    ? 'text-primary-fixed border-r-2 border-primary-fixed bg-surface-variant'
                    : 'text-on-tertiary-container hover:bg-surface-variant'
                }`}
                title={`${opt.value}s`}
              >
                <span className="material-symbols-outlined">{opt.icon}</span>
              </button>
              <span
                className={`font-metric-label text-[10px] uppercase ${
                  isActive ? 'text-primary-fixed' : 'text-on-tertiary-container'
                }`}
              >
                {opt.value}s
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-auto flex flex-col gap-6 w-full">
        <button
          onClick={() => setView('history')}
          className={`w-12 h-12 mx-auto flex items-center justify-center rounded-lg transition-all active:scale-90 ${
            currentView === 'history'
              ? 'text-primary-fixed border-r-2 border-primary-fixed bg-surface-variant'
              : 'text-on-tertiary-container hover:bg-surface-variant'
          }`}
          title="History"
        >
          <span className="material-symbols-outlined" data-icon="history">
            history
          </span>
        </button>
        <button
          onClick={() => setView('settings')}
          className={`w-12 h-12 mx-auto flex items-center justify-center rounded-lg transition-all active:scale-90 ${
            currentView === 'settings'
              ? 'text-primary-fixed border-r-2 border-primary-fixed bg-surface-variant'
              : 'text-on-tertiary-container hover:bg-surface-variant'
          }`}
          title="Settings"
        >
          <span className="material-symbols-outlined" data-icon="settings">
            settings
          </span>
        </button>
      </div>
    </aside>
  );
}
