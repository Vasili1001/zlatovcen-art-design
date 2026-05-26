import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import BlogCard from '../../ui/BlogCard/BlogCard.jsx';
import './latestPosts.scss';

const LatestPosts = ({ posts = [] }) => {
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

    return (
        <section
            ref={sectionRef}
            className={`latest-posts ${isVisible ? 'latest-posts--revealed' : ''}`}
            aria-labelledby='latest-posts-title'
        >
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
                            <span className='latest-posts__script'>
                                {t('blog.latestPosts.script')}
                            </span>
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
                            {posts.map((post, index) => (
                                <div
                                    key={post.id}
                                    className='latest-posts__card-reveal'
                                    style={{ '--latest-post-delay': `${index * 110}ms` }}
                                >
                                    <BlogCard
                                        to={`/blog/${post.slug}`}
                                        image={post.previewImage}
                                        imageAlt={post.previewImageAlt || post.title}
                                        category={post.category}
                                        title={post.title}
                                        ctaLabel={t('blog.latestPosts.cta')}
                                        variant='default'
                                        className='latest-posts__blog-card'
                                    />
                                </div>
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