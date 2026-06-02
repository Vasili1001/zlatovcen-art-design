import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/seo/SEO.jsx';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import AboutFounderEditorial from '../../components/sections/AboutFounderEditorial/AboutFounderEditorial.jsx';
import aboutHeroImage from '../../assets/images/page-hero/PC/about-pc.webp';
import aboutHeroMobileImage from '../../assets/images/page-hero/phone/about-phone.webp';
import AboutStatementBanner from '../../components/sections/AboutStatementBanner/AboutStatementBanner.jsx';
import CTA from '../../components/sections/CTA/CTA.jsx';
import './aboutPage.scss';

const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Zlatovcen Art Design',
    url: 'https://www.zlatovcenartdesign.md/about',
    description:
        'About Zlatovcen Art Design, a premium interior design studio based in Comrat, Gagauzia, Moldova.',
    mainEntity: {
        '@type': 'InteriorDesignService',
        name: 'Zlatovcen Art Design',
        url: 'https://www.zlatovcenartdesign.md/',
        areaServed: ['Comrat', 'Gagauzia', 'Moldova'],
    },
};

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                title='О студии дизайна интерьера'
                description='О студии Zlatovcen Art Design — премиальная студия дизайна интерьера в Комрате и Гагаузии, создающая элегантные жилые и коммерческие пространства.'
                path='/about'
                schema={aboutSchema}
            />

            <div className='about-page'>
                <PageHero
                    image={aboutHeroImage}
                    mobileImage={aboutHeroMobileImage}
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
        </>
    );
};

export default AboutPage;