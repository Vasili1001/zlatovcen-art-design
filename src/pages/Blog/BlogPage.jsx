import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/seo/SEO.jsx';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import FeaturedBlogPost from '../../components/sections/FeaturedBlogPost/FeaturedBlogPost.jsx';
import blogHeroImage from '../../assets/images/page-hero/PC/blog-pc.webp';
import blogHeroMobileImage from '../../assets/images/page-hero/phone/blog-phone.webp';
import LatestPosts from '../../components/sections/LatestPosts/LatestPosts.jsx';
import { blogPosts } from '../../data/blogPosts.js';
import { getFeaturedPost } from '../../utils/blog.js';
import { localizeBlogPosts } from '../../utils/localizeBlogPosts.js';
import './blogPage.scss';

const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Zlatovcen Art Design Journal',
    url: 'https://www.zlatovcenartdesign.md/blog',
    description:
        'Interior design journal by Zlatovcen Art Design with insights about premium interiors, materials, composition, and residential design.',
    publisher: {
        '@type': 'InteriorDesignService',
        name: 'Zlatovcen Art Design',
        url: 'https://www.zlatovcenartdesign.md/',
    },
};

const BlogPage = () => {
    const { t } = useTranslation();

    const localizedPosts = useMemo(
        () => localizeBlogPosts(blogPosts, t),
        [t]
    );

    const featuredPost = useMemo(
        () => getFeaturedPost(localizedPosts),
        [localizedPosts]
    );

    return (
        <>
            <SEO
                title='Журнал о дизайне интерьера'
                description='Журнал Zlatovcen Art Design о дизайне интерьера, материалах, эстетике, планировке и создании элегантных жилых и коммерческих пространств.'
                path='/blog'
                schema={blogSchema}
            />

            <div className='blog-page'>
                <PageHero
                    image={blogHeroImage}
                    mobileImage={blogHeroMobileImage}
                    imageAlt={t('blog.pageHero.imageAlt')}
                    title={t('blog.pageHero.title')}
                    eyebrow={t('blog.pageHero.eyebrow')}
                    contentWidth='narrow'
                    height='compact'
                    align='center'
                />

                <FeatureBar />

                <FeaturedBlogPost post={featuredPost} />

                <LatestPosts posts={localizedPosts} />
            </div>
        </>
    );
};

export default BlogPage;