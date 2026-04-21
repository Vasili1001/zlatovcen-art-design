import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import BlogCard from '../../ui/BlogCard/BlogCard.jsx';
import './latestPosts.scss';

import post1 from '../../../assets/images/blog/posts/post1.jpg';
import post2 from '../../../assets/images/blog/posts/post2.jpg';

const LatestPosts = () => {
    const { t } = useTranslation();

    const posts = useMemo(
        () => [
            {
                id: 'art-in-luxury',
                title: t('blog.latestPosts.posts.0.title'),
                image: post1,
                category: t('blog.latestPosts.posts.0.category'),
            },
            {
                id: 'color-palettes',
                title: t('blog.latestPosts.posts.1.title'),
                image: post2,
                category: t('blog.latestPosts.posts.1.category'),
            },
            {
                id: 'small-touches',
                title: t('blog.latestPosts.posts.2.title'),
                image: post1,
                category: t('blog.latestPosts.posts.2.category'),
            },
            {
                id: 'art-in-luxury-2',
                title: t('blog.latestPosts.posts.3.title'),
                image: post2,
                category: t('blog.latestPosts.posts.3.category'),
            },
        ],
        [t]
    );

    return (
        <section className='latest-posts' aria-labelledby='latest-posts-title'>
            <div className='latest-posts__background-accent' aria-hidden='true' />
            <div className='latest-posts__background-glow latest-posts__background-glow--left' aria-hidden='true' />
            <div className='latest-posts__background-glow latest-posts__background-glow--right' aria-hidden='true' />

            <Container size='wide'>
                <div className='latest-posts__inner'>
                    <div className='latest-posts__header'>
                        <div className='latest-posts__topline'>
                            <span className='latest-posts__topline-label'>
                                {t('blog.latestPosts.eyebrow')}
                            </span>
                            <span className='latest-posts__topline-line' aria-hidden='true' />
                            <span className='latest-posts__topline-index'>
                                {t('blog.latestPosts.index')}
                            </span>
                        </div>

                        <div className='latest-posts__script-wrap' aria-hidden='true'>
                            <span className='latest-posts__script'>{t('blog.latestPosts.script')}</span>
                        </div>

                        <h2 className='latest-posts__title' id='latest-posts-title'>
                            {t('blog.latestPosts.title')}
                        </h2>

                        <p className='latest-posts__subtitle'>
                            {t('blog.latestPosts.subtitle')}
                        </p>
                    </div>

                    <div className='latest-posts__grid-shell'>
                        <div className='latest-posts__grid'>
                            {posts.map((post) => (
                                <BlogCard
                                    key={post.id}
                                    to={`/blog/${post.id}`}
                                    image={post.image}
                                    imageAlt={post.title}
                                    category={post.category}
                                    title={post.title}
                                    ctaLabel={t('blog.latestPosts.cta')}
                                    variant='default'
                                    className='latest-posts__blog-card'
                                />
                            ))}
                        </div>
                    </div>

                    <div className='latest-posts__footer'>
                        <span className='latest-posts__footer-line' />
                        <span className='latest-posts__footer-mark'>Z</span>
                        <span className='latest-posts__footer-line' />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default LatestPosts;