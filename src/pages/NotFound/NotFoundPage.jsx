import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import Container from '../../components/ui/Container/Container.jsx';
import notFoundHeroImage from '../../assets/images/not-found/not-found-hero.jpg';
import notFoundThumbImage from '../../assets/images/blog-preview/post-1.jpg';
import './notFoundPage.scss';

const NotFoundPage = () => {
    const { t } = useTranslation();
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
                imageAlt={t('notFound.pageHero.imageAlt')}
                eyebrow={t('notFound.pageHero.eyebrow')}
                title={t('notFound.pageHero.title')}
                subtitle={t('notFound.pageHero.subtitle')}
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
                            <span className='not-found-page__topline-label'>
                                {t('notFound.content.toplineLabel')}
                            </span>
                            <span className='not-found-page__topline-line' aria-hidden='true' />
                            <span className='not-found-page__topline-index'>
                                {t('notFound.content.toplineIndex')}
                            </span>
                        </div>

                        <div className='not-found-page__intro'>
                            <div className='not-found-page__thumb-wrap' aria-hidden='true'>
                                <div className='not-found-page__thumb-shell'>
                                    <img src={notFoundThumbImage} alt='' className='not-found-page__thumb-image' />
                                </div>
                            </div>

                            <span className='not-found-page__eyebrow'>
                                {t('notFound.content.eyebrow')}
                            </span>

                            <h1 className='not-found-page__title' id='not-found-title'>
                                {t('notFound.content.titleLine1')}
                                <br />
                                {t('notFound.content.titleLine2')}
                            </h1>

                            <p className='not-found-page__subtitle'>
                                {t('notFound.content.subtitle')}
                            </p>
                        </div>

                        <div className='not-found-page__actions'>
                            <NavLink to='/' className='not-found-page__button not-found-page__button--primary'>
                                {t('notFound.content.actions.backHome')}
                            </NavLink>

                            <NavLink
                                to='/portfolio'
                                className='not-found-page__button not-found-page__button--secondary'
                            >
                                {t('notFound.content.actions.viewPortfolio')}
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default NotFoundPage;