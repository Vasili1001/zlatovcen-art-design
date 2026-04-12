import React from 'react';
import Hero from '../../components/sections/Hero/Hero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import CTA from "../../components/sections/CTA/CTA.jsx";
import StudioShowcase from "../../components/sections/StudioShowcase/StudioShowcase.jsx";
import AboutFounder from "../../components/sections/AboutFounder/AboutFounder.jsx";
import ServicesPreview from "../../components/sections/ServicesPreview/ServicesPreview.jsx";
import TestimonialShowcase from "../../components/sections/TestimonialShowcase/TestimonialShowcase.jsx";
import BlogPreview from "../../components/sections/BlogPreview/BlogPreview.jsx";
import './home.scss';

const Home = () => {
    return (
        <main className='home'>
            <Hero />
            <FeatureBar />
            <StudioShowcase />
            <AboutFounder />
            <TestimonialShowcase />
            <ServicesPreview />
            <BlogPreview />
            <CTA />
        </main>
    );
};

export default Home;