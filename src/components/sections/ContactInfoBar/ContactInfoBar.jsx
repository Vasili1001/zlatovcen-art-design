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
                index: '01',
                eyebrow: t('contact.infoBar.items.emailPhone.eyebrow'),
                content: (
                    <>
                        <a href='mailto:info@velainteriors.com' className='contact-info-bar__primary-link'>
                            info@velainteriors.com
                        </a>
                        <a href='tel:+0014045071200' className='contact-info-bar__secondary-link'>
                            001 404 507 1200
                        </a>
                    </>
                ),
            },
            {
                id: 'address',
                index: '02',
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
                index: '03',
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
                <div className='contact-info-bar__shell'>
                    <div className='contact-info-bar__header'>
                        <div className='contact-info-bar__header-side'>
                            <div className='contact-info-bar__topline'>
                                <span className='contact-info-bar__topline-label'>
                                    {t('contact.pageHero.eyebrow')}
                                </span>
                                <span className='contact-info-bar__topline-line' aria-hidden='true' />
                                <span className='contact-info-bar__topline-index'>01</span>
                            </div>

                            <div className='contact-info-bar__supporting'>
                                <p className='contact-info-bar__supporting-text'>
                                    We welcome residential and selected boutique commercial inquiries,
                                    guiding each project with clarity, restraint, and thoughtful detail.
                                </p>
                            </div>
                        </div>

                        <div className='contact-info-bar__heading-block'>
                            <h3 className='contact-info-bar__title'>
                                {t('contact.pageHero.title')}
                            </h3>

                            <p className='contact-info-bar__description'>
                                {t('contact.formSection.description')}
                            </p>
                        </div>
                    </div>

                    <div className='contact-info-bar__grid'>
                        {contactItems.map((item) => (
                            <article key={item.id} className='contact-info-bar__card'>
                                <div className='contact-info-bar__card-glow' aria-hidden='true' />
                                <div className='contact-info-bar__card-inner'>
                                    <div className='contact-info-bar__card-top'>
                                        <span className='contact-info-bar__card-index'>{item.index}</span>
                                        <span className='contact-info-bar__card-divider' aria-hidden='true' />
                                    </div>

                                    <div className='contact-info-bar__card-body'>
                                        <span className='contact-info-bar__eyebrow'>{item.eyebrow}</span>
                                        <div className='contact-info-bar__content'>{item.content}</div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactInfoBar;