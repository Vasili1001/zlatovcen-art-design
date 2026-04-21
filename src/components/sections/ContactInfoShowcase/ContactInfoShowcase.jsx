import React from 'react';
import Container from '../../ui/Container/Container.jsx';
import './contactInfoShowcase.scss';

const contactItems = [
    {
        id: 'email-phone',
        eyebrow: 'Our Email & Phone',
        content: (
            <>
                <a href='mailto:info@velainteriors.com' className='contact-info-showcase__link'>
                    info@velainteriors.com
                </a>
                <a href='tel:+0014045071200' className='contact-info-showcase__subline'>
                    001 404 507 1200
                </a>
            </>
        ),
    },
    {
        id: 'address',
        eyebrow: 'Studio Address',
        content: (
            <address className='contact-info-showcase__text contact-info-showcase__text--address'>
                123 Peachtree Lane,
                <br />
                Suite 400 Atlanta, GA 30309
            </address>
        ),
    },
    {
        id: 'hours',
        eyebrow: 'Studio Hours',
        content: (
            <div className='contact-info-showcase__text'>
                Monday – Friday
                <br />
                10am – 6pm
            </div>
        ),
    },
];

const ContactInfoShowcase = ({ image }) => {
    return (
        <section className='contact-info-showcase' aria-labelledby='contact-info-showcase-title'>
            <h2 className='contact-info-showcase__sr-only' id='contact-info-showcase-title'>
                Studio contact information
            </h2>

            <Container size='wide'>
                <div className='contact-info-showcase__top'>
                    {contactItems.map((item) => (
                        <div key={item.id} className='contact-info-showcase__item'>
                            <span className='contact-info-showcase__divider' aria-hidden='true' />
                            <div className='contact-info-showcase__item-body'>
                                <span className='contact-info-showcase__eyebrow'>{item.eyebrow}</span>
                                <div className='contact-info-showcase__content'>{item.content}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            <div className='contact-info-showcase__image-band'>
                <div className='contact-info-showcase__image-wrap'>
                    <img
                        src={image}
                        alt='Luxury interior with refined architectural lines and warm atmosphere'
                        className='contact-info-showcase__image'
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactInfoShowcase;