import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../ui/Container/Container.jsx';
import './projectPager.scss';

const ProjectPager = ({ previousProject, nextProject }) => {
    return (
        <section className='project-pager' aria-label='Project navigation'>
            <Container>
                <div className='project-pager__inner'>
                    <span className='project-pager__line' aria-hidden='true' />

                    <div className='project-pager__nav'>
                        {previousProject ? (
                            <NavLink to={`/portfolio/${previousProject.id}`} className='project-pager__link'>
                                <span>&lt;</span>
                                <span>Previous</span>
                            </NavLink>
                        ) : (
                            <span className='project-pager__link project-pager__link--disabled'>
                                <span>&lt;</span>
                                <span>Previous</span>
                            </span>
                        )}

                        <NavLink to='/portfolio' className='project-pager__grid' aria-label='Back to portfolio'>
                            <span />
                            <span />
                            <span />
                            <span />
                        </NavLink>

                        {nextProject ? (
                            <NavLink to={`/portfolio/${nextProject.id}`} className='project-pager__link project-pager__link--next'>
                                <span>Next</span>
                                <span>&gt;</span>
                            </NavLink>
                        ) : (
                            <span className='project-pager__link project-pager__link--disabled project-pager__link--next'>
                                <span>Next</span>
                                <span>&gt;</span>
                            </span>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProjectPager;