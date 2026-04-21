import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import './contactInfoBar.scss';

const ContactInfoBar = () => {
    const { t } = useTranslation();

    const contactItems = useMemo(
        () => [
            {
                id: 'email-phone',
                eyebrow: t('contact.infoBar.items.emailPhone.eyebrow'),
                content: (
                    <>
                        <a href='mailto:info@velainteriors.com' className='contact-info-bar__link'>
                            info@velainteriors.com
                        </a>
                        <a href='tel:+0014045071200' className='contact-info-bar__subline'>
                            001 404 507 1200
                        </a>
                    </>
                ),
            },
            {
                id: 'address',
                eyebrow: t('contact.infoBar.items.address.eyebrow'),
                content: (
                    <address className='contact-info-bar__text contact-info-bar__text--address'>
                        {t('contact.infoBar.items.address.line1')}
                        <br />
                        {t('contact.infoBar.items.address.line2')}
                    </address>
                ),
            },
            {
                id: 'hours',
                eyebrow: t('contact.infoBar.items.hours.eyebrow'),
                content: (
                    <div className='contact-info-bar__text'>
                        {t('contact.infoBar.items.hours.line1')}
                        <br />
                        {t('contact.infoBar.items.hours.line2')}
                    </div>
                ),
            },
        ],
        [t]
    );

    return (
        <section className='contact-info-bar' aria-labelledby='contact-info-bar-title'>
            <h2 className='contact-info-bar__sr-only' id='contact-info-bar-title'>
                {t('contact.infoBar.accessibility.title')}
            </h2>

            <Container size='wide'>
                <div className='contact-info-bar__inner'>
                    {contactItems.map((item) => (
                        <div key={item.id} className='contact-info-bar__item'>
                            <span className='contact-info-bar__divider' aria-hidden='true' />
                            <div className='contact-info-bar__item-body'>
                                <span className='contact-info-bar__eyebrow'>{item.eyebrow}</span>
                                <div className='contact-info-bar__content'>{item.content}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ContactInfoBar;