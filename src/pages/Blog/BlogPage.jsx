import React, { useMemo } from 'react';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import FeaturedBlogPost from '../../components/sections/FeaturedBlogPost/FeaturedBlogPost.jsx';
import blogHeroImage from '../../assets/images/blog/blog-hero.jpg';
import LatestPosts from '../../components/sections/LatestPosts/LatestPosts.jsx';
import { blogPosts } from '../../data/blogPosts.js';
import { getFeaturedPost, getLatestPosts } from '../../utils/blog.js';
import './blogPage.scss';

const BlogPage = () => {
    const featuredPost = useMemo(() => getFeaturedPost(blogPosts), []);
    const latestPosts = useMemo(
        () => getLatestPosts(blogPosts, featuredPost.id),
        [featuredPost.id]
    );

    return (
        <div className='blog-page'>
            <PageHero
                image={blogHeroImage}
                imageAlt='Luxury editorial journal hero'
                title='Journal'
                eyebrow='Design Journal'
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