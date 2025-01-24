import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

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
    }, []);

    if (!timeLeft) {
        return <Typography variant="h6" align="center">Conference has started!</Typography>;
    }

    return (
        <Box display="flex" justifyContent="center" gap={3} sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            <Box textAlign="center">
                <Typography variant="h6">{timeLeft.days}</Typography>
                <Typography variant="body2">Days</Typography>
            </Box>
            <Box textAlign="center">
                <Typography variant="h6">{timeLeft.hours}</Typography>
                <Typography variant="body2">Hours</Typography>
            </Box>
            <Box textAlign="center">
                <Typography variant="h6">{timeLeft.minutes}</Typography>
                <Typography variant="body2">Minutes</Typography>
            </Box>
            <Box textAlign="center">
                <Typography variant="h6">{timeLeft.seconds}</Typography>
                <Typography variant="body2">Seconds</Typography>
            </Box>
        </Box>
    );
};

export default Timer;
