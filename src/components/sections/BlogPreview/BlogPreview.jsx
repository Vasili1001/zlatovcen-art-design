import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import BlogCard from '../../ui/BlogCard/BlogCard.jsx';
import backgroundImage from '../../../assets/images/blog-preview/blog-preview-background.webp';
import { blogPosts } from '../../../data/blogPosts.js';
import { getFeaturedPost, getLatestPosts } from '../../../utils/blog.js';
import './blogPreview.scss';

const BlogPreview = () => {
    const { t } = useTranslation();

    const featuredPost = useMemo(() => getFeaturedPost(blogPosts), []);

    const previewPosts = useMemo(
        () => getLatestPosts(blogPosts, featuredPost.id).slice(0, 3),
        [featuredPost.id]
    );

    return (
        <section className='blog-preview' aria-labelledby='blog-preview-title'>
            <div className='blog-preview__background' aria-hidden='true'>
                <img src={backgroundImage} alt='' className='blog-preview__background-image' />
            </div>

            <div className='blog-preview__overlay blog-preview__overlay--base' />
            <div className='blog-preview__overlay blog-preview__overlay--vignette' />
            <div className='blog-preview__overlay blog-preview__overlay--glow' />
            <div className='blog-preview__overlay blog-preview__overlay--focus' />

            <Container size='wide'>
                <div className='blog-preview__inner'>
                    <div className='blog-preview__header'>
                        <div className='blog-preview__topline'>
                            <span className='blog-preview__eyebrow'>
                                {t('home.blogPreview.eyebrow')}
                            </span>
                            <span className='blog-preview__topline-line' aria-hidden='true' />
                            <span className='blog-preview__index'>
                                {t('home.blogPreview.index')}
                            </span>
                        </div>

                        <h2 className='blog-preview__title' id='blog-preview-title'>
                            {t('home.blogPreview.title')}
                        </h2>

                        <p className='blog-preview__subtitle'>
                            {t('home.blogPreview.subtitle')}
                        </p>
                    </div>

                    <div className='blog-preview__grid'>
                        {previewPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                image={post.previewImage}
                                imageAlt={post.previewImageAlt || post.title}
                                category={post.category}
                                title={post.title}
                                ctaLabel={t('home.blogPreview.readPost')}
                                variant='default'
                            />
                        ))}
                    </div>

                    <div className='blog-preview__footer'>
                        <span className='blog-preview__footer-line' aria-hidden='true' />
                        <NavLink to='/blog' className='blog-preview__footer-link'>
                            {t('home.blogPreview.footerLink')}
                        </NavLink>
                        <span className='blog-preview__footer-line' aria-hidden='true' />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BlogPreview;