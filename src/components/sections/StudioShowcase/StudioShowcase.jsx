import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import backgroundImage from '../../../assets/images/studio-showcase/backgroundImage.webp';
import mainImage from '../../../assets/images/studio-showcase/center.webp';
import leftImage from '../../../assets/images/studio-showcase/left.webp';
import rightImage from '../../../assets/images/studio-showcase/right.webp';
import './studioShowcase.scss';

const StudioShowcase = () => {
    const { t } = useTranslation();

    const galleryItems = useMemo(
        () => [
            {
                key: 'left',
                className: 'studio-showcase__card studio-showcase__card--left',
                image: leftImage,
                alt: t('home.studioShowcase.gallery.left.alt'),
                label: t('home.studioShowcase.gallery.left.label'),
            },
            {
                key: 'main',
                className: 'studio-showcase__card studio-showcase__card--main',
                image: mainImage,
                alt: t('home.studioShowcase.gallery.main.alt'),
                label: t('home.studioShowcase.gallery.main.label'),
            },
            {
                key: 'right',
                className: 'studio-showcase__card studio-showcase__card--right',
                image: rightImage,
                alt: t('home.studioShowcase.gallery.right.alt'),
                label: t('home.studioShowcase.gallery.right.label'),
            },
        ],
        [t]
    );

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
                            <span className='studio-showcase__eyebrow'>{t('home.studioShowcase.eyebrow')}</span>
                            <span className='studio-showcase__topline-line' aria-hidden='true' />
                            <span className='studio-showcase__index'>{t('home.studioShowcase.index')}</span>
                        </div>

                        <div className='studio-showcase__script-wrap' aria-hidden='true'>
                            <span className='studio-showcase__script'>{t('home.studioShowcase.script')}</span>
                        </div>

                        <h2 className='studio-showcase__title' id='studio-showcase-title'>
                            {t('home.studioShowcase.title')}
                        </h2>

                        <p className='studio-showcase__subtitle'>
                            {t('home.studioShowcase.subtitle')}
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
                                {t('home.studioShowcase.cta')}
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