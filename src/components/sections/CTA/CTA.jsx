import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../ui/Container/Container.jsx';
import './cta.scss';

const CTA = ({
                 title = 'Let Us Help Transform Your Living Space into A Masterpiece.',
                 buttonText = 'Start Your Journey',
                 buttonTo = '/contact',
             }) => {
    return (
        <section className='cta' aria-labelledby='cta-title'>
            <div className='cta__background' aria-hidden='true' />

            <Container size='narrow'>
                <div className='cta__inner'>
                    <span className='cta__eyebrow'>Begin Your Project</span>

                    <h2 className='cta__title' id='cta-title'>
                        {title}
                    </h2>

                    <p className='cta__text'>
                        Thoughtful interiors, curated with timeless restraint and a premium attention to detail.
                    </p>

                    <NavLink to={buttonTo} className='cta__button'>
                        {buttonText}
                    </NavLink>
                </div>
            </Container>
        </section>
    );
};

export default CTA;