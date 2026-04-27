import React from 'react';
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
                           }) => {
    const introParagraphs = paragraphs.slice(0, 2);
    const remainingParagraphs = paragraphs.slice(2);

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
                    <article className='blog-detail-article__content'>
                        <header className='blog-detail-article__header'>
                            <div className='blog-detail-article__meta'>
                                <span className='blog-detail-article__meta-line' aria-hidden='true' />
                                <span className='blog-detail-article__date'>{date}</span>
                                <span className='blog-detail-article__meta-line' aria-hidden='true' />
                            </div>

                            <h2 className='blog-detail-article__title' id='blog-detail-article-title'>
                                {title}
                            </h2>
                        </header>

                        <div className='blog-detail-article__body'>
                            <div className='blog-detail-article__body-column'>
                                {introParagraphs.map((paragraph, index) => (
                                    <p
                                        key={`intro-${index}`}
                                        className={`blog-detail-article__paragraph ${
                                            index === 0 ? 'blog-detail-article__paragraph--lead' : ''
                                        }`}
                                    >
                                        {paragraph}
                                    </p>
                                ))}

                                {inlineImage ? (
                                    <figure className='blog-detail-article__figure'>
                                        <div className='blog-detail-article__figure-shell'>
                                            <img
                                                src={inlineImage}
                                                alt={inlineImageAlt}
                                                className='blog-detail-article__figure-image'
                                            />
                                        </div>
                                    </figure>
                                ) : null}

                                {quote ? (
                                    <blockquote className='blog-detail-article__quote'>
                                        <p>{quote}</p>
                                    </blockquote>
                                ) : null}

                                {remainingParagraphs.map((paragraph, index) => (
                                    <p key={`body-${index}`} className='blog-detail-article__paragraph'>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </Container>
        </section>
    );
};

export default BlogDetailArticle;