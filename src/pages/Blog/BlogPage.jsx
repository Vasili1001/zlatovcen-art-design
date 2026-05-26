import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import FeaturedBlogPost from '../../components/sections/FeaturedBlogPost/FeaturedBlogPost.jsx';
import blogHeroImage from '../../assets/images/hero/PC/slide-6.webp';
import LatestPosts from '../../components/sections/LatestPosts/LatestPosts.jsx';
import { blogPosts } from '../../data/blogPosts.js';
import { getFeaturedPost } from '../../utils/blog.js';
import './blogPage.scss';

const BlogPage = () => {
    const { t } = useTranslation();

    const featuredPost = useMemo(() => getFeaturedPost(blogPosts), []);
    const latestPosts = useMemo(() => blogPosts, []);

    return (
        <div className='blog-page'>
            <PageHero
                image={blogHeroImage}
                imageAlt={t('blog.pageHero.imageAlt')}
                title={t('blog.pageHero.title')}
                eyebrow={t('blog.pageHero.eyebrow')}
                contentWidth='narrow'
                height='compact'
                align='center'
            />

            <FeatureBar />

            <FeaturedBlogPost post={featuredPost} />

            <LatestPosts posts={latestPosts} />
        </div>
    );
};

export default BlogPage;