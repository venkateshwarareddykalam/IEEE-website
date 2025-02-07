import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Timer from '../utils/Timer'; // Import the Timer component

const AboutUs = () => {
    const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
    const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true });

    return (
        <Box sx={{ maxWidth: '1200px', mx: 'auto', py: 8, px: 3 }}>
            <Grid container spacing={4} alignItems="center">
                {/* Image Section */}
                <Grid item xs={12} md={6}>
                    <motion.img
                        ref={imageRef}
                        src="https://static.vecteezy.com/system/resources/previews/022/325/096/non_2x/a-business-person-attending-a-conference-promoting-professional-growth-generative-ai-free-photo.jpg" // Replace with actual image
                        alt="About Us"
                        className="rounded-lg shadow-lg w-full"
                        initial={{ opacity: 0, x: -50 }}
                        animate={imageInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    />
                </Grid>

                {/* Information Section */}
                <Grid item xs={12} md={6}>
                    <motion.div
                        ref={infoRef}
                        initial={{ opacity: 0, x: 50 }}
                        animate={infoInView ? { opacity: 1, x: 0 } : {}}
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
        </Box>
    );
};

export default AboutUs;