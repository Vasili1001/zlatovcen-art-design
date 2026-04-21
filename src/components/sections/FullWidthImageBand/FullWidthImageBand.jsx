import React from 'react';
import './fullWidthImageBand.scss';

const FullWidthImageBand = ({
                                image,
                                imageAlt = 'Luxury interior with refined architectural lines and warm atmosphere',
                                className = '',
                            }) => {
    return (
        <section className={`full-width-image-band ${className}`.trim()} aria-label='Interior showcase image'>
            <div className='full-width-image-band__wrap'>
                <img
                    src={image}
                    alt={imageAlt}
                    className='full-width-image-band__image'
                />
            </div>
        </section>
    );
};

export default FullWidthImageBand;