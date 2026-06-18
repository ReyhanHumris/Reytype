import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import Layout from './components/Layout';
import PracticeView from './views/PracticeView';
import LeaderboardView from './views/LeaderboardView';
import HistoryView from './views/HistoryView';
import SettingsView from './views/SettingsView';
import { generateWords } from './data/words';
import { calculateWPM, calculateAccuracy } from './utils/typing';

const GAME_STATE = {
  IDLE: 'idle',
  RUNNING: 'running',
  FINISHED: 'finished',
};

function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState('practice');

  // Settings
  const [settings, setSettings] = useState({
    time: 15,
    isCustomTime: false,
    fontSize: 32,
    lineCount: 3,
    language: 'en',
  });

  // Game state
  const [gameState, setGameState] = useState(GAME_STATE.IDLE);
  const [words, setWords] = useState(() => generateWords(settings.language));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [typedChars, setTypedChars] = useState({});
  const [timeLeft, setTimeLeft] = useState(settings.time);

  // Refs
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  // Generate new words when language changes
  useEffect(() => {
    if (gameState === GAME_STATE.IDLE) {
      setWords(generateWords(settings.language));
    }
  }, [settings.language, gameState]);

  // Update timeLeft when settings.time changes and game is idle
  useEffect(() => {
    if (gameState === GAME_STATE.IDLE) {
      setTimeLeft(settings.time);
    }
  }, [settings.time, gameState]);

  // Timer logic
  useEffect(() => {
    if (gameState === GAME_STATE.RUNNING) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setGameState(GAME_STATE.FINISHED);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameState]);

  // Calculate live/final stats
  const stats = useMemo(() => {
    if (gameState === GAME_STATE.IDLE) return null;

    const timeElapsed = settings.time - timeLeft || 1; // prevent div by zero
    let correctChars = 0;
    let incorrectChars = 0;
    let totalTypedChars = 0;

    for (let i = 0; i <= currentWordIndex; i++) {
      const word = words[i];
      if (!word) continue;
      const typed = typedChars[i] || '';
      
      if (i < currentWordIndex) {
        for (let j = 0; j < Math.max(word.length, typed.length); j++) {
          totalTypedChars++;
          if (j < word.length && j < typed.length && typed[j] === word[j]) {
            correctChars++;
          } else {
            incorrectChars++;
          }
        }
        if (typed.length > 0) {
          correctChars++;
          totalTypedChars++;
        }
      } else {
        for (let j = 0; j < typed.length; j++) {
          totalTypedChars++;
          if (j < word.length && typed[j] === word[j]) {
            correctChars++;
          } else {
            incorrectChars++;
          }
        }
      }
    }

    return {
      wpm: calculateWPM(correctChars, timeElapsed),
      accuracy: calculateAccuracy(correctChars, totalTypedChars),
      correctChars,
      incorrectChars,
      wordsCompleted: currentWordIndex,
      totalChars: totalTypedChars,
      timeElapsed,
    };
  }, [gameState, words, currentWordIndex, typedChars, timeLeft, settings.time]);

  // Save history on finish
  useEffect(() => {
    if (gameState === GAME_STATE.FINISHED && stats) {
      const saved = localStorage.getItem('typerush_history');
      let history = [];
      if (saved) {
        try {
          history = JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
      history.unshift({
        date: new Date().toISOString(),
        wpm: stats.wpm,
        accuracy: stats.accuracy,
        timeElapsed: stats.timeElapsed,
      });
      localStorage.setItem('typerush_history', JSON.stringify(history.slice(0, 50))); // Keep last 50
    }
  }, [gameState]); // only on state change, stats is implicitly stable enough for this check

  // Handle keyboard input
  const handleKeyDown = useCallback(
    (e) => {
      if (gameState === GAME_STATE.FINISHED) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        handleRestart();
        return;
      }

      // Prevent default for keys we handle
      if (e.key.length === 1 || e.key === 'Backspace' || e.key === ' ') {
        e.preventDefault();
      } else {
        return;
      }

      // Start timer on first keypress
      if (gameState === GAME_STATE.IDLE) {
        setGameState(GAME_STATE.RUNNING);
        startTimeRef.current = Date.now();
      }

      if (e.key === ' ') {
        // Space: move to next word
        if (currentCharIndex > 0) {
          setCurrentWordIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }
      } else if (e.key === 'Backspace') {
        // Backspace: delete last char
        if (currentCharIndex > 0) {
          setCurrentCharIndex(prev => prev - 1);
          setTypedChars(prev => {
            const current = prev[currentWordIndex] || '';
            return {
              ...prev,
              [currentWordIndex]: current.slice(0, -1),
            };
          });
        } else if (currentWordIndex > 0 && currentCharIndex === 0) {
           // Allow backspacing to previous word if we haven't typed anything in the current word yet
           setCurrentWordIndex(prev => prev - 1);
           setCurrentCharIndex((typedChars[currentWordIndex - 1] || '').length);
        }
      } else if (e.key.length === 1) {
        // Regular character
        setTypedChars(prev => {
          const current = prev[currentWordIndex] || '';
          return {
            ...prev,
            [currentWordIndex]: current + e.key,
          };
        });
        setCurrentCharIndex(prev => prev + 1);
      }
    },
    [gameState, currentWordIndex, currentCharIndex, typedChars]
  );

  // Restart game
  const handleRestart = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setGameState(GAME_STATE.IDLE);
    setWords(generateWords(settings.language));
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setTypedChars({});
    setTimeLeft(settings.time);
  }, [settings.language, settings.time]);

  // Handle settings change
  const handleSettingsChange = useCallback(
    (newSettings) => {
      setSettings(newSettings);
      if (newSettings.language !== settings.language && gameState === GAME_STATE.IDLE) {
        setWords(generateWords(newSettings.language));
      }
      if (newSettings.time !== settings.time && gameState === GAME_STATE.IDLE) {
        setTimeLeft(newSettings.time);
      }
    },
    [settings, gameState]
  );

  // Keyboard shortcut: Tab to restart
  useEffect(() => {
    const handleGlobalKey = (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        handleRestart();
        // Visual feedback
        const canvas = document.getElementById('typing-canvas');
        if (canvas) {
          canvas.classList.add('opacity-50');
          setTimeout(() => canvas.classList.remove('opacity-50'), 100);
        }
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [handleRestart]);

  // Render current view
  const renderView = () => {
    switch (currentView) {
      case 'leaderboard':
        return <LeaderboardView />;
      case 'history':
        return <HistoryView />;
      case 'settings':
        return <SettingsView settings={settings} onSettingsChange={handleSettingsChange} />;
      case 'practice':
      default:
        return (
          <PracticeView
            words={words}
            currentWordIndex={currentWordIndex}
            currentCharIndex={currentCharIndex}
            typedChars={typedChars}
            timeLeft={timeLeft}
            totalTime={settings.time}
            isRunning={gameState === GAME_STATE.RUNNING}
            stats={stats}
            settings={settings}
            onSettingsChange={handleSettingsChange}
            onKeyDown={handleKeyDown}
          />
        );
    }
  };

  return (
    <Layout
      currentView={currentView}
      setView={setCurrentView}
      settings={settings}
      onSettingsChange={handleSettingsChange}
    >
      {renderView()}
      
      {/* End Session Overlay */}
      {gameState === GAME_STATE.FINISHED && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-surface-container border border-outline-variant/30 p-12 rounded-2xl max-w-lg w-full flex flex-col items-center gap-6 shadow-2xl scale-in-center">
            <h2 className="font-headline-lg text-primary-fixed mb-4">Time's Up!</h2>
            <div className="flex gap-12 mb-8">
              <div className="flex flex-col items-center">
                <span className="font-metric-label text-on-surface-variant uppercase tracking-widest mb-2">WPM</span>
                <span className="font-metric-value text-5xl text-primary">{stats?.wpm}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-metric-label text-on-surface-variant uppercase tracking-widest mb-2">Accuracy</span>
                <span className="font-metric-value text-5xl text-primary">{stats?.accuracy}%</span>
              </div>
            </div>
            <button 
              onClick={handleRestart}
              className="px-8 py-3 bg-primary-fixed text-on-primary-fixed font-headline-md rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(195,244,0,0.3)] hover:shadow-[0_0_25px_rgba(195,244,0,0.5)]"
            >
              Play Again
            </button>
            <p className="font-body-sm text-on-surface-variant/60 mt-2">or press Tab</p>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default App;
