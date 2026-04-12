import React from 'react';
import Container from '../../ui/Container/Container.jsx';
import './featureBar.scss';

const defaultItems = ['Luxury', 'Craftsmanship', 'Elegance', 'Opulence', 'Majestic'];

const FeatureBar = ({ items = defaultItems, className = '' }) => {
    return (
        <section className={`feature-bar ${className}`.trim()} aria-label='Brand values'>
            <div className='feature-bar__background' />

            <Container>
                <div className='feature-bar__inner'>
                    <div className='feature-bar__scroll'>
                        <ul className='feature-bar__list'>
                            {items.map((item, index) => (
                                <li key={item} className='feature-bar__item'>
                                    <span className='feature-bar__text'>{item}</span>

                                    {index !== items.length - 1 && (
                                        <span className='feature-bar__divider' />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FeatureBar;