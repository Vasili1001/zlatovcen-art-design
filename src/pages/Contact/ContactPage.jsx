import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/seo/SEO.jsx';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import ContactInfoBar from '../../components/sections/ContactInfoBar/ContactInfoBar.jsx';
import contactHeroImage from '../../assets/images/page-hero/PC/contact-pc.webp';
import contactHeroMobileImage from '../../assets/images/page-hero/phone/contact-phone.webp';
import ContactFaq from '../../components/sections/ContactFaq/ContactFaq.jsx';
import './contactPage.scss';

const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Zlatovcen Art Design',
    url: 'https://www.zlatovcenartdesign.md/contact',
    description:
        'Contact Zlatovcen Art Design for interior design services in Comrat, Gagauzia and Moldova.',
    mainEntity: {
        '@type': 'InteriorDesignService',
        name: 'Zlatovcen Art Design',
        url: 'https://www.zlatovcenartdesign.md/',
        areaServed: ['Comrat', 'Gagauzia', 'Moldova'],
        sameAs: ['https://www.instagram.com/zlatovcen_art_design'],
    },
};

const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                title='Контакты студии дизайна интерьера'
                description='Свяжитесь с Zlatovcen Art Design для консультации по дизайну интерьера в Комрате, Гагаузии и Молдове. Дизайн квартир, домов и коммерческих пространств.'
                path='/contact'
                schema={contactSchema}
            />

            <div className='contact-page'>
                <PageHero
                    image={contactHeroImage}
                    mobileImage={contactHeroMobileImage}
                    imageAlt={t('contact.pageHero.imageAlt')}
                    title={t('contact.pageHero.title')}
                    eyebrow={t('contact.pageHero.eyebrow')}
                    contentWidth='narrow'
                    height='compact'
                    align='center'
                />

                <FeatureBar />

                <ContactInfoBar />

                <ContactFaq />
            </div>
        </>
    );
};

export default ContactPage;