import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/seo/SEO.jsx';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import portfolioHeroImage from '../../assets/images/page-hero/PC/portfolio-pc.webp';
import portfolioHeroMobileImage from '../../assets/images/page-hero/phone/portfolio-phone.webp';
import PortfolioGallery from '../../components/sections/PortfolioGallery/PortfolioGallery.jsx';
import PortfolioValues from '../../components/sections/PortfolioValues/PortfolioValues.jsx';
import CTA from '../../components/sections/CTA/CTA.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import './portfolioPage.scss';

const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Interior Design Portfolio',
    url: 'https://www.zlatovcenartdesign.md/portfolio',
    description:
        'Portfolio of interior design projects by Zlatovcen Art Design in Moldova, including residential and commercial interiors.',
    publisher: {
        '@type': 'InteriorDesignService',
        name: 'Zlatovcen Art Design',
        url: 'https://www.zlatovcenartdesign.md/',
    },
};

const PortfolioPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                title='Портфолио дизайна интерьера'
                description='Портфолио Zlatovcen Art Design: интерьерные проекты для квартир, домов и коммерческих пространств в Комрате, Гагаузии и Молдове.'
                path='/portfolio'
                schema={portfolioSchema}
            />

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
        </>
    );
};

export default PortfolioPage;