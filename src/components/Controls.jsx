import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const Controls = ({ isActive, setIsActive, setTimeLeft, mode, modes }) => {
    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setIsActive(false);
        if (modes && modes[mode]) {
            setTimeLeft(modes[mode]);
        }
    };

    return (
        <div className="flex justify-center gap-6 mt-4">
            <button
                onClick={handleToggle}
                className="group relative px-8 py-3 bg-cyber-black border border-neon-green text-neon-green uppercase tracking-widest font-bold overflow-hidden hover:bg-neon-green hover:text-cyber-black transition-all duration-300 shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:shadow-[0_0_20px_rgba(0,255,0,0.6)]"
            >
                <span className="relative z-10 flex items-center gap-2">
                    {isActive ? <Pause size={20} /> : <Play size={20} />}
                    {isActive ? 'Halt' : 'Init'}
                </span>
            </button>

            <button
                onClick={handleReset}
                className="group relative px-4 py-3 bg-cyber-black border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-cyber-black transition-all duration-300 shadow-[0_0_10px_rgba(255,0,255,0.3)] hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]"
            >
                <RotateCcw size={20} />
            </button>
        </div>
    );
};

export default Controls;
