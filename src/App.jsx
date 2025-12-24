import { useState, useEffect, useRef } from 'react'
import { Settings as SettingsIcon } from 'lucide-react'
import TimerDisplay from './components/TimerDisplay'
import Controls from './components/Controls'
import Settings from './components/Settings'

function App() {
  const [mode, setMode] = useState('pomodoro') // pomodoro, short, long
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  // Timer Modes configuration
  const [modes, setModes] = useState({
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  })

  const timerRef = useRef(null);

  // Handle Mode Change
  const switchMode = (newMode) => {
    setMode(newMode);
    setTimeLeft(modes[newMode]);
    setIsActive(false);
  };

  // Update logic when settings change
  const updateModes = (newModes) => {
    setModes(newModes);
    // If we are currently in that mode and not active, update time left immediately
    if (!isActive) {
      setTimeLeft(newModes[mode]);
    }
  }

  // Timer Logic
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(timerRef.current);
      // Optional: Add sound here later
      // Simple notification
      if (Notification.permission === 'granted') {
        new Notification("Timer Complete", { body: "Your session has ended." });
      }
    }

    return () => clearInterval(timerRef.current);
  }, [isActive, timeLeft]);

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-[128px] pointer-events-none animate-pulse-fast"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[128px] pointer-events-none animate-pulse-fast delay-700"></div>

      <div className="z-10 w-full max-w-md p-8 border border-neon-green/30 bg-cyber-gray/50 backdrop-blur-sm rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.1)] relative">
        {/* Decorative corner borders */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon-pink"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-neon-pink"></div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-neon-pink"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon-pink"></div>

        <button
          onClick={() => setIsSettingsOpen(true)}
          className="absolute top-4 right-4 text-gray-500 hover:text-neon-pink transition-colors"
        >
          <SettingsIcon size={20} />
        </button>

        <h1 className="text-4xl font-bold text-center mb-8 text-neon-green tracking-wider text-shadow-green uppercase">
          Cyber<span className="text-neon-pink text-shadow-neon">Pomo</span>
        </h1>

        <TimerDisplay timeLeft={timeLeft} mode={mode} />
        <Controls isActive={isActive} setIsActive={setIsActive} setTimeLeft={setTimeLeft} mode={mode} modes={modes} />

        <div className="mt-8 flex justify-center gap-4 text-sm text-gray-400">
          <button onClick={() => switchMode('pomodoro')} className={`uppercase tracking-widest hover:text-neon-pink transition-colors duration-300 ${mode === 'pomodoro' ? 'text-neon-pink text-shadow-neon font-bold' : ''}`}>Work</button>
          <button onClick={() => switchMode('short')} className={`uppercase tracking-widest hover:text-neon-green transition-colors duration-300 ${mode === 'short' ? 'text-neon-green text-shadow-green font-bold' : ''}`}>Short</button>
          <button onClick={() => switchMode('long')} className={`uppercase tracking-widest hover:text-neon-blue transition-colors duration-300 ${mode === 'long' ? 'text-[#00ffff] drop-shadow-[0_0_5px_#00ffff] font-bold' : ''}`}>Long</button>
        </div>
      </div>

      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentModes={modes}
        updateModes={updateModes}
      />
    </div>
  )
}

export default App
