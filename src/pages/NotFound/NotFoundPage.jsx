import React from 'react';
import { NavLink } from 'react-router-dom';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import notFoundHeroImage from '../../assets/images/not-found/not-found-hero.jpg';
import './notFoundPage.scss';

const NotFoundPage = () => {
    return (
        <div className='not-found-page'>
            <PageHero
                image={notFoundHeroImage}
                imageAlt='Luxury interior background for not found page'
                title={
                    <>
                        404
                        <br />
                        Error
                    </>
                }
                contentWidth='narrow'
            />

            <FeatureBar />

            <section className='not-found-page__content' aria-labelledby='not-found-title'>
                <div className='not-found-page__inner'>
                    <span className='not-found-page__eyebrow'>Sorry</span>

                    <h1 className='not-found-page__title' id='not-found-title'>
                        The Page You Are Looking For
                        <br />
                        Doesn&apos;t Exist.
                    </h1>

                    <NavLink to='/' className='not-found-page__button'>
                        Back to Home
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default NotFoundPage;