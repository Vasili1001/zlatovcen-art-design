import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import portfolioHeroImage from '../../assets/images/page-hero/PC/portfolio-pc.webp';
import portfolioHeroMobileImage from '../../assets/images/page-hero/phone/portfolio-phone.webp';
import PortfolioGallery from '../../components/sections/PortfolioGallery/PortfolioGallery.jsx';
import PortfolioValues from '../../components/sections/PortfolioValues/PortfolioValues.jsx';
import CTA from '../../components/sections/CTA/CTA.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import './portfolioPage.scss';

const PortfolioPage = () => {
    const { t } = useTranslation();

    return (
        <div className='portfolio-page'>
            <PageHero
                image={portfolioHeroImage}
                mobileImage={portfolioHeroMobileImage}
                imageAlt={t('portfolio.pageHero.imageAlt')}
                eyebrow={t('portfolio.pageHero.eyebrow')}
                title={t('portfolio.pageHero.title')}
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