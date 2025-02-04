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
                //backgroundImage: 'url("https://media.getmyuni.com/azure/college-image/big/chaitanya-bharathi-institute-of-technology-cbit-hyderabad.jpg")', // Replace with actual background image,
                backgroundImage: 'url("https://wallpapercave.com/wp/wp2809468.jpg")', // Replace with actual background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
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

            {/* Additional Text */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Typography variant="h5" sx={{ mt: 2, textShadow: '1px 1px 5px rgba(0,0,0,0.5)' }}>
                    Join us for an immersive experience in the world of technology.
                </Typography>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <Box
                    component="button"
                    sx={{
                        mt: 4,
                        px: 4,
                        py: 2,
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        textShadow: '1px 1px 5px rgba(0,0,0,0.5)',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        },
                    }}
                >
                    Learn More
                </Box>
            </motion.div>
        </Box>
    );
};

export default HeroSection;
