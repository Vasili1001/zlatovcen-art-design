import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../ui/Container/Container.jsx';
import { portfolioProjects } from '../../../data/portfolioProjects.js';
import './portfolioGallery.scss';

const PortfolioGallery = () => {
    return (
        <section className='portfolio-gallery' aria-labelledby='portfolio-gallery-title'>
            <Container>
                <div className='portfolio-gallery__inner'>
                    <div className='portfolio-gallery__heading'>
                        <div className='portfolio-gallery__icon' aria-hidden='true'>
                            ✧
                        </div>

                        <h2 className='portfolio-gallery__title' id='portfolio-gallery-title'>
                            Explore Our Gallery
                            <br />
                            of Sohpisticated Interiors
                        </h2>
                    </div>

                    <div className='portfolio-gallery__grid'>
                        {portfolioProjects.map((project) => (
                            <article
                                key={project.id}
                                className={`portfolio-gallery__card ${
                                    project.featured ? 'portfolio-gallery__card--featured' : ''
                                }`}
                            >
                                <NavLink
                                    to={`/portfolio/${project.id}`}
                                    className='portfolio-gallery__media'
                                    aria-label={`Open ${project.title} project`}
                                >
                                    <img src={project.coverImage} alt={project.coverAlt} />
                                </NavLink>

                                <div className='portfolio-gallery__content'>
                                    <h3 className='portfolio-gallery__card-title'>
                                        <NavLink to={`/portfolio/${project.id}`}>
                                            {project.title}
                                        </NavLink>
                                    </h3>

                                    <NavLink
                                        to={`/portfolio/${project.id}`}
                                        className='portfolio-gallery__link'
                                    >
                                        Details
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