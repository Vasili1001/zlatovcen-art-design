import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import founderImage from '../../../assets/images/founder/founder-viktor.jpg';
import './aboutFounder.scss';

const AboutFounder = () => {
    const { t } = useTranslation();

    return (
        <section className='about-founder' aria-labelledby='about-founder-title'>
            <Container size='wide'>
                <div className='about-founder__inner'>
                    <div className='about-founder__topline'>
                        <span className='about-founder__eyebrow'>{t('home.aboutFounder.eyebrow')}</span>
                        <span className='about-founder__topline-line' aria-hidden='true' />
                        <span className='about-founder__index'>{t('home.aboutFounder.index')}</span>
                    </div>

                    <div className='about-founder__layout'>
                        <div className='about-founder__content'>
                            <div className='about-founder__script-wrap' aria-hidden='true'>
                                <span className='about-founder__script'>{t('home.aboutFounder.script')}</span>
                            </div>

                            <span className='about-founder__kicker'>{t('home.aboutFounder.kicker')}</span>

                            <h2 className='about-founder__title' id='about-founder-title'>
                                {t('home.aboutFounder.name')}
                            </h2>

                            <p className='about-founder__lead'>
                                {t('home.aboutFounder.lead')}
                            </p>

                            <div className='about-founder__statement'>
                                <span className='about-founder__statement-line' aria-hidden='true' />
                                <p className='about-founder__text'>
                                    {t('home.aboutFounder.text')}
                                </p>
                            </div>

                            <div className='about-founder__actions'>
                                <NavLink to='/about' className='about-founder__button about-founder__button--primary'>
                                    {t('home.aboutFounder.ctaPrimary')}
                                </NavLink>

                                <NavLink to='/contact' className='about-founder__button about-founder__button--secondary'>
                                    {t('home.aboutFounder.ctaSecondary')}
                                </NavLink>
                            </div>
                        </div>

                        <div className='about-founder__media'>
                            <div className='about-founder__media-shell'>
                                <div className='about-founder__media-plane' aria-hidden='true' />
                                <div className='about-founder__image-wrap'>
                                    <img
                                        src={founderImage}
                                        alt={t('home.aboutFounder.imageAlt')}
                                        className='about-founder__image'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutFounder;