import React from 'react';
import Container from '../../ui/Container/Container.jsx';
import './projectEditorialGallery.scss';

const ProjectEditorialGallery = ({ images = [] }) => {
    if (!Array.isArray(images) || images.length === 0) {
        return null;
    }

    return (
        <section className='project-editorial-gallery' aria-label='Project gallery'>
            <Container>
                <div className='project-editorial-gallery__inner'>
                    <div className='project-editorial-gallery__grid'>
                        {images.map((image, index) => (
                            <figure
                                key={`${image.src}-${index}`}
                                className='project-editorial-gallery__item'
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading='lazy'
                                    decoding='async'
                                />
                            </figure>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProjectEditorialGallery;