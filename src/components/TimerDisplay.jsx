import React from 'react';

const TimerDisplay = ({ timeLeft, mode }) => {
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const timeString = formatTime(timeLeft);

    return (
        <div className="relative flex justify-center items-center py-12">
            {/* Glitch layers */}
            <div className="text-8xl font-black text-neon-green relative z-10 tracking-widest">
                {timeString}
            </div>
            <div className="absolute text-8xl font-black text-neon-pink opacity-50 z-0 animate-glitch translate-x-[2px] blur-[1px]">
                {timeString}
            </div>
            <div className="absolute text-8xl font-black text-[#00ffff] opacity-50 z-0 animate-glitch animation-delay-500 -translate-x-[2px] blur-[1px]">
                {timeString}
            </div>
        </div>
    );
};

export default TimerDisplay;
