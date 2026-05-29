import React from 'react';
import Container from '../../ui/Container/Container.jsx';
import './pageHero.scss';

const PageHero = ({
                      image,
                      mobileImage,
                      imageAlt = '',
                      eyebrow,
                      title,
                      subtitle,
                      contentWidth = 'default',
                  }) => {
    const contentClassName = ['page-hero__content', `page-hero__content--${contentWidth}`].join(' ');

    return (
        <section className='page-hero page-hero--animated' aria-labelledby='page-hero-title'>
            <div className='page-hero__media' aria-hidden='true'>
                <picture>
                    {mobileImage ? (
                        <source srcSet={mobileImage} media='(max-width: 767px)' />
                    ) : null}

                    <img src={image} alt={imageAlt} className='page-hero__image' />
                </picture>
            </div>

            <div className='page-hero__overlay page-hero__overlay--base' />
            <div className='page-hero__overlay page-hero__overlay--vignette' />
            <div className='page-hero__overlay page-hero__overlay--glow' />
            <div className='page-hero__overlay page-hero__overlay--focus' />

            <Container size='wide'>
                <div className='page-hero__inner'>
                    <div className={contentClassName}>
                        {eyebrow ? <span className='page-hero__eyebrow'>{eyebrow}</span> : null}

                        <h1 className='page-hero__title' id='page-hero-title'>
                            {title}
                        </h1>

                        {subtitle ? <p className='page-hero__subtitle'>{subtitle}</p> : null}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PageHero;