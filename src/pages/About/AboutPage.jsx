import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import AboutFounderEditorial from '../../components/sections/AboutFounderEditorial/AboutFounderEditorial.jsx';
import aboutHeroImage from '../../assets/images/portfolio/detail/modern-living-room/hero.jpg';
import AboutStatementBanner from '../../components/sections/AboutStatementBanner/AboutStatementBanner.jsx';
import CTA from '../../components/sections/CTA/CTA.jsx';
import './aboutPage.scss';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div className='about-page'>
            <PageHero
                image={aboutHeroImage}
                imageAlt={t('about.pageHero.imageAlt')}
                eyebrow={t('about.pageHero.eyebrow')}
                title={t('about.pageHero.title')}
                contentWidth='narrow'
                height='compact'
                align='center'
            />

            <FeatureBar />

            <AboutFounderEditorial />

            <AboutStatementBanner />

            <CTA />
        </div>
    );
};

export default AboutPage;