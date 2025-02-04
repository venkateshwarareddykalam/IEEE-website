import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Timer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return null;
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!timeLeft) {
        return (
            <div className="text-center text-2xl font-semibold text-red-500">
                Conference has started!
            </div>
        );
    }

    return (
        <motion.div
            className="flex justify-center gap-8 bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                    <div className="text-5xl font-extrabold">{value}</div>
                    <div className="text-sm uppercase tracking-wide text-gray-400">{unit}</div>
                </div>
            ))}
        </motion.div>
    );
};

export default Timer;
