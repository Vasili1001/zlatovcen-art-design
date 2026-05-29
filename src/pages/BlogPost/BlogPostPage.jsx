import React, { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import BlogDetailArticle from '../../components/sections/BlogDetailArticle/BlogDetailArticle.jsx';
import { blogPosts } from '../../data/blogPosts.js';
import { getAdjacentPosts, getPostBySlug } from '../../utils/blog.js';
import { localizeBlogPosts } from '../../utils/localizeBlogPosts.js';
import './blogPostPage.scss';

const BlogPostPage = () => {
    const { id } = useParams();
    const { t } = useTranslation();

    const localizedPosts = useMemo(
        () => localizeBlogPosts(blogPosts, t),
        [t]
    );

    const post = useMemo(
        () => getPostBySlug(localizedPosts, id),
        [localizedPosts, id]
    );

    const { previousPost, nextPost } = useMemo(
        () => getAdjacentPosts(localizedPosts, id),
        [localizedPosts, id]
    );

    if (!post) {
        return <Navigate to='/blog' replace />;
    }

    return (
        <div className='blog-post-page'>
            <PageHero
                image={post.heroImage}
                imageAlt={post.heroImageAlt}
                title={post.title}
                eyebrow={post.category}
                contentWidth='narrow'
                height='compact'
                align='center'
            />

            <FeatureBar />

            <BlogDetailArticle
                date={post.date}
                title={post.title}
                backgroundImage={post.backgroundImage}
                backgroundImageAlt={post.backgroundImageAlt}
                inlineImage={post.inlineImage}
                inlineImageAlt={post.inlineImageAlt}
                paragraphs={post.paragraphs}
                sections={post.sections}
                quote={post.quote}
                previousTo={previousPost ? `/blog/${previousPost.slug}` : '/blog'}
                previousLabel={previousPost ? previousPost.title : t('blog.articleNavigation.allArticles')}
                nextTo={nextPost ? `/blog/${nextPost.slug}` : '/blog'}
                nextLabel={nextPost ? nextPost.title : t('blog.articleNavigation.backToJournal')}
                gridTo='/blog'
                gridLabel={t('blog.articleNavigation.journal')}
            />
        </div>
    );
};

export default BlogPostPage;