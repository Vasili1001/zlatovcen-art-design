import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import founderImage from '../../../assets/images/founder/vitktor-portret.webp';
import accentImageLeft from '../../../assets/images/portfolio/projects/services-img-1.webp';
import accentImageRight from '../../../assets/images/studio-showcase/center.webp';
import './aboutFounderEditorial.scss';

const AboutFounderEditorial = () => {
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
        <section
            ref={sectionRef}
            className={`about-founder-editorial ${isVisible ? 'about-founder-editorial--revealed' : ''}`}
            aria-labelledby='about-founder-editorial-title'
        >
            <Container size='wide'>
                <div className='about-founder-editorial__inner'>
                    <div className='about-founder-editorial__left'>
                        <div className='about-founder-editorial__topline'>
                            <span className='about-founder-editorial__eyebrow'>
                                {t('about.founderEditorial.eyebrow')}
                            </span>
                            <span className='about-founder-editorial__topline-line' aria-hidden='true' />
                            <span className='about-founder-editorial__index'>
                                {t('about.founderEditorial.index')}
                            </span>
                        </div>

                        <div className='about-founder-editorial__quote-block'>
                            <span className='about-founder-editorial__quote-mark' aria-hidden='true'>
                                “
                            </span>

                            <h2 className='about-founder-editorial__title' id='about-founder-editorial-title'>
                                {t('about.founderEditorial.title')}
                            </h2>

                            <p className='about-founder-editorial__text'>
                                {t('about.founderEditorial.textLeft')}
                            </p>
                        </div>

                        <figure className='about-founder-editorial__accent about-founder-editorial__accent--left'>
                            <div className='about-founder-editorial__accent-shell'>
                                <div className='about-founder-editorial__accent-wrap'>
                                    <img
                                        src={accentImageLeft}
                                        alt={t('about.founderEditorial.images.leftAlt')}
                                        className='about-founder-editorial__accent-image'
                                    />
                                </div>
                            </div>
                        </figure>
                    </div>

                    <div className='about-founder-editorial__center'>
                        <div className='about-founder-editorial__image-shell'>
                            <div className='about-founder-editorial__image-glow' aria-hidden='true' />
                            <div className='about-founder-editorial__image-frame'>
                                <div className='about-founder-editorial__image-wrap'>
                                    <img
                                        src={founderImage}
                                        alt={t('about.founderEditorial.images.founderAlt')}
                                        className='about-founder-editorial__image'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='about-founder-editorial__right'>
                        <figure className='about-founder-editorial__accent about-founder-editorial__accent--right'>
                            <div className='about-founder-editorial__accent-shell'>
                                <div className='about-founder-editorial__accent-wrap'>
                                    <img
                                        src={accentImageRight}
                                        alt={t('about.founderEditorial.images.rightAlt')}
                                        className='about-founder-editorial__accent-image'
                                    />
                                </div>
                            </div>
                        </figure>

                        <div className='about-founder-editorial__statement'>
                            <span className='about-founder-editorial__statement-line' aria-hidden='true' />
                            <p className='about-founder-editorial__text about-founder-editorial__text--right'>
                                {t('about.founderEditorial.textRight')}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutFounderEditorial;