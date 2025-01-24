import React from 'react';
import { Container, Grid } from '@mui/material';
import TestimonialCard from '../utils/TestimonialCard'; // Import the component

const testimonialsData = [
    {
        image: 'https://via.placeholder.com/80', // Replace with actual image URL
        name: 'John Doe',
        role: 'Software Engineer',
        statement: 'This platform has transformed the way I learn and grow in my career.'
    },
    {
        image: 'https://via.placeholder.com/80',
        name: 'Jane Smith',
        role: 'Product Manager',
        statement: 'An excellent learning experience with a well-structured curriculum.'
    },
    {
        image: 'https://via.placeholder.com/80',
        name: 'Alice Johnson',
        role: 'UX Designer',
        statement: 'Highly recommended for professionals looking to upskill in the tech industry.'
    }
];

const Testimonials = () => {
    return (
        <Container sx={{ my: 6 }}>
            <Grid container spacing={4} justifyContent="center">
                {testimonialsData.map((testimonial, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <TestimonialCard {...testimonial} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Testimonials;
