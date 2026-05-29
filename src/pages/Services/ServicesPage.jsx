import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import ServicesEditorialShowcase from '../../components/sections/ServicesEditorialShowcase/ServicesEditorialShowcase.jsx';
import servicesHeroImage from '../../assets/images/page-hero/PC/services-pc.webp';
import contactInfoImage from '../../assets/images/hero/PC/slide-3.webp';
// import FullWidthImageBand from '../../components/sections/FullWidthImageBand/FullWidthImageBand.jsx';
import ServicesProcessTimeline from '../../components/sections/ServicesProcessTimeline/ServicesProcessTimeline.jsx';
import CTA from '../../components/sections/CTA/CTA.jsx';
import './servicesPage.scss';

const ServicesPage = () => {
    const { t } = useTranslation();

    return (
        <div className='services-page'>
            <PageHero
                image={servicesHeroImage}
                imageAlt={t('services.pageHero.imageAlt')}
                eyebrow={t('services.pageHero.eyebrow')}
                title={t('services.pageHero.title')}
                contentWidth='narrow'
                height='compact'
                align='center'
            />

            <FeatureBar />

            <ServicesEditorialShowcase />

            {/*<FullWidthImageBand*/}
            {/*    image={contactInfoImage}*/}
            {/*    imageAlt={t('services.fullWidthImageBand.imageAlt')}*/}
            {/*/>*/}

            <ServicesProcessTimeline />

            <CTA />
        </div>
    );
};

export default ServicesPage;