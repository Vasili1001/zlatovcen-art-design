import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import { portfolioProjects } from '../../../data/portfolioProjects.js';
import './portfolioGallery.scss';

const PortfolioGallery = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;

        if (!node) return undefined;

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (mediaQuery.matches) {
            requestAnimationFrame(() => setIsVisible(true));
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.05,
                rootMargin: '160px 0px -5% 0px',
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`portfolio-gallery ${isVisible ? 'portfolio-gallery--revealed' : ''}`}
            aria-labelledby='portfolio-gallery-title'
        >
            <Container>
                <div className='portfolio-gallery__inner'>
                    <div className='portfolio-gallery__heading'>
                        <div className='portfolio-gallery__icon' aria-hidden='true'>
                            ✧
                        </div>

                        <h2 className='portfolio-gallery__title' id='portfolio-gallery-title'>
                            {t('portfolio.gallery.titleLine1')}
                            <br />
                            {t('portfolio.gallery.titleLine2')}
                        </h2>
                    </div>

                    <div className='portfolio-gallery__grid'>
                        {portfolioProjects.map((project, index) => (
                            <article
                                key={project.id}
                                className='portfolio-gallery__card'
                                style={{ '--portfolio-card-delay': `${Math.min(index * 70, 420)}ms` }}
                            >
                                <NavLink
                                    to={`/portfolio/${project.id}`}
                                    className='portfolio-gallery__media'
                                    aria-label={t('portfolio.gallery.openProject', { title: project.title })}
                                >
                                    <img
                                        src={project.coverImage}
                                        alt={project.coverAlt || project.title}
                                        loading={index < 4 ? 'eager' : 'lazy'}
                                        decoding='async'
                                        fetchPriority={index < 2 ? 'high' : 'auto'}
                                    />
                                </NavLink>

                                <div className='portfolio-gallery__content'>
                                    <h3 className='portfolio-gallery__card-title'>
                                        <NavLink to={`/portfolio/${project.id}`}>
                                            {project.title}
                                        </NavLink>
                                    </h3>

                                    {project.category ? (
                                        <p className='portfolio-gallery__card-category'>
                                            {project.category}
                                        </p>
                                    ) : null}

                                    <NavLink to={`/portfolio/${project.id}`} className='portfolio-gallery__link'>
                                        {t('portfolio.gallery.details')}
                                    </NavLink>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PortfolioGallery;