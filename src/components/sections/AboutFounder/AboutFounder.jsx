import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../ui/Container/Container.jsx';
import founderImage from '../../../assets/images/founder/founder-viktor.jpg';
import './aboutFounder.scss';

const AboutFounder = () => {
    return (
        <section className='about-founder' aria-labelledby='about-founder-title'>
            <Container>
                <div className='about-founder__inner'>
                    <div className='about-founder__media'>
                        <div className='about-founder__image-wrap'>
                            <img
                                src={founderImage}
                                alt='Viktor Zlatovchen, founder of Zlatovchen Art Design'
                                className='about-founder__image'
                            />
                        </div>
                    </div>

                    <div className='about-founder__content'>
                        <span className='about-founder__eyebrow'>Welcome</span>

                        <h2 className='about-founder__title' id='about-founder-title'>
                            I Am Viktor Zlatovchen
                        </h2>

                        <p className='about-founder__text'>
                            As the founder of Zlatovchen Art Design, I’ve always believed that interior
                            design is more than just creating beautiful spaces — it’s about crafting
                            environments that inspire, comfort, and elevate the everyday experience.
                        </p>

                        <div className='about-founder__actions'>
                            <NavLink to='/about' className='about-founder__button about-founder__button--primary'>
                                Our Team
                            </NavLink>

                            <NavLink to='/contact' className='about-founder__button about-founder__button--secondary'>
                                Get in Touch
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutFounder;