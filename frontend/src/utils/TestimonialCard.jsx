import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { motion } from 'framer-motion';

// Define multiple animation variants
const animationVariants = [
    { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }, // Slide-up
    { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }, // Slide from left
    { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }, // Slide from right
    { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } } // Zoom-in
];

const TestimonialCard = ({ image, name, statement, role }) => {
    // Randomly select an animation variant
    const randomVariant = animationVariants[Math.floor(Math.random() * animationVariants.length)];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={randomVariant}
            transition={{ duration: 0.6 }}
        >
            <Card
                sx={{
                    maxWidth: 345,
                    borderRadius: '16px',
                    boxShadow: 3,
                    backgroundColor: 'white',
                    padding: 3,
                    margin: 2
                }}
            >
                <CardContent>
                    <Box display="flex" justifyContent="center" mb={2}>
                        <Avatar
                            src={image}
                            alt={name}
                            sx={{ width: 80, height: 80, border: '2px solid #fff' }}
                        />
                    </Box>
                    <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
                        {role}
                    </Typography>
                    <Typography variant="body1" align="center" color="textPrimary" fontStyle="italic">
                        "{statement}"
                    </Typography>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default TestimonialCard;
