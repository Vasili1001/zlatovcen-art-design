import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../ui/Container/Container.jsx';
import servicesPreviewImage from '../../../assets/images/services-preview/services-preview-main.jpg';
import './servicesPreview.scss';

const serviceItems = [
    {
        id: '01',
        title: 'Residential Design',
        description: 'Tailored interiors shaped around lifestyle, atmosphere, and timeless comfort.',
    },
    {
        id: '02',
        title: 'Commercial Interiors',
        description: 'Refined business spaces with clarity, presence, and elevated functionality.',
    },
    {
        id: '03',
        title: 'Living Room Design',
        description: 'Balanced compositions focused on warmth, proportion, and visual calm.',
    },
];

const ServicesPreview = () => {
    return (
        <section className='services-preview' aria-labelledby='services-preview-title'>
            <Container size='wide'>
                <div className='services-preview__inner'>
                    <div className='services-preview__media'>
                        <div className='services-preview__media-shell'>
                            <div className='services-preview__image-wrap'>
                                <img
                                    src={servicesPreviewImage}
                                    alt='Elegant interior detail with warm natural light'
                                    className='services-preview__image'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='services-preview__content'>
                        <div className='services-preview__topline'>
                            <span className='services-preview__eyebrow'>Services</span>
                            <span className='services-preview__topline-line' aria-hidden='true' />
                            <span className='services-preview__index'>02</span>
                        </div>

                        <h2 className='services-preview__title' id='services-preview-title'>
                            Interior Design Services Curated with Precision and Quiet Luxury.
                        </h2>

                        <p className='services-preview__description'>
                            We craft interiors that combine visual refinement, functional clarity, and a timeless
                            sense of atmosphere. Every space is shaped with intention, proportion, and restraint.
                        </p>

                        <div className='services-preview__list' role='list' aria-label='Interior design services'>
                            {serviceItems.map((item) => (
                                <div key={item.id} className='services-preview__item' role='listitem'>
                                    <div className='services-preview__item-meta'>
                                        <span className='services-preview__item-number'>{item.id}</span>
                                    </div>

                                    <div className='services-preview__item-body'>
                                        <h3 className='services-preview__item-title'>{item.title}</h3>
                                        <p className='services-preview__item-description'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='services-preview__footer'>
                            <span className='services-preview__footer-line' aria-hidden='true' />
                            <NavLink to='/services' className='services-preview__link'>
                                Explore All Services
                            </NavLink>
                            <span className='services-preview__footer-line' aria-hidden='true' />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ServicesPreview;