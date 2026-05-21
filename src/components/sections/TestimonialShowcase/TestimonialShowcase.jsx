import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import './testimonialShowcase.scss';

const TestimonialShowcase = () => {
    const { t } = useTranslation();

    return (
        <section className='testimonial-showcase' aria-labelledby='testimonial-showcase-title'>
            <div className='testimonial-showcase__overlay testimonial-showcase__overlay--base' />
            <div className='testimonial-showcase__overlay testimonial-showcase__overlay--vignette' />
            <div className='testimonial-showcase__overlay testimonial-showcase__overlay--glow' />
            <div className='testimonial-showcase__overlay testimonial-showcase__overlay--focus' />

            <Container>
                <div className='testimonial-showcase__inner'>
                    <div className='testimonial-showcase__topline'>
                        <span className='testimonial-showcase__eyebrow'>{t('home.testimonialShowcase.eyebrow')}</span>
                        <span className='testimonial-showcase__topline-line' aria-hidden='true' />
                        <span className='testimonial-showcase__index'>{t('home.testimonialShowcase.index')}</span>
                    </div>

                    <div className='testimonial-showcase__panel'>
                        <div className='testimonial-showcase__script-wrap' aria-hidden='true'>
                            <span className='testimonial-showcase__script'>{t('home.testimonialShowcase.script')}</span>
                        </div>

                        <h2 className='sr-only' id='testimonial-showcase-title'>
                            {t('home.testimonialShowcase.accessibility.title')}
                        </h2>

                        <span className='testimonial-showcase__quote-mark' aria-hidden='true'>
                            “
                        </span>

                        <blockquote className='testimonial-showcase__quote'>
                            {t('home.testimonialShowcase.quote')}
                        </blockquote>

                        <p className='testimonial-showcase__note'>
                            {t('home.testimonialShowcase.note')}
                        </p>

                        <div className='testimonial-showcase__author-block'>
                            <span className='testimonial-showcase__author-line' aria-hidden='true' />
                            <span className='testimonial-showcase__author'>{t('home.testimonialShowcase.role')}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TestimonialShowcase;