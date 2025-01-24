import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Timer from '../utils/Timer'; // Import the Timer component

const AboutUs = () => {
    return (
        <Box sx={{ maxWidth: '1200px', mx: 'auto', py: 8, px: 3 }}>
            <Grid container spacing={4} alignItems="center">
                {/* Image Section */}
                <Grid item xs={12} md={6}>
                    <motion.img
                        src="https://th.bing.com/th/id/OIP.cxZ2rvd0vWyR-sCSfYfEKAHaEY?rs=1&pid=ImgDetMain" // Replace with actual image
                        alt="About Us"
                        className="rounded-lg shadow-lg w-full"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </Grid>

                {/* Information Section */}
                <Grid item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            About Our Conference
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            Join us for an engaging experience at our upcoming conference. 
                            Explore the latest trends, network with industry leaders, and gain 
                            invaluable insights into the future of technology.
                        </Typography>
                        <Button variant="contained" color="primary" size="large">
                            Learn More
                        </Button>
                    </motion.div>
                </Grid>
            </Grid>

            {/* Timer Component for Conference */}
            <Box mt={6}>
                <Typography variant="h5" align="center" fontWeight="bold" mb={2}>
                    Conference Starts In:
                </Typography>
                <Timer targetDate="2025-06-15T12:00:00" />
            </Box>
        </Box>
    );
};

export default AboutUs;
