import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { SiInstagram, SiFacebook } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

import Container from '../../ui/Container/Container.jsx';
import Logo from '../../ui/Logo/Logo.jsx';
import './footer.scss';

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

                            <a className='footer__email' href='mailto:info@victor.abc'>
                                info@victor.abc
                            </a>

                            <address className='footer__address'>
                                {t('footer.contact.addressLine1')}
                                <br />
                                {t('footer.contact.addressLine2')}
                            </address>

                            <div className='footer__socials' aria-label={t('footer.accessibility.socialLinks')}>
                                <a
                                    href='https://instagram.com'
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={t('footer.social.instagram')}
                                    className='footer__social-link'
                                >
                                    <SiInstagram className='icon' />
                                </a>

                                <a
                                    href='https://facebook.com'
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={t('footer.social.facebook')}
                                    className='footer__social-link'
                                >
                                    <SiFacebook className='icon' />
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