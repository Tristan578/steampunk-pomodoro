import React from 'react';
import { motion } from 'framer-motion';
import { Ghost } from 'lucide-react';

const HelloWorld = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center space-y-4"
            >
                <div className="p-3 bg-indigo-100 rounded-full">
                    <Ghost className="w-8 h-8 text-indigo-600" />
                </div>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                    Hello World
                </h1>
                <p className="text-gray-500 text-center max-w-sm">
                    This is a dummy component using Tailwind CSS, Lucide React icons, and Framer Motion animations.
                </p>
                <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                    Click Me
                </button>
            </motion.div>
        </div>
    );
};

export default HelloWorld;
