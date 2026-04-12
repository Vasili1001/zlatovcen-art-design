import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { SiInstagram, SiFacebook } from 'react-icons/si';

import Container from '../../ui/Container/Container.jsx';
import './footer.scss';

import footerImg1 from '../../../assets/images/footer/footer-gallery-1.webp';
import footerImg2 from '../../../assets/images/footer/footer-gallery-2.webp';
import footerImg3 from '../../../assets/images/footer/footer-gallery-3.webp';
import footerImg4 from '../../../assets/images/footer/footer-gallery-4.webp';

const footerLinks = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
];

const galleryItems = [
    { src: footerImg1, alt: 'Elegant interior detail' },
    { src: footerImg2, alt: 'Luxury seating area' },
    { src: footerImg3, alt: 'Refined interior passage' },
    { src: footerImg4, alt: 'Minimal premium interior' },
];

const Footer = () => {
    const year = useMemo(() => new Date().getFullYear(), []);

    return (
        <footer className='footer'>
            <div className='footer__background' aria-hidden='true' />

            <Container>
                <div className='footer__inner'>
                    <div className='footer__top'>
                        <div className='footer__brand'>
                            <NavLink to='/' className='footer__logo' aria-label='ZLATOVCEN ART DESIGN home page'>
                                <span className='footer__logo-mark'>Z</span>
                                <span className='footer__logo-text'>Art Design</span>
                            </NavLink>

                            <p className='footer__brand-note'>
                                Bespoke interior design shaped through timeless restraint, material depth, and refined
                                composition.
                            </p>
                        </div>

                        <div className='footer__nav-block'>
                            <span className='footer__eyebrow'>Navigation</span>

                            <nav className='footer__nav' aria-label='Footer navigation'>
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
                            <span className='footer__eyebrow'>Contact</span>

                            <a className='footer__email' href='mailto:info@victor.abc'>
                                info@victor.abc
                            </a>

                            <address className='footer__address'>
                                123 Bogdan Voievod,
                                <br />
                                Suite 400 Atlanta, GA 30309
                            </address>

                            <div className='footer__socials' aria-label='Social links'>
                                <a
                                    href='https://instagram.com'
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label='Instagram'
                                    className='footer__social-link'
                                >
                                    <SiInstagram className='icon' />
                                </a>

                                <a
                                    href='https://facebook.com'
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label='Facebook'
                                    className='footer__social-link'
                                >
                                    <SiFacebook className='icon' />
                                </a>
                            </div>

                            <p className='footer__copy'>© {year} ZLATOVCEN ART DESIGN</p>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;