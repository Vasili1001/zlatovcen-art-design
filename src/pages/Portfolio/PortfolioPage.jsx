import React from 'react';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import portfolioHeroImage from '../../assets/images/portfolio/portfolio-hero.jpg';
import './portfolioPage.scss';
import PortfolioGallery from "../../components/sections/PortfolioGallery/PortfolioGallery.jsx";
import PortfolioValues from "../../components/sections/PortfolioValues/PortfolioValues.jsx";
import CTA from "../../components/sections/CTA/CTA.jsx";
import FeatureBar from "../../components/sections/FeatureBar/FeatureBar.jsx";

const PortfolioPage = () => {
    return (
        <div className='portfolio-page'>
            <PageHero
                image={portfolioHeroImage}
                imageAlt='Luxury modern bedroom interior'
                eyebrow='Portfolio'
                title='Projects'
                contentWidth='narrow'
                height='compact'
                align='center'
            />
            <FeatureBar />
            <PortfolioGallery />
            <PortfolioValues />
            <CTA />
        </div>
    );
};

export default PortfolioPage;