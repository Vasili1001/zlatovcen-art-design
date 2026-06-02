import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/seo/SEO.jsx';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import ServicesEditorialShowcase from '../../components/sections/ServicesEditorialShowcase/ServicesEditorialShowcase.jsx';
import servicesHeroImage from '../../assets/images/page-hero/PC/services-pc.webp';
import servicesHeroMobileImage from '../../assets/images/page-hero/phone/services-phone.webp';
import ServicesProcessTimeline from '../../components/sections/ServicesProcessTimeline/ServicesProcessTimeline.jsx';
import CTA from '../../components/sections/CTA/CTA.jsx';
import './servicesPage.scss';

const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Interior Design Services in Comrat and Gagauzia',
    serviceType: 'Interior design',
    provider: {
        '@type': 'InteriorDesignService',
        name: 'Zlatovcen Art Design',
        url: 'https://www.zlatovcenartdesign.md/',
    },
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
    description:
        'Interior design services for apartments, houses and commercial spaces in Comrat, Gagauzia and Moldova.',
};

const ServicesPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                title='Услуги дизайна интерьера в Комрате'
                description='Услуги дизайна интерьера от Zlatovcen Art Design: дизайн квартир, домов и коммерческих пространств в Комрате, Гагаузии и Молдове. Индивидуальная концепция, визуальная гармония и премиальный подход.'
                path='/services'
                schema={servicesSchema}
            />

            <div className='services-page'>
                <PageHero
                    image={servicesHeroImage}
                    mobileImage={servicesHeroMobileImage}
                    imageAlt={t('services.pageHero.imageAlt')}
                    eyebrow={t('services.pageHero.eyebrow')}
                    title={t('services.pageHero.title')}
                    contentWidth='narrow'
                    height='compact'
                    align='center'
                />

                <FeatureBar />

                <ServicesEditorialShowcase />

                <ServicesProcessTimeline />

                <CTA />
            </div>
        </>
    );
};

export default ServicesPage;