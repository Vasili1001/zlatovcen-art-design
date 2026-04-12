import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../ui/Container/Container.jsx';
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
            <Container size='wide'>
                <div className='project-statement-banner__inner'>
                    <div className='project-statement-banner__media'>
                        <img
                            src={image}
                            alt={imageAlt}
                            className='project-statement-banner__image'
                        />
                    </div>

                    <div className='project-statement-banner__overlay' />

                    <div className='project-statement-banner__card'>
                        <div className='project-statement-banner__icon' aria-hidden='true'>
                            ✧
                        </div>

                        <h2 className='project-statement-banner__sr-only' id='project-statement-banner-title'>
                            Design statement
                        </h2>

                        <p className='project-statement-banner__text'>{text}</p>

                        <span className='project-statement-banner__divider' aria-hidden='true' />

                        <NavLink to={buttonTo} className='project-statement-banner__button'>
                            {buttonLabel}
                        </NavLink>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProjectStatementBanner;