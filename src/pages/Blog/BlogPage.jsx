import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import FeaturedBlogPost from '../../components/sections/FeaturedBlogPost/FeaturedBlogPost.jsx';
import blogHeroImage from '../../assets/images/blog/blog-hero.jpg';
import LatestPosts from '../../components/sections/LatestPosts/LatestPosts.jsx';
import './blogPage.scss';

const BlogPage = () => {
    const { t } = useTranslation();

    return (
        <div className='blog-page'>
            <PageHero
                image={blogHeroImage}
                imageAlt={t('blog.pageHero.imageAlt')}
                title={t('blog.pageHero.title')}
                eyebrow={t('blog.pageHero.eyebrow')}
                contentWidth='narrow'
            />

            <FeatureBar />

            <FeaturedBlogPost />

            <LatestPosts />
        </div>
    );
};

export default BlogPage;