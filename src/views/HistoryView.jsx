import { useState, useEffect } from 'react';

export default function HistoryView() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('typerush_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const clearHistory = () => {
    if (confirm("Are you sure you want to clear your history?")) {
      localStorage.removeItem('typerush_history');
      setHistory([]);
    }
  };

  return (
    <div className="max-w-container-max w-full bg-surface-container rounded-xl p-8 border border-outline-variant/20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-headline-lg text-primary text-3xl">Session History</h2>
        {history.length > 0 && (
          <button 
            onClick={clearHistory}
            className="px-4 py-2 bg-error-container text-on-error-container rounded-md hover:bg-error hover:text-on-error transition-colors"
          >
            Clear History
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="text-center py-12 text-on-surface-variant">
          <span className="material-symbols-outlined text-6xl mb-4 opacity-50" data-icon="history">history</span>
          <p className="font-body-lg">No history yet. Complete a typing test to see your stats here.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/30 text-on-tertiary-container font-metric-label text-sm uppercase tracking-wider">
                <th className="pb-3 pr-4">Date</th>
                <th className="pb-3 px-4 text-center">WPM</th>
                <th className="pb-3 px-4 text-center">Accuracy</th>
                <th className="pb-3 pl-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody>
              {history.map((session, i) => (
                <tr key={i} className="border-b border-outline-variant/10 hover:bg-surface-variant/30 transition-colors">
                  <td className="py-4 pr-4 font-body-sm text-on-surface">
                    {new Date(session.date).toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-center font-metric-value text-primary-fixed">
                    {session.wpm}
                  </td>
                  <td className="py-4 px-4 text-center font-metric-value text-primary">
                    {session.accuracy}%
                  </td>
                  <td className="py-4 pl-4 text-right font-metric-value text-on-surface-variant">
                    {session.timeElapsed}s
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
