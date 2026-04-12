import React from 'react';
import Container from '../../ui/Container/Container.jsx';
import './projectOverview.scss';

const ProjectOverview = ({ title, shortDescription, serviceType, features, thumbImage }) => {
    return (
        <section className='project-overview' aria-labelledby='project-overview-title'>
            <Container>
                <div className='project-overview__inner'>
                    <div className='project-overview__head'>
                        <div className='project-overview__thumb' aria-hidden='true'>
                            <img src={thumbImage} alt='' />
                        </div>

                        <h2 className='project-overview__title' id='project-overview-title'>
                            {title}
                        </h2>
                    </div>

                    <div className='project-overview__content'>
                        <div className='project-overview__description'>
                            <p>{shortDescription}</p>
                        </div>

                        <div className='project-overview__meta'>
                            <div className='project-overview__meta-block'>
                                <span className='project-overview__label'>Service Type:</span>
                                <span className='project-overview__value'>{serviceType}</span>
                            </div>

                            <div className='project-overview__meta-block'>
                                <span className='project-overview__label'>Features:</span>
                                <span className='project-overview__value'>
                                    {features.join(', ')}
                                </span>
                            </div>
                        </div>
                    </div>

                    <span className='project-overview__divider' aria-hidden='true' />
                </div>
            </Container>
        </section>
    );
};

export default ProjectOverview;