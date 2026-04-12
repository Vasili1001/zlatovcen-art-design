import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../ui/Container/Container.jsx';
import './blogDetailArticle.scss';

const BlogDetailArticle = ({
                               date = 'April 23, 2025',
                               title = 'The Role of Art in Luxury Interior Design',
                               backgroundImage,
                               backgroundImageAlt = '',
                               inlineImage,
                               inlineImageAlt = '',
                               paragraphs = [],
                               quote = 'The details are not the details. They make the design.',
                               previousTo = '/blog',
                               nextTo = '/blog',
                               gridTo = '/blog',
                           }) => {
    return (
        <section className='blog-detail-article' aria-labelledby='blog-detail-article-title'>
            <div className='blog-detail-article__background' aria-hidden='true'>
                <img
                    src={backgroundImage}
                    alt={backgroundImageAlt}
                    className='blog-detail-article__background-image'
                />
                <div className='blog-detail-article__background-overlay blog-detail-article__background-overlay--base' />
                <div className='blog-detail-article__background-overlay blog-detail-article__background-overlay--vignette' />
                <div className='blog-detail-article__background-overlay blog-detail-article__background-overlay--fade' />
            </div>

            <Container>
                <div className='blog-detail-article__inner'>
                    <div className='blog-detail-article__content'>
                        <span className='blog-detail-article__date'>{date}</span>

                        <h2 className='blog-detail-article__title' id='blog-detail-article-title'>
                            {title}
                        </h2>

                        <div className='blog-detail-article__body'>
                            {paragraphs.slice(0, 2).map((paragraph, index) => (
                                <p key={`top-${index}`} className='blog-detail-article__paragraph'>
                                    {paragraph}
                                </p>
                            ))}

                            {inlineImage ? (
                                <figure className='blog-detail-article__figure'>
                                    <img
                                        src={inlineImage}
                                        alt={inlineImageAlt}
                                        className='blog-detail-article__figure-image'
                                    />
                                </figure>
                            ) : null}

                            {quote ? (
                                <blockquote className='blog-detail-article__quote'>
                                    <p>{quote}</p>
                                </blockquote>
                            ) : null}

                            {paragraphs.slice(2).map((paragraph, index) => (
                                <p key={`bottom-${index}`} className='blog-detail-article__paragraph'>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className='blog-detail-article__pager'>
                            <span className='blog-detail-article__pager-line' aria-hidden='true' />

                            <div className='blog-detail-article__pager-nav'>
                                <NavLink to={previousTo} className='blog-detail-article__pager-link'>
                                    <span>&lt;</span>
                                    <span>Previous</span>
                                </NavLink>

                                <NavLink
                                    to={gridTo}
                                    className='blog-detail-article__pager-grid'
                                    aria-label='Back to blog'
                                >
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </NavLink>

                                <NavLink
                                    to={nextTo}
                                    className='blog-detail-article__pager-link blog-detail-article__pager-link--next'
                                >
                                    <span>Next</span>
                                    <span>&gt;</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BlogDetailArticle;