import React from 'react';
import { NavLink } from 'react-router-dom';
import './projectStatementBanner.scss';

const ProjectStatementBanner = ({
                                    image,
                                    imageAlt = '',
                                    text = 'With meticulous attention to detail and an unwavering commitment to quality, we design spaces that are as exceptional as you are.',
                                    buttonLabel = 'View Services',
                                    buttonTo = '/services',
                                }) => {
    return (
        <section className='project-statement-banner' aria-labelledby='project-statement-banner-title'>
            <div className='project-statement-banner__media'>
                <img
                    src={image}
                    alt={imageAlt}
                    className='project-statement-banner__image'
                />

                <div className='project-statement-banner__overlay project-statement-banner__overlay--base' />
                <div className='project-statement-banner__overlay project-statement-banner__overlay--vignette' />
                <div className='project-statement-banner__overlay project-statement-banner__overlay--glow' />

                <div className='project-statement-banner__panel'>
                    <div className='project-statement-banner__panel-inner'>
                        <div className='project-statement-banner__topline'>
                            <span className='project-statement-banner__eyebrow'>Design Statement</span>
                            <span className='project-statement-banner__topline-line' aria-hidden='true' />
                            <span className='project-statement-banner__icon' aria-hidden='true'>
                                ✦
                            </span>
                        </div>

                        <h2 className='project-statement-banner__sr-only' id='project-statement-banner-title'>
                            Design statement
                        </h2>

                        <p className='project-statement-banner__text'>{text}</p>

                        <NavLink to={buttonTo} className='project-statement-banner__button'>
                            {buttonLabel}
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectStatementBanner;