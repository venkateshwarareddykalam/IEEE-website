import React from 'react';
import { motion } from 'framer-motion';
import Timer from '../utils/Timer'; // Import the Timer component

const ConferenceTimer = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center w-full min-h-[50vh] bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="text-center text-3xl font-extrabold mb-4 drop-shadow-lg">
                🚀 Conference Starts In:
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 w-full max-w-3xl">
                <Timer targetDate="2025-06-15T12:00:00" />
            </div>
        </motion.div>
    );
};

export default ConferenceTimer;
