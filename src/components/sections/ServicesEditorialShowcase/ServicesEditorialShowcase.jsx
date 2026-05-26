import React, { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import backgroundImage from '../../../assets/images/blog/post/blog-post-background.webp';
import serviceImage1 from '../../../assets/images/portfolio/projects/services-img-1.webp';
import serviceImage2 from '../../../assets/images/portfolio/projects/services-img-2.webp';
import serviceImage3 from '../../../assets/images/portfolio/projects/services-img-3.webp';
import './servicesEditorialShowcase.scss';

const serviceImages = [serviceImage1, serviceImage2, serviceImage3];
const serviceLayouts = ['image-right', 'image-left', 'image-right'];

const ServicesEditorialShowcase = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const serviceItems = useMemo(() => {
        const items = t('services.editorialShowcase.items', { returnObjects: true });

        if (!Array.isArray(items)) return [];

        return items.map((item, index) => ({
            id: String(index + 1).padStart(2, '0'),
            title: item.title,
            description: item.description,
            includes: Array.isArray(item.includes) ? item.includes : [],
            investment: item.investment,
            investmentNote: item.investmentNote,
            image: serviceImages[index] || serviceImages[0],
            imageAlt: item.imageAlt || item.title,
            layout: serviceLayouts[index] || 'image-right',
        }));
    }, [t]);

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
                                    style={{ '--service-row-delay': `${index * 140}ms` }}
                                >
                                    {index !== 0 && (
                                        <span className='services-editorial-showcase__separator' aria-hidden='true' />
                                    )}

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

                                                {item.includes.length > 0 && (
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
                                                )}
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

                                                {item.investmentNote && (
                                                    <div className='services-editorial-showcase__price-note'>
                                                        {item.investmentNote}
                                                    </div>
                                                )}
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