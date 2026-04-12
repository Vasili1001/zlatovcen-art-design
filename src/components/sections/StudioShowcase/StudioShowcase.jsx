import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../ui/Container/Container.jsx';
import backgroundImage from '../../../assets/images/studio-showcase/backgroundImage.jpg';
import mainImage from '../../../assets/images/studio-showcase/showcase-main.jpg';
import leftImage from '../../../assets/images/studio-showcase/showcase-left.jpg';
import rightImage from '../../../assets/images/studio-showcase/showcase-right.jpg';
import './studioShowcase.scss';

const galleryItems = [
    {
        key: 'left',
        className: 'studio-showcase__card studio-showcase__card--left',
        image: leftImage,
        alt: 'Elegant interior detail with refined furniture styling',
        label: 'Material Harmony',
    },
    {
        key: 'main',
        className: 'studio-showcase__card studio-showcase__card--main',
        image: mainImage,
        alt: 'Luxury living room with warm light and premium design composition',
        label: 'Signature Composition',
    },
    {
        key: 'right',
        className: 'studio-showcase__card studio-showcase__card--right',
        image: rightImage,
        alt: 'Premium dark interior with sophisticated seating and decor',
        label: 'Atmospheric Depth',
    },
];

const StudioShowcase = () => {
    return (
        <section className='studio-showcase' aria-labelledby='studio-showcase-title'>
            <div className='studio-showcase__background' aria-hidden='true'>
                <img src={backgroundImage} alt='' className='studio-showcase__background-image' />
            </div>

            <div className='studio-showcase__overlay studio-showcase__overlay--base' />
            <div className='studio-showcase__overlay studio-showcase__overlay--vignette' />
            <div className='studio-showcase__overlay studio-showcase__overlay--glow' />
            <div className='studio-showcase__overlay studio-showcase__overlay--focus' />

            <Container size='wide'>
                <div className='studio-showcase__inner'>
                    <div className='studio-showcase__intro'>
                        <div className='studio-showcase__topline'>
                            <span className='studio-showcase__eyebrow'>Studio Signature</span>
                            <span className='studio-showcase__topline-line' aria-hidden='true' />
                            <span className='studio-showcase__index'>01</span>
                        </div>

                        <h2 className='studio-showcase__title' id='studio-showcase-title'>
                            We design refined interiors with quiet luxury, sculptural balance, and timeless visual
                            presence.
                        </h2>

                        <p className='studio-showcase__subtitle'>
                            Bespoke interiors shaped through atmosphere, restraint, and a deeply considered sense of
                            composition.
                        </p>
                    </div>

                    <div className='studio-showcase__visual'>
                        <div className='studio-showcase__gallery'>
                            {galleryItems.map((item) => (
                                <figure key={item.key} className={item.className}>
                                    <div className='studio-showcase__card-frame'>
                                        <img src={item.image} alt={item.alt} />
                                    </div>
                                    <figcaption className='studio-showcase__caption'>{item.label}</figcaption>
                                </figure>
                            ))}
                        </div>

                        <div className='studio-showcase__footer'>
                            <span className='studio-showcase__footer-line' aria-hidden='true' />
                            <NavLink to='/portfolio' className='studio-showcase__link'>
                                View Gallery
                            </NavLink>
                            <span className='studio-showcase__footer-line' aria-hidden='true' />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default StudioShowcase;