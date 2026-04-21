import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import statementImage from '../../../assets/images/blog/featured/featured-main.jpg';
import './aboutStatementBanner.scss';

const AboutStatementBanner = () => {
    const { t } = useTranslation();

    return (
        <section className='about-statement-banner' aria-labelledby='about-statement-banner-title'>
            <Container size='wide'>
                <div className='about-statement-banner__inner'>
                    <div className='about-statement-banner__layout'>
                        <div className='about-statement-banner__image-wrap'>
                            <img
                                src={statementImage}
                                alt={t('about.statementBanner.imageAlt')}
                                className='about-statement-banner__image'
                            />
                        </div>

                        <article className='about-statement-banner__card'>
                            <div className='about-statement-banner__card-inner'>
                                <span className='about-statement-banner__eyebrow'>
                                    {t('about.statementBanner.eyebrow')}
                                </span>

                                <h2
                                    className='about-statement-banner__title'
                                    id='about-statement-banner-title'
                                >
                                    {t('about.statementBanner.title')}
                                </h2>

                                <NavLink to='/portfolio' className='about-statement-banner__link'>
                                    {t('about.statementBanner.cta')}
                                </NavLink>
                            </div>
                        </article>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutStatementBanner;