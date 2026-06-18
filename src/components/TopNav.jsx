export default function TopNav({ currentView, setView }) {
  return (
    <header className="w-full h-16 bg-surface dark:bg-surface sticky top-0 z-50">
      <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto w-full h-full">
        <div className="flex items-center gap-8">
          <span className="font-headline-md text-headline-md font-bold text-primary-fixed">
            ReyType
          </span>
          <nav className="hidden md:flex gap-6">
            <a
              onClick={() => setView('practice')}
              className={`font-body-lg text-body-lg cursor-pointer active:scale-95 transition-colors duration-200 ${
                currentView === 'practice'
                  ? 'text-primary-fixed border-b-2 border-primary-fixed pb-1'
                  : 'text-on-surface-variant dark:text-on-surface-variant hover:text-primary'
              }`}
            >
              Practice
            </a>
            <a
              onClick={() => setView('leaderboard')}
              className={`font-body-lg text-body-lg cursor-pointer active:scale-95 transition-colors duration-200 ${
                currentView === 'leaderboard'
                  ? 'text-primary-fixed border-b-2 border-primary-fixed pb-1'
                  : 'text-on-surface-variant dark:text-on-surface-variant hover:text-primary'
              }`}
            >
              Leaderboard
            </a>
            <a
              onClick={() => setView('settings')}
              className={`font-body-lg text-body-lg cursor-pointer active:scale-95 transition-colors duration-200 ${
                currentView === 'settings'
                  ? 'text-primary-fixed border-b-2 border-primary-fixed pb-1'
                  : 'text-on-surface-variant dark:text-on-surface-variant hover:text-primary'
              }`}
            >
              Settings
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setView('history')}
            className={`cursor-pointer active:scale-95 transition-colors duration-200 ${
              currentView === 'history' ? 'text-primary-fixed' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined" data-icon="analytics">
              analytics
            </span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95">
            <span className="material-symbols-outlined" data-icon="account_circle">
              account_circle
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
