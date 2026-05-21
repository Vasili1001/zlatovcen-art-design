import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import servicesPreviewImage from '../../../assets/images/services-preview/services_main_page.webp';
import './servicesPreview.scss';

const ServicesPreview = () => {
    const { t } = useTranslation();

    const serviceItems = useMemo(() => {
        const items = t('home.servicesPreview.items', { returnObjects: true });

        if (!Array.isArray(items)) return [];

        return items.map((item, index) => ({
            id: String(index + 1).padStart(2, '0'),
            title: item.title,
            description: item.description,
        }));
    }, [t]);

    return (
        <section className='services-preview' aria-labelledby='services-preview-title'>
            <Container size='wide'>
                <div className='services-preview__inner'>
                    <div className='services-preview__media'>
                        <div className='services-preview__media-shell'>
                            <div className='services-preview__media-plane' aria-hidden='true' />
                            <div className='services-preview__image-wrap'>
                                <img
                                    src={servicesPreviewImage}
                                    alt={t('home.servicesPreview.imageAlt')}
                                    className='services-preview__image'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='services-preview__content'>
                        <div className='services-preview__topline'>
                            <span className='services-preview__eyebrow'>{t('home.servicesPreview.eyebrow')}</span>
                            <span className='services-preview__topline-line' aria-hidden='true' />
                            <span className='services-preview__index'>{t('home.servicesPreview.index')}</span>
                        </div>

                        <div className='services-preview__script-wrap' aria-hidden='true'>
                            <span className='services-preview__script'>{t('home.servicesPreview.script')}</span>
                        </div>

                        <h2 className='services-preview__title' id='services-preview-title'>
                            {t('home.servicesPreview.title')}
                        </h2>

                        <div
                            className='services-preview__list'
                            role='list'
                            aria-label={t('home.servicesPreview.accessibility.listLabel')}
                        >
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
                                {t('home.servicesPreview.cta')}
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