import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import faqImageTop from '../../../assets/images/blog-preview/first_img_faq.webp';
import faqImageBottom from '../../../assets/images/blog-preview/second_img_faq.webp';
import './contactFaq.scss';

const ContactFaq = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const faqGroups = useMemo(
        () => [
            {
                id: 'group-1',
                image: faqImageTop,
                imageAlt: t('contact.faq.groups.0.imageAlt'),
                imagePosition: 'right',
                badge: t('contact.faq.groups.0.badge'),
                items: [
                    {
                        id: '01',
                        question: t('contact.faq.groups.0.items.0.question'),
                        answer: t('contact.faq.groups.0.items.0.answer'),
                    },
                    {
                        id: '02',
                        question: t('contact.faq.groups.0.items.1.question'),
                        answer: t('contact.faq.groups.0.items.1.answer'),
                    },
                    {
                        id: '03',
                        question: t('contact.faq.groups.0.items.2.question'),
                        answer: t('contact.faq.groups.0.items.2.answer'),
                    },
                ],
            },
            {
                id: 'group-2',
                image: faqImageBottom,
                imageAlt: t('contact.faq.groups.1.imageAlt'),
                imagePosition: 'left',
                badge: t('contact.faq.groups.1.badge'),
                items: [
                    {
                        id: '04',
                        question: t('contact.faq.groups.1.items.0.question'),
                        answer: t('contact.faq.groups.1.items.0.answer'),
                    },
                    {
                        id: '05',
                        question: t('contact.faq.groups.1.items.1.question'),
                        answer: t('contact.faq.groups.1.items.1.answer'),
                    },
                    {
                        id: '06',
                        question: t('contact.faq.groups.1.items.2.question'),
                        answer: t('contact.faq.groups.1.items.2.answer'),
                    },
                ],
            },
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
                threshold: 0.16,
                rootMargin: '0px 0px -8% 0px',
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`contact-faq ${isVisible ? 'contact-faq--revealed' : ''}`}
            aria-labelledby='contact-faq-title'
        >
            <Container size='wide'>
                <div className='contact-faq__inner'>
                    <div className='contact-faq__header'>
                        <div className='contact-faq__topline'>
                            <span className='contact-faq__eyebrow'>{t('contact.faq.eyebrow')}</span>
                            <span className='contact-faq__topline-line' aria-hidden='true' />
                            <span className='contact-faq__index'>{t('contact.faq.index')}</span>
                        </div>

                        <div className='contact-faq__script-wrap' aria-hidden='true'>
                            <span className='contact-faq__script'>{t('contact.faq.script')}</span>
                        </div>

                        <h2 className='contact-faq__title' id='contact-faq-title'>
                            {t('contact.faq.title')}
                        </h2>

                        <p className='contact-faq__subtitle'>
                            {t('contact.faq.subtitle')}
                        </p>
                    </div>

                    <div className='contact-faq__groups'>
                        {faqGroups.map((group, groupIndex) => (
                            <div
                                key={group.id}
                                className={`contact-faq__group contact-faq__group--image-${group.imagePosition}`}
                                style={{ '--contact-faq-group-delay': `${groupIndex * 120}ms` }}
                            >
                                <div className='contact-faq__content'>
                                    {group.items.map((item) => (
                                        <article key={item.id} className='contact-faq__item'>
                                            <div className='contact-faq__item-topline'>
                                                <span className='contact-faq__number'>{item.id}.</span>
                                                <span className='contact-faq__item-line' aria-hidden='true' />
                                            </div>

                                            <h3 className='contact-faq__question'>{item.question}</h3>
                                            <p className='contact-faq__answer'>{item.answer}</p>
                                        </article>
                                    ))}
                                </div>

                                <figure className='contact-faq__media'>
                                    <div className='contact-faq__media-shell'>
                                        <div className='contact-faq__media-backdrop' aria-hidden='true' />
                                        <div className='contact-faq__image-wrap'>
                                            <img src={group.image} alt={group.imageAlt} className='contact-faq__image' />
                                        </div>

                                        <figcaption className='contact-faq__media-badge'>{group.badge}</figcaption>
                                    </div>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactFaq;