import React, { useEffect, useRef, useState } from 'react';
import Container from '../../ui/Container/Container.jsx';
import './projectOverview.scss';

const ProjectOverview = ({ title, thumbImage }) => {
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
            className={`project-overview ${isVisible ? 'project-overview--revealed' : ''}`}
            aria-labelledby='project-overview-title'
        >
            <Container>
                <div className='project-overview__inner'>
                    <div className='project-overview__head'>
                        {thumbImage ? (
                            <div className='project-overview__thumb' aria-hidden='true'>
                                <img src={thumbImage} alt='' loading='eager' decoding='async' />
                            </div>
                        ) : null}

                        <div className='project-overview__heading-copy'>
                            <span className='project-overview__eyebrow'>Project Overview</span>

                            <h2 className='project-overview__title' id='project-overview-title'>
                                {title}
                            </h2>
                        </div>
                    </div>

                    <span className='project-overview__divider' aria-hidden='true' />
                </div>
            </Container>
        </section>
    );
};

export default ProjectOverview;