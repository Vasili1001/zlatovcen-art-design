import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Container from '../../ui/Container/Container.jsx';
import LanguageSwitcher from '../../ui/LanguageSwitcher/LanguageSwitcher.jsx';
import './header.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const leftLinks = useMemo(
        () => [
            { to: '/', label: 'Home' },
            { to: '/portfolio', label: 'Portfolio' },
            { to: '/services', label: 'Services' },
        ],
        []
    );

    const rightLinks = useMemo(
        () => [
            { to: '/about', label: 'About' },
            { to: '/blog', label: 'Blog' },
        ],
        []
    );

    const mobileMainLinks = useMemo(() => [...leftLinks, ...rightLinks], [leftLinks, rightLinks]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('menu-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }

        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    const getNavLinkClassName = ({ isActive }) =>
        isActive ? 'header__link header__link--active' : 'header__link';

    const getMobileNavLinkClassName = ({ isActive }) =>
        isActive ? 'header__mobile-link header__mobile-link--active' : 'header__mobile-link';

    const getContactLinkClassName = ({ isActive }) =>
        isActive ? 'header__contact header__contact--active' : 'header__contact';

    const getMobileContactLinkClassName = ({ isActive }) =>
        isActive ? 'header__mobile-cta header__mobile-cta--active' : 'header__mobile-cta';

    return (
        <>
            <header className={`header ${isMenuOpen ? 'header--menu-open' : ''}`}>
                <Container>
                    <div className='header__inner'>
                        <button
                            type='button'
                            className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
                            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={isMenuOpen}
                            aria-controls='mobile-navigation'
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                            <span />
                            <span />
                            <span />
                        </button>

                        <div className='header__desktop header__desktop--left'>
                            <nav className='header__nav header__nav--left' aria-label='Primary navigation left'>
                                {leftLinks.map((link) => (
                                    <NavLink key={link.to} to={link.to} className={getNavLinkClassName}>
                                        {link.label}
                                    </NavLink>
                                ))}
                            </nav>
                        </div>

                        <NavLink to='/' className='header__logo' aria-label='ZLATOVCEN ART DESIGN home page'>
                            <span className='header__logo-mark'>Z</span>
                            <span className='header__logo-text'>Art Design</span>
                        </NavLink>

                        <div className='header__desktop header__desktop--right'>
                            <nav className='header__nav header__nav--right' aria-label='Primary navigation right'>
                                {rightLinks.map((link) => (
                                    <NavLink key={link.to} to={link.to} className={getNavLinkClassName}>
                                        {link.label}
                                    </NavLink>
                                ))}
                            </nav>

                            <div className='header__utilities'>
                                <LanguageSwitcher />
                                <NavLink to='/contact' className={getContactLinkClassName}>
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Container>

                <div
                    className={`header__mobile-panel ${isMenuOpen ? 'header__mobile-panel--open' : ''}`}
                    id='mobile-navigation'
                    aria-hidden={!isMenuOpen}
                >
                    <Container className='header__mobile-container'>
                        <div className='header__mobile-shell'>
                            <div className='header__mobile-topline'>
                                <span className='header__mobile-caption'>Zlatovcen Art Design</span>
                                <span className='header__mobile-divider'/>
                            </div>

                            <nav className='header__mobile-nav' aria-label='Mobile navigation'>
                                {mobileMainLinks.map((link, index) => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        className={getMobileNavLinkClassName}
                                        onClick={closeMenu}
                                        style={{'--item-index': index}}
                                    >
                                        <span className='header__mobile-link-index'>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className='header__mobile-link-label'>{link.label}</span>
                                    </NavLink>
                                ))}
                            </nav>

                            <div className='header__mobile-footer'>
                                <div className='header__mobile-note'>
                                    Bespoke interiors shaped through refined minimalism, material depth, and timeless
                                    elegance.
                                </div>

                                <div className='header__mobile-actions'>
                                    <NavLink
                                        to='/contact'
                                        className={getMobileContactLinkClassName}
                                        onClick={closeMenu}
                                    >
                                        Contact Studio
                                    </NavLink>
                                    <div className='header__mobile-language'>
                                        <LanguageSwitcher/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>

            <button
                type='button'
                className={`header__backdrop ${isMenuOpen ? 'header__backdrop--visible' : ''}`}
                aria-label='Close menu backdrop'
                aria-hidden={!isMenuOpen}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
            />
        </>
    );
};

export default Header;