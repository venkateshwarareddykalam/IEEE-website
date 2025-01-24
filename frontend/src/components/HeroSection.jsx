import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '90vh',
                backgroundImage: 'url("https://media.getmyuni.com/azure/college-image/big/chaitanya-bharathi-institute-of-technology-cbit-hyderabad.jpg")', // Replace with actual background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                overflow: 'hidden',
            }}
        >
            {/* Conference Name */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Typography variant="h2" sx={{ fontWeight: 'bold', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
                    Global Tech Conference 2025
                </Typography>
            </motion.div>

            {/* Logos */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: { xs: 3, md: 10 },
                }}
            >
                {/* Left Logo */}
                <motion.img
                    src="https://techx-2022.github.io/web/images/resource/ieeek.png" // Replace with left logo
                    alt="Left Logo"
                    className="logo"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '120px', height: 'auto' }}
                />

                {/* Middle Logo */}
                <motion.img
                    src="https://th.bing.com/th?id=OIP.OUjRILVYpdx0V-sqUkVdgwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" // Replace with middle logo
                    alt="Middle Logo"
                    className="logo"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ width: '140px', height: 'auto' }}
                />

                {/* Right Logo */}
                <motion.img
                    src="https://th.bing.com/th?id=OIP.ba7vRD1QW-du9c_WMEuaRAHaI3&w=228&h=273&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" // Replace with right logo
                    alt="Right Logo"
                    className="logo"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '120px', height: 'auto' }}
                />
            </Box>
        </Box>
    );
};

export default HeroSection;
