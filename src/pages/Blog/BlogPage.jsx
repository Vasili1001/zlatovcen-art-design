import React from 'react';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import FeaturedBlogPost from '../../components/sections/FeaturedBlogPost/FeaturedBlogPost.jsx';
import blogHeroImage from '../../assets/images/blog/blog-hero.jpg';
import './blogPage.scss';
import LatestPosts from "../../components/sections/LatestPosts/LatestPosts.jsx";

const BlogPage = () => {
    return (
        <div className='blog-page'>
            <PageHero
                image={blogHeroImage}
                imageAlt='Luxury interior blog page hero'
                title='Blog'
                contentWidth='narrow'
            />

            <FeatureBar />
            <FeaturedBlogPost />
            <LatestPosts />
        </div>
    );
};

export default BlogPage;