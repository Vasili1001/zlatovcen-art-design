import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import './cta.scss';

const CTA = ({ title, buttonText, buttonTo = '/contact' }) => {
    const { t } = useTranslation();

    const resolvedTitle = title || t('common.cta.title');
    const resolvedButtonText = buttonText || t('common.cta.buttonText');

    return (
        <section className='cta' aria-labelledby='cta-title'>
            <div className='cta__background' aria-hidden='true' />
            <div className='cta__overlay cta__overlay--base' aria-hidden='true' />
            <div className='cta__overlay cta__overlay--glow' aria-hidden='true' />
            <div className='cta__overlay cta__overlay--focus' aria-hidden='true' />

            <Container size='narrow'>
                <div className='cta__inner'>
                    <div className='cta__script-wrap' aria-hidden='true'>
                        <span className='cta__script'>{t('common.cta.script')}</span>
                    </div>

                    <span className='cta__eyebrow'>{t('common.cta.eyebrow')}</span>

                    <h2 className='cta__title' id='cta-title'>
                        {resolvedTitle}
                    </h2>

                    <p className='cta__text'>
                        {t('common.cta.text')}
                    </p>

                    <div className='cta__actions'>
                        <NavLink to={buttonTo} className='cta__button'>
                            {resolvedButtonText}
                        </NavLink>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CTA;