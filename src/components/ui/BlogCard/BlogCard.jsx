import React from 'react';
import { NavLink } from 'react-router-dom';
import './blogCard.scss';

const BlogCard = ({
                      to,
                      image,
                      imageAlt,
                      category,
                      title,
                      ctaLabel = 'Read Post',
                      variant = 'default',
                      className = '',
                  }) => {
    return (
        <article className={`blog-card blog-card--${variant} ${className}`.trim()}>
            <NavLink to={to} className='blog-card__link' aria-label={title}>
                <div className='blog-card__media'>
                    <div className='blog-card__image-wrap'>
                        <img src={image} alt={imageAlt || title} className='blog-card__image' />
                    </div>
                </div>

                <div className='blog-card__content'>
                    {category ? <span className='blog-card__category'>{category}</span> : null}

                    <h3 className='blog-card__title'>{title}</h3>

                    <span className='blog-card__cta'>{ctaLabel}</span>
                </div>
            </NavLink>
        </article>
    );
};

export default BlogCard;