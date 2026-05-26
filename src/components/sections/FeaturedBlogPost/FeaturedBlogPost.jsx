import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import fallbackBackgroundImage from '../../../assets/images/blog/featured/featured-background.webp';
import fallbackFeaturedImage from '../../../assets/images/blog/featured/featured.webp';
import './featuredBlogPost.scss';

const FeaturedBlogPost = ({ post }) => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

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
                threshold: 0.12,
                rootMargin: '0px 0px -8% 0px',
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    if (!post) return null;

    const backgroundImage = post.featuredBackgroundImage || fallbackBackgroundImage;
    const image = post.featuredImage || post.previewImage || fallbackFeaturedImage;
    const imageAlt = post.featuredImageAlt || post.previewImageAlt || post.title;
    const articleUrl = `/blog/${post.slug}`;

    return (
        <section
            ref={sectionRef}
            className={`featured-blog-post ${isVisible ? 'featured-blog-post--revealed' : ''}`}
            aria-labelledby='featured-blog-post-title'
        >
            <div className='featured-blog-post__background' aria-hidden='true'>
                <img src={backgroundImage} alt='' className='featured-blog-post__background-image' />
            </div>

            <div className='featured-blog-post__overlay featured-blog-post__overlay--base' />
            <div className='featured-blog-post__overlay featured-blog-post__overlay--vignette' />
            <div className='featured-blog-post__overlay featured-blog-post__overlay--glow' />
            <div className='featured-blog-post__overlay featured-blog-post__overlay--focus' />

            <Container size='wide'>
                <div className='featured-blog-post__inner'>
                    <div className='featured-blog-post__topline'>
                        <span className='featured-blog-post__eyebrow'>
                            {t('blog.featuredPost.eyebrow')}
                        </span>
                        <span className='featured-blog-post__topline-line' aria-hidden='true' />
                        <span className='featured-blog-post__index'>
                            {t('blog.featuredPost.index')}
                        </span>
                    </div>

                    <div className='featured-blog-post__heading-wrap'>
                        <span className='featured-blog-post__script'>
                            {t('blog.featuredPost.script')}
                        </span>
                    </div>

                    <div className='featured-blog-post__layout'>
                        <article className='featured-blog-post__card'>
                            <div className='featured-blog-post__card-inner'>
                                <div className='featured-blog-post__meta'>
                                    <span className='featured-blog-post__meta-item'>
                                        {post.category}
                                    </span>
                                    <span className='featured-blog-post__meta-divider' aria-hidden='true' />
                                    <span className='featured-blog-post__meta-item'>
                                        {post.date}
                                    </span>
                                </div>

                                <h2 className='featured-blog-post__title' id='featured-blog-post-title'>
                                    {post.title}
                                </h2>

                                <p className='featured-blog-post__text'>
                                    {post.excerpt}
                                </p>

                                <div className='featured-blog-post__footer'>
                                    <span className='featured-blog-post__footer-line' aria-hidden='true' />
                                    <NavLink to={articleUrl} className='featured-blog-post__link'>
                                        {t('blog.featuredPost.cta')}
                                    </NavLink>
                                </div>
                            </div>
                        </article>

                        <figure className='featured-blog-post__media'>
                            <div className='featured-blog-post__media-shell'>
                                <div className='featured-blog-post__media-plane' aria-hidden='true' />
                                <div className='featured-blog-post__image-wrap'>
                                    <img
                                        src={image}
                                        alt={imageAlt}
                                        className='featured-blog-post__image'
                                    />
                                </div>

                                <figcaption className='featured-blog-post__media-badge'>
                                    {t('blog.featuredPost.badge')}
                                </figcaption>
                            </div>
                        </figure>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedBlogPost;