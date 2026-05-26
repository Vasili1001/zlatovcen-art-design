import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import backgroundImage from '../../../assets/images/blog/post/blog-post-background.webp';
import './servicesProcessTimeline.scss';

const ServicesProcessTimeline = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const processSteps = useMemo(
        () => [
            {
                id: '01',
                title: t('services.processTimeline.steps.0.title'),
                description: t('services.processTimeline.steps.0.description'),
                side: 'left',
            },
            {
                id: '02',
                title: t('services.processTimeline.steps.1.title'),
                description: t('services.processTimeline.steps.1.description'),
                side: 'right',
            },
            {
                id: '03',
                title: t('services.processTimeline.steps.2.title'),
                description: t('services.processTimeline.steps.2.description'),
                side: 'left',
            },
            {
                id: '04',
                title: t('services.processTimeline.steps.3.title'),
                description: t('services.processTimeline.steps.3.description'),
                side: 'right',
            },
            {
                id: '05',
                title: t('services.processTimeline.steps.4.title'),
                description: t('services.processTimeline.steps.4.description'),
                side: 'left',
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
            className={`services-process-timeline ${isVisible ? 'services-process-timeline--revealed' : ''}`}
            aria-labelledby='services-process-timeline-title'
        >
            <div className='services-process-timeline__background' aria-hidden='true'>
                <img src={backgroundImage} alt='' className='services-process-timeline__background-image' />
            </div>

            <div className='services-process-timeline__overlay services-process-timeline__overlay--base' />
            <div className='services-process-timeline__overlay services-process-timeline__overlay--glow' />
            <div className='services-process-timeline__overlay services-process-timeline__overlay--vignette' />
            <div className='services-process-timeline__overlay services-process-timeline__overlay--focus' />

            <Container size='wide'>
                <div className='services-process-timeline__inner'>
                    <header className='services-process-timeline__header'>
                        <div className='services-process-timeline__topline'>
                            <span className='services-process-timeline__topline-label'>
                                {t('services.processTimeline.eyebrow')}
                            </span>
                            <span className='services-process-timeline__topline-line' aria-hidden='true' />
                            <span className='services-process-timeline__topline-index'>
                                {t('services.processTimeline.index')}
                            </span>
                        </div>

                        <div className='services-process-timeline__script-wrap' aria-hidden='true'>
                            <span className='services-process-timeline__script'>
                                {t('services.processTimeline.script')}
                            </span>
                        </div>

                        <h2 className='services-process-timeline__title' id='services-process-timeline-title'>
                            {t('services.processTimeline.title')}
                        </h2>

                        <p className='services-process-timeline__subtitle'>
                            {t('services.processTimeline.subtitle')}
                        </p>
                    </header>

                    <div className='services-process-timeline__timeline'>
                        <span className='services-process-timeline__line' aria-hidden='true' />
                        <span
                            className='services-process-timeline__terminal services-process-timeline__terminal--top'
                            aria-hidden='true'
                        />
                        <span
                            className='services-process-timeline__terminal services-process-timeline__terminal--bottom'
                            aria-hidden='true'
                        />

                        <div className='services-process-timeline__steps'>
                            {processSteps.map((step, index) => (
                                <article
                                    key={step.id}
                                    className={`services-process-timeline__step services-process-timeline__step--${step.side}`}
                                    style={{ '--timeline-step-delay': `${index * 140}ms` }}
                                >
                                    <span className='services-process-timeline__step-node' aria-hidden='true' />

                                    <div className='services-process-timeline__step-inner'>
                                        <div className='services-process-timeline__step-topline'>
                                            <span className='services-process-timeline__number'>{step.id}.</span>
                                            <span className='services-process-timeline__step-line' aria-hidden='true' />
                                        </div>

                                        <h3 className='services-process-timeline__step-title'>{step.title}</h3>

                                        <p className='services-process-timeline__step-description'>{step.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ServicesProcessTimeline;