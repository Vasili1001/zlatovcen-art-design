import React, { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import hero1 from '../../../assets/images/hero/ddd.JPEG';
import hero2 from '../../../assets/images/hero/hero-2.jpg';
import hero3 from '../../../assets/images/hero/hero-3.jpg';
import hero4 from '../../../assets/images/hero/hero-4.jpg';
import hero5 from '../../../assets/images/hero/hero-5.jpg';
import hero6 from '../../../assets/images/hero/hero-6.jpg';
import './hero.scss';

const AUTOPLAY_DELAY = 7000;

const Hero = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isReducedMotion, setIsReducedMotion] = useState(false);

    const slides = useMemo(
        () => [
            {
                id: 1,
                image: hero1,
                alt: t('home.hero.slides.1.alt'),
            },
            {
                id: 2,
                image: hero2,
                alt: t('home.hero.slides.2.alt'),
            },
            {
                id: 3,
                image: hero3,
                alt: t('home.hero.slides.3.alt'),
            },
            {
                id: 4,
                image: hero4,
                alt: t('home.hero.slides.4.alt'),
            },
            {
                id: 5,
                image: hero5,
                alt: t('home.hero.slides.5.alt'),
            },
            {
                id: 6,
                image: hero6,
                alt: t('home.hero.slides.6.alt'),
            },
        ],
        [t]
    );

    const totalSlides = slides.length;

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updateMotionPreference = () => setIsReducedMotion(mediaQuery.matches);

        updateMotionPreference();

        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', updateMotionPreference);
        } else {
            mediaQuery.addListener(updateMotionPreference);
        }

        return () => {
            if (typeof mediaQuery.removeEventListener === 'function') {
                mediaQuery.removeEventListener('change', updateMotionPreference);
            } else {
                mediaQuery.removeListener(updateMotionPreference);
            }
        };
    }, []);

    useEffect(() => {
        if (isReducedMotion || totalSlides <= 1) {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, AUTOPLAY_DELAY);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [activeIndex, isReducedMotion, totalSlides]);

    const currentSlideNumber = useMemo(() => String(activeIndex + 1).padStart(2, '0'), [activeIndex]);
    const totalSlideNumber = useMemo(() => String(totalSlides).padStart(2, '0'), [totalSlides]);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className='hero hero--animated' aria-label={t('home.hero.accessibility.sectionLabel')}>
            <div className='hero__media' aria-hidden='true'>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero__slide ${index === activeIndex ? 'hero__slide--active' : ''}`}
                    >
                        <img src={slide.image} alt={slide.alt} className='hero__image' />
                    </div>
                ))}
            </div>

            <div className='hero__overlay hero__overlay--base' />
            <div className='hero__overlay hero__overlay--vignette' />
            <div className='hero__overlay hero__overlay--glow' />
            <div className='hero__overlay hero__overlay--focus' />

            <Container size='wide'>
                <div className='hero__inner'>
                    <div className='hero__content'>
                        <span className='hero__eyebrow'>{t('home.hero.eyebrow')}</span>

                        <h1 className='hero__title'>
                            ZLATOVCEN
                            <br/>
                        </h1>

                        <span className='hero__eyebrow'>ART DESIGN</span>

                        <div className='hero__actions'>
                            <NavLink to='/services' className='hero__button'>
                                {t('home.hero.cta')}
                            </NavLink>
                        </div>

                    </div>

                    <div className='hero__bottom'>
                    <div
                            className='hero__pagination'
                            aria-label={t('home.hero.accessibility.slidesNavigation')}
                        >
                            <span className='hero__counter'>
                                {currentSlideNumber}
                                <span className='hero__counter-separator'>/</span>
                                {totalSlideNumber}
                            </span>

                            <div className='hero__dots'>
                            {slides.map((slide, index) => (
                                    <button
                                        key={slide.id}
                                        type='button'
                                        className={`hero__dot ${index === activeIndex ? 'hero__dot--active' : ''}`}
                                        aria-label={t('home.hero.accessibility.goToSlide', { number: index + 1 })}
                                        aria-pressed={index === activeIndex}
                                        onClick={() => handleDotClick(index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {!isReducedMotion ? (
                            <div className='hero__progress' aria-hidden='true'>
                                <span key={activeIndex} className='hero__progress-bar' />
                            </div>
                        ) : null}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;