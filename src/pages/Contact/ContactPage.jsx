import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import ContactInfoBar from '../../components/sections/ContactInfoBar/ContactInfoBar.jsx';
import contactHeroImage from '../../assets/images/hero/PC/slide-1.webp';
// import ContactFormSection from '../../components/sections/ContactFormSection/ContactFormSection.jsx';
// import contactFormImage from '../../assets/images/services-preview/services-preview-main.webp';
import ContactFaq from '../../components/sections/ContactFaq/ContactFaq.jsx';
import './contactPage.scss';

const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <div className='contact-page'>
            <PageHero
                image={contactHeroImage}
                imageAlt={t('contact.pageHero.imageAlt')}
                title={t('contact.pageHero.title')}
                eyebrow={t('contact.pageHero.eyebrow')}
                contentWidth='narrow'
                height='compact'
                align='center'
            />

            <FeatureBar />

            {/*<ContactFormSection image={contactFormImage} />*/}

            <ContactInfoBar />

            <ContactFaq />
        </div>
    );
};

export default ContactPage;