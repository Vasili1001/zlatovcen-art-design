import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import Container from '../../components/ui/Container/Container.jsx';
import notFoundHeroImage from '../../assets/images/not-found/not-found-hero.jpg';
import notFoundThumbImage from '../../assets/images/blog-preview/post-1.jpg';
import './notFoundPage.scss';

const NotFoundPage = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;

        if (!node) return undefined;

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (mediaQuery.matches) {
            setIsVisible(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(node);
                }
            },
            {
                threshold: 0.16,
                rootMargin: '0px 0px -8% 0px',
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <div className='not-found-page'>
            <PageHero
                image={notFoundHeroImage}
                imageAlt='Luxury interior background for not found page'
                eyebrow='404'
                title='Page Not Found'
                subtitle='The page you were looking for may have been moved, removed, or no longer exists within the current structure of the site.'
                contentWidth='narrow'
                height='compact'
                align='center'
            />

            <FeatureBar />

            <section
                ref={sectionRef}
                className={`not-found-page__content ${isVisible ? 'not-found-page__content--revealed' : ''}`}
                aria-labelledby='not-found-title'
            >
                <div className='not-found-page__background-layer not-found-page__background-layer--base' />
                <div className='not-found-page__background-layer not-found-page__background-layer--glow' />
                <div className='not-found-page__background-layer not-found-page__background-layer--vignette' />

                <Container size='wide'>
                    <div className='not-found-page__inner'>
                        <div className='not-found-page__topline'>
                            <span className='not-found-page__topline-label'>Page Missing</span>
                            <span className='not-found-page__topline-line' aria-hidden='true' />
                            <span className='not-found-page__topline-index'>404</span>
                        </div>

                        <div className='not-found-page__intro'>
                            <div className='not-found-page__thumb-wrap' aria-hidden='true'>
                                <div className='not-found-page__thumb-shell'>
                                    <img src={notFoundThumbImage} alt='' className='not-found-page__thumb-image' />
                                </div>
                            </div>

                            <span className='not-found-page__eyebrow'>Sorry</span>

                            <h1 className='not-found-page__title' id='not-found-title'>
                                The Page You Are Looking For
                                <br />
                                Doesn&apos;t Exist.
                            </h1>

                            <p className='not-found-page__subtitle'>
                                The link may be outdated, the page may have moved, or the address may have been entered
                                incorrectly. You can return to the homepage or continue exploring the studio.
                            </p>
                        </div>

                        <div className='not-found-page__actions'>
                            <NavLink to='/' className='not-found-page__button not-found-page__button--primary'>
                                Back to Home
                            </NavLink>

                            <NavLink
                                to='/portfolio'
                                className='not-found-page__button not-found-page__button--secondary'
                            >
                                View Portfolio
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default NotFoundPage;