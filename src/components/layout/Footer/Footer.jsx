import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { SiInstagram, SiWhatsapp, SiViber } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

import Container from '../../ui/Container/Container.jsx';
import Logo from '../../ui/Logo/Logo.jsx';
import './footer.scss';

const PHONE_DISPLAY = '+373 79 669 525';
const PHONE_NUMBER = '37379669525';
const PHONE_HREF = `tel:+${PHONE_NUMBER}`;

const EMAIL_DISPLAY = 'zlatovcen.art.design@gmail.com';
const EMAIL_HREF = `mailto:${EMAIL_DISPLAY}`;

const INSTAGRAM_USERNAME = 'zlatovcen_art_design';
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}`;

const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}`;
const VIBER_URL = 'https://www.viber.com';

const Footer = () => {
    const { t } = useTranslation();
    const year = useMemo(() => new Date().getFullYear(), []);

    const footerLinks = useMemo(
        () => [
            { to: '/', label: t('footer.nav.home') },
            { to: '/portfolio', label: t('footer.nav.portfolio') },
            { to: '/services', label: t('footer.nav.services') },
            { to: '/about', label: t('footer.nav.about') },
            { to: '/blog', label: t('footer.nav.blog') },
            { to: '/contact', label: t('footer.nav.contact') },
        ],
        [t]
    );

    return (
        <footer className='footer'>
            <div className='footer__background' aria-hidden='true' />

            <Container>
                <div className='footer__inner'>
                    <div className='footer__top'>
                        <div className='footer__brand'>
                            <Logo />

                            <p className='footer__brand-note'>
                                {t('footer.brand.note')}
                            </p>
                        </div>

                        <div className='footer__nav-block'>
                            <span className='footer__eyebrow'>{t('footer.sections.navigation')}</span>

                            <nav className='footer__nav' aria-label={t('footer.accessibility.footerNavigation')}>
                                {footerLinks.map((link) => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        className={({ isActive }) =>
                                            isActive ? 'footer__nav-link footer__nav-link--active' : 'footer__nav-link'
                                        }
                                    >
                                        <span className='footer__nav-bullet' aria-hidden='true' />
                                        <span>{link.label}</span>
                                    </NavLink>
                                ))}
                            </nav>
                        </div>

                        <div className='footer__contact'>
                            <span className='footer__eyebrow'>{t('footer.sections.contact')}</span>

                            <a className='footer__email' href={EMAIL_HREF}>
                                {EMAIL_DISPLAY}
                            </a>

                            <a className='footer__phone' href={PHONE_HREF}>
                                {PHONE_DISPLAY}
                            </a>

                            <p className='footer__contact-note'>
                                {t('footer.contact.note')}
                            </p>

                            <div className='footer__socials' aria-label={t('footer.accessibility.socialLinks')}>
                                <a
                                    href={INSTAGRAM_URL}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={t('footer.social.instagram')}
                                    className='footer__social-link'
                                >
                                    <SiInstagram className='icon'/>
                                </a>

                                <a
                                    href={WHATSAPP_URL}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={t('footer.social.whatsapp')}
                                    className='footer__social-link'
                                >
                                    <SiWhatsapp className='icon'/>
                                </a>

                                <a
                                    href={VIBER_URL}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={t('footer.social.viber')}
                                    className='footer__social-link'
                                >
                                    <SiViber className='icon'/>
                                </a>
                            </div>

                            <p className='footer__copy'>
                                © {year} {t('footer.copy')}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;