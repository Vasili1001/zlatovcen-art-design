import React from 'react';
import SEO from '../../components/seo/SEO.jsx';
import Hero from '../../components/sections/Hero/Hero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import CTA from '../../components/sections/CTA/CTA.jsx';
import StudioShowcase from '../../components/sections/StudioShowcase/StudioShowcase.jsx';
import AboutFounder from '../../components/sections/AboutFounder/AboutFounder.jsx';
import ServicesPreview from '../../components/sections/ServicesPreview/ServicesPreview.jsx';
import TestimonialShowcase from '../../components/sections/TestimonialShowcase/TestimonialShowcase.jsx';
import BlogPreview from '../../components/sections/BlogPreview/BlogPreview.jsx';
import './home.scss';

const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesignService',
    name: 'Zlatovcen Art Design',
    alternateName: 'ZLATOVCEN ART DESIGN',
    url: 'https://www.zlatovcenartdesign.md/',
    logo: 'https://www.zlatovcenartdesign.md/logo_zlatovcen_art.png',
    image: 'https://www.zlatovcenartdesign.md/logo_z_art.png',
    description:
        'Premium interior design studio in Comrat, Gagauzia, Moldova. Residential and commercial interior design services.',
    areaServed: [
        {
            '@type': 'City',
            name: 'Comrat',
        },
        {
            '@type': 'AdministrativeArea',
            name: 'Gagauzia',
        },
        {
            '@type': 'Country',
            name: 'Moldova',
        },
    ],
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Comrat',
        addressRegion: 'Gagauzia',
        addressCountry: 'MD',
    },
    sameAs: ['https://www.instagram.com/zlatovcen_art_design'],
};

const Home = () => {
    return (
        <>
            <SEO
                title='Дизайн интерьера в Комрате и Гагаузии'
                description='Zlatovcen Art Design — премиальная студия дизайна интерьера в Комрате и Гагаузии. Дизайн квартир, домов и коммерческих пространств с акцентом на эстетику, комфорт и индивидуальный стиль.'
                path='/'
                schema={homeSchema}
            />

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
        </>
    );
};

export default Home;