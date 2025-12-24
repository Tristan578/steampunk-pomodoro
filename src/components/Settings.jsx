import React from 'react';
import { X } from 'lucide-react';

const Settings = ({ isOpen, onClose, updateModes, currentModes }) => {
    if (!isOpen) return null;

    const [localModes, setLocalModes] = React.useState(currentModes);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalModes({ ...localModes, [name]: parseInt(value) * 60 });
    };

    const handleSave = () => {
        updateModes(localModes);
        onClose();
    };

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="bg-cyber-gray border border-neon-pink p-8 rounded-lg w-full max-w-sm relative shadow-[0_0_30px_rgba(255,0,255,0.2)]">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-neon-pink transition-colors">
                    <X size={24} />
                </button>
                <h2 className="text-2xl font-bold text-neon-pink mb-6 text-shadow-neon uppercase tracking-wider">Config</h2>

                <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-neon-green text-sm uppercase tracking-widest">Work (min)</label>
                        <input
                            type="number"
                            name="pomodoro"
                            value={localModes.pomodoro / 60}
                            onChange={handleChange}
                            className="bg-black/50 border border-neon-green/50 text-neon-green p-2 focus:border-neon-green focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-neon-green text-sm uppercase tracking-widest">Short Break (min)</label>
                        <input
                            type="number"
                            name="short"
                            value={localModes.short / 60}
                            onChange={handleChange}
                            className="bg-black/50 border border-neon-green/50 text-neon-green p-2 focus:border-neon-green focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-neon-green text-sm uppercase tracking-widest">Long Break (min)</label>
                        <input
                            type="number"
                            name="long"
                            value={localModes.long / 60}
                            onChange={handleChange}
                            className="bg-black/50 border border-neon-green/50 text-neon-green p-2 focus:border-neon-green focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-all"
                        />
                    </div>
                </div>

                <button
                    onClick={handleSave}
                    className="w-full mt-8 bg-neon-pink text-cyber-black font-bold uppercase py-3 tracking-widest hover:bg-neon-pink/80 transition-colors shadow-[0_0_15px_rgba(255,0,255,0.5)]"
                >
                    Save Data
                </button>
            </div>
        </div>
    );
};

export default Settings;
