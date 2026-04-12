import React from 'react';
import Container from '../../ui/Container/Container.jsx';
import './projectEditorialGallery.scss';

const ProjectEditorialGallery = ({ rows }) => {
    return (
        <section className='project-editorial-gallery' aria-label='Project gallery'>
            <Container>
                <div className='project-editorial-gallery__inner'>
                    {rows.map((row, index) => (
                        <div
                            key={`${row.layout}-${index}`}
                            className={`project-editorial-gallery__row project-editorial-gallery__row--${row.layout}`}
                        >
                            {row.images.map((image, imageIndex) => (
                                <figure
                                    key={`${image.src}-${imageIndex}`}
                                    className='project-editorial-gallery__item'
                                >
                                    <img src={image.src} alt={image.alt} />
                                </figure>
                            ))}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ProjectEditorialGallery;