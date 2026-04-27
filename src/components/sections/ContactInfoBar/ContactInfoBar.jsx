import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SiInstagram, SiWhatsapp, SiViber } from 'react-icons/si';
import Container from '../../ui/Container/Container.jsx';
import './contactInfoBar.scss';

const PHONE_DISPLAY = '+373 00 000 000';
const PHONE_HREF = 'tel:+37300000000';

const EMAIL_DISPLAY = 'hello@zlatovcen.com';
const EMAIL_HREF = 'mailto:hello@zlatovcen.com';

const INSTAGRAM_URL = 'https://instagram.com';
const WHATSAPP_URL = 'https://wa.me/37300000000';
const VIBER_URL = 'viber://chat?number=%2B37300000000';

const ContactInfoBar = () => {
    const { t } = useTranslation();

    const socialItems = useMemo(
        () => [
            {
                id: 'instagram',
                label: t('footer.social.instagram', { defaultValue: 'Instagram' }),
                value: '@zlatovcen.art',
                href: INSTAGRAM_URL,
                icon: SiInstagram,
            },
            {
                id: 'whatsapp',
                label: t('footer.social.whatsapp', { defaultValue: 'WhatsApp' }),
                value: t('contact.infoBar.items.socials.whatsappValue', {
                    defaultValue: 'Quick inquiries',
                }),
                href: WHATSAPP_URL,
                icon: SiWhatsapp,
            },
            {
                id: 'viber',
                label: t('footer.social.viber', { defaultValue: 'Viber' }),
                value: t('contact.infoBar.items.socials.viberValue', {
                    defaultValue: 'Direct messages',
                }),
                href: VIBER_URL,
                icon: SiViber,
            },
        ],
        [t]
    );

    const contactItems = useMemo(
        () => [
            {
                id: 'phone',
                index: '01',
                eyebrow: t('contact.infoBar.items.phone.eyebrow', {
                    defaultValue: 'Studio Phone',
                }),
                content: (
                    <>
                        <a href={PHONE_HREF} className='contact-info-bar__primary-link'>
                            {PHONE_DISPLAY}
                        </a>
                        <p className='contact-info-bar__secondary-text'>
                            {t('contact.infoBar.items.phone.note', {
                                defaultValue: 'Available for consultations and project inquiries.',
                            })}
                        </p>
                    </>
                ),
            },
            {
                id: 'email',
                index: '02',
                eyebrow: t('contact.infoBar.items.email.eyebrow', {
                    defaultValue: 'Email Address',
                }),
                content: (
                    <>
                        <a href={EMAIL_HREF} className='contact-info-bar__primary-link contact-info-bar__primary-link--email'>
                            {EMAIL_DISPLAY}
                        </a>
                        <p className='contact-info-bar__secondary-text'>
                            {t('contact.infoBar.items.email.note', {
                                defaultValue: 'Send us your ideas, references, or project details anytime.',
                            })}
                        </p>
                    </>
                ),
            },
            {
                id: 'socials',
                index: '03',
                eyebrow: t('contact.infoBar.items.socials.eyebrow', {
                    defaultValue: 'Social Channels',
                }),
                content: (
                    <div className='contact-info-bar__socials'>
                        {socialItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={item.label}
                                    className='contact-info-bar__social-link'
                                >
                                    <span className='contact-info-bar__social-icon-wrap' aria-hidden='true'>
                                        <Icon className='contact-info-bar__social-icon' />
                                    </span>

                                    <span className='contact-info-bar__social-copy'>
                                        <span className='contact-info-bar__social-label'>{item.label}</span>
                                        <span className='contact-info-bar__social-value'>{item.value}</span>
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                ),
            },
        ],
        [socialItems, t]
    );

    return (
        <section className='contact-info-bar' aria-labelledby='contact-info-bar-title'>
            <h2 className='contact-info-bar__sr-only' id='contact-info-bar-title'>
                {t('contact.infoBar.accessibility.title', {
                    defaultValue: 'Contact information',
                })}
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
                                    {t('contact.infoBar.supporting', {
                                        defaultValue:
                                            'We welcome residential and selected boutique commercial inquiries, guiding each project with clarity, restraint, and thoughtful detail.',
                                    })}
                                </p>
                            </div>
                        </div>

                        <div className='contact-info-bar__heading-block'>
                            <h3 className='contact-info-bar__title'>
                                {t('contact.pageHero.title')}
                            </h3>

                            <p className='contact-info-bar__description'>
                                {t('contact.infoBar.description', {
                                    defaultValue:
                                        'Choose the most convenient way to reach out — by phone, email, or directly through our social channels.',
                                })}
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