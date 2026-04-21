import React, { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import backgroundImage from '../../../assets/images/blog/post/blog-post-background.jpg';
import serviceImage1 from '../../../assets/images/portfolio/projects/project-1.jpg';
import serviceImage2 from '../../../assets/images/portfolio/projects/project-2.jpg';
import serviceImage3 from '../../../assets/images/portfolio/projects/project-3.jpg';
import './servicesEditorialShowcase.scss';

const ServicesEditorialShowcase = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const serviceItems = useMemo(
        () => [
            {
                id: '01',
                title: t('services.editorialShowcase.items.0.title'),
                description: t('services.editorialShowcase.items.0.description'),
                includes: [
                    t('services.editorialShowcase.items.0.includes.0'),
                    t('services.editorialShowcase.items.0.includes.1'),
                    t('services.editorialShowcase.items.0.includes.2'),
                ],
                investment: t('services.editorialShowcase.items.0.investment'),
                investmentNote: t('services.editorialShowcase.items.0.investmentNote'),
                image: serviceImage1,
                imageAlt: t('services.editorialShowcase.items.0.imageAlt'),
                layout: 'image-right',
            },
            {
                id: '02',
                title: t('services.editorialShowcase.items.1.title'),
                description: t('services.editorialShowcase.items.1.description'),
                includes: [
                    t('services.editorialShowcase.items.1.includes.0'),
                    t('services.editorialShowcase.items.1.includes.1'),
                    t('services.editorialShowcase.items.1.includes.2'),
                ],
                investment: t('services.editorialShowcase.items.1.investment'),
                investmentNote: t('services.editorialShowcase.items.1.investmentNote'),
                image: serviceImage2,
                imageAlt: t('services.editorialShowcase.items.1.imageAlt'),
                layout: 'image-left',
            },
            {
                id: '03',
                title: t('services.editorialShowcase.items.2.title'),
                description: t('services.editorialShowcase.items.2.description'),
                includes: [
                    t('services.editorialShowcase.items.2.includes.0'),
                    t('services.editorialShowcase.items.2.includes.1'),
                    t('services.editorialShowcase.items.2.includes.2'),
                ],
                investment: t('services.editorialShowcase.items.2.investment'),
                investmentNote: t('services.editorialShowcase.items.2.investmentNote'),
                image: serviceImage3,
                imageAlt: t('services.editorialShowcase.items.2.imageAlt'),
                layout: 'image-right',
            },
        ],
        [t]
    );

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
                threshold: 0.12,
                rootMargin: '0px 0px -8% 0px',
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`services-editorial-showcase ${isVisible ? 'services-editorial-showcase--revealed' : ''}`}
            aria-labelledby='services-editorial-showcase-title'
        >
            <div className='services-editorial-showcase__background' aria-hidden='true'>
                <img src={backgroundImage} alt='' className='services-editorial-showcase__background-image' />
            </div>

            <div className='services-editorial-showcase__overlay services-editorial-showcase__overlay--base' />
            <div className='services-editorial-showcase__overlay services-editorial-showcase__overlay--vignette' />
            <div className='services-editorial-showcase__overlay services-editorial-showcase__overlay--glow' />
            <div className='services-editorial-showcase__overlay services-editorial-showcase__overlay--focus' />

            <Container size='wide'>
                <div className='services-editorial-showcase__inner'>
                    <div className='services-editorial-showcase__header'>
                        <div className='services-editorial-showcase__topline'>
                            <span className='services-editorial-showcase__eyebrow'>
                                {t('services.editorialShowcase.eyebrow')}
                            </span>
                            <span className='services-editorial-showcase__topline-line' aria-hidden='true' />
                            <span className='services-editorial-showcase__index'>
                                {t('services.editorialShowcase.index')}
                            </span>
                        </div>

                        <div className='services-editorial-showcase__script-wrap' aria-hidden='true'>
                            <span className='services-editorial-showcase__script'>
                                {t('services.editorialShowcase.script')}
                            </span>
                        </div>

                        <h2 className='sr-only' id='services-editorial-showcase-title'>
                            {t('services.editorialShowcase.accessibility.title')}
                        </h2>
                    </div>

                    <div className='services-editorial-showcase__rows'>
                        {serviceItems.map((item, index) => {
                            const isImageLeft = item.layout === 'image-left';

                            return (
                                <article
                                    key={item.id}
                                    className={`services-editorial-showcase__row ${
                                        isImageLeft
                                            ? 'services-editorial-showcase__row--image-left'
                                            : 'services-editorial-showcase__row--image-right'
                                    }`}
                                    style={{ '--service-row-delay': `${index * 120}ms` }}
                                >
                                    {index !== 0 ? (
                                        <span className='services-editorial-showcase__separator' aria-hidden='true' />
                                    ) : null}

                                    <div className='services-editorial-showcase__row-grid'>
                                        <div className='services-editorial-showcase__content'>
                                            <div className='services-editorial-showcase__content-shell'>
                                                <span className='services-editorial-showcase__service-number'>
                                                    {item.id}
                                                </span>

                                                <h3 className='services-editorial-showcase__title'>{item.title}</h3>

                                                <p className='services-editorial-showcase__description'>
                                                    {item.description}
                                                </p>

                                                <div className='services-editorial-showcase__includes'>
                                                    <span className='services-editorial-showcase__label'>
                                                        {t('services.editorialShowcase.includesLabel')}
                                                    </span>

                                                    <span
                                                        className='services-editorial-showcase__label-line'
                                                        aria-hidden='true'
                                                    />

                                                    <ul className='services-editorial-showcase__list'>
                                                        {item.includes.map((include) => (
                                                            <li
                                                                key={include}
                                                                className='services-editorial-showcase__list-item'
                                                            >
                                                                <span
                                                                    className='services-editorial-showcase__list-bullet'
                                                                    aria-hidden='true'
                                                                />
                                                                <span>{include}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='services-editorial-showcase__aside'>
                                            <figure className='services-editorial-showcase__media'>
                                                <div className='services-editorial-showcase__media-frame'>
                                                    <img src={item.image} alt={item.imageAlt} />
                                                </div>
                                            </figure>

                                            <div className='services-editorial-showcase__investment'>
                                                <span className='services-editorial-showcase__label'>
                                                    {t('services.editorialShowcase.investmentLabel')}
                                                </span>

                                                <span
                                                    className='services-editorial-showcase__label-line'
                                                    aria-hidden='true'
                                                />

                                                <div className='services-editorial-showcase__price'>{item.investment}</div>

                                                <div className='services-editorial-showcase__price-note'>
                                                    {item.investmentNote}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className='services-editorial-showcase__footer'>
                        <NavLink to='/contact' className='services-editorial-showcase__button'>
                            {t('services.editorialShowcase.cta')}
                        </NavLink>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ServicesEditorialShowcase;