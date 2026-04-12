import React from 'react';
import Container from '../../ui/Container/Container.jsx';
import './testimonialShowcase.scss';

const TestimonialShowcase = () => {
    return (
        <section className='testimonial-showcase' aria-labelledby='testimonial-showcase-title'>
            <div className='testimonial-showcase__overlay testimonial-showcase__overlay--base' />
            <div className='testimonial-showcase__overlay testimonial-showcase__overlay--vignette' />
            <div className='testimonial-showcase__overlay testimonial-showcase__overlay--glow' />
            <div className='testimonial-showcase__overlay testimonial-showcase__overlay--focus' />

            <Container>
                <div className='testimonial-showcase__inner'>
                    <div className='testimonial-showcase__topline'>
                        <span className='testimonial-showcase__eyebrow'>Testimonial</span>
                        <span className='testimonial-showcase__topline-line' aria-hidden='true' />
                        <span className='testimonial-showcase__index'>04</span>
                    </div>

                    <div className='testimonial-showcase__panel'>
                        <h2 className='sr-only' id='testimonial-showcase-title'>
                            Client testimonial
                        </h2>

                        <span className='testimonial-showcase__quote-mark' aria-hidden='true'>
                            “
                        </span>

                        <blockquote className='testimonial-showcase__quote'>
                            Every detail felt intentional, refined, and beautifully resolved from beginning to end.
                        </blockquote>

                        <p className='testimonial-showcase__note'>
                            Working with Zlatovchen Art Design was seamless throughout the entire process.
                        </p>

                        <div className='testimonial-showcase__author-block'>
                            <span className='testimonial-showcase__author'>Luke Collins</span>
                            <span className='testimonial-showcase__author-role'>Private Client</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TestimonialShowcase;