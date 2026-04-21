import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import './contactFormSection.scss';

const ContactFormSection = ({ image }) => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const serviceOptions = useMemo(
        () => [
            t('contact.formSection.serviceOptions.0'),
            t('contact.formSection.serviceOptions.1'),
            t('contact.formSection.serviceOptions.2'),
            t('contact.formSection.serviceOptions.3'),
            t('contact.formSection.serviceOptions.4'),
        ],
        [t]
    );

    useEffect(() => {
        const node = sectionRef.current;

        if (!node) return undefined;

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (mediaQuery.matches) {
            setIsVisible(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(node);
                }
            },
            {
                threshold: 0.18,
                rootMargin: '0px 0px -8% 0px',
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`contact-form-section ${isVisible ? 'contact-form-section--revealed' : ''}`}
            aria-labelledby='contact-form-section-title'
        >
            <Container size='wide'>
                <div className='contact-form-section__inner'>
                    <div className='contact-form-section__content'>
                        <div className='contact-form-section__intro'>
                            <div className='contact-form-section__topline'>
                                <span className='contact-form-section__eyebrow'>
                                    {t('contact.formSection.eyebrow')}
                                </span>
                                <span className='contact-form-section__topline-line' aria-hidden='true' />
                                <span className='contact-form-section__index'>
                                    {t('contact.formSection.index')}
                                </span>
                            </div>

                            <div className='contact-form-section__script-wrap' aria-hidden='true'>
                                <span className='contact-form-section__script'>
                                    {t('contact.formSection.script')}
                                </span>
                            </div>

                            <h2 className='contact-form-section__title' id='contact-form-section-title'>
                                {t('contact.formSection.title')}
                            </h2>

                            <p className='contact-form-section__description'>
                                {t('contact.formSection.description')}
                            </p>
                        </div>

                        <form className='contact-form-section__form'>
                            <div className='contact-form-section__field'>
                                <label className='contact-form-section__label' htmlFor='contact-name'>
                                    {t('contact.formSection.fields.name.label')}
                                </label>
                                <input
                                    id='contact-name'
                                    type='text'
                                    name='name'
                                    placeholder={t('contact.formSection.fields.name.placeholder')}
                                    autoComplete='name'
                                />
                            </div>

                            <div className='contact-form-section__field'>
                                <label className='contact-form-section__label' htmlFor='contact-email'>
                                    {t('contact.formSection.fields.email.label')}
                                </label>
                                <input
                                    id='contact-email'
                                    type='email'
                                    name='email'
                                    placeholder={t('contact.formSection.fields.email.placeholder')}
                                    autoComplete='email'
                                />
                            </div>

                            <div className='contact-form-section__field'>
                                <label className='contact-form-section__label' htmlFor='contact-service'>
                                    {t('contact.formSection.fields.service.label')}
                                </label>
                                <div className='contact-form-section__select-wrap'>
                                    <select id='contact-service' name='service' defaultValue='' autoComplete='off'>
                                        <option value='' disabled>
                                            {t('contact.formSection.fields.service.placeholder')}
                                        </option>
                                        {serviceOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className='contact-form-section__field contact-form-section__field--textarea'>
                                <label className='contact-form-section__label' htmlFor='contact-message'>
                                    {t('contact.formSection.fields.message.label')}
                                </label>
                                <textarea
                                    id='contact-message'
                                    name='message'
                                    placeholder={t('contact.formSection.fields.message.placeholder')}
                                    rows='6'
                                />
                            </div>

                            <div className='contact-form-section__actions'>
                                <button type='submit' className='contact-form-section__button'>
                                    {t('contact.formSection.submit')}
                                </button>

                                <p className='contact-form-section__note'>
                                    {t('contact.formSection.note')}
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className='contact-form-section__media'>
                        <div className='contact-form-section__media-shell'>
                            <div className='contact-form-section__image-wrap'>
                                <img
                                    src={image}
                                    alt={t('contact.formSection.imageAlt')}
                                    className='contact-form-section__image'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactFormSection;