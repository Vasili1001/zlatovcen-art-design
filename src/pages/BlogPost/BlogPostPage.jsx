import React, { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import BlogDetailArticle from '../../components/sections/BlogDetailArticle/BlogDetailArticle.jsx';
import { blogPosts } from '../../data/blogPosts.js';
import { getAdjacentPosts, getPostBySlug } from '../../utils/blog.js';
import './blogPostPage.scss';

const BlogPostPage = () => {
    const { id } = useParams();

    const post = useMemo(() => getPostBySlug(blogPosts, id), [id]);
    const { previousPost, nextPost } = useMemo(
        () => getAdjacentPosts(blogPosts, id),
        [id]
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
                quote={post.quote}
                previousTo={previousPost ? `/blog/${previousPost.slug}` : '/blog'}
                previousLabel={previousPost ? previousPost.title : 'All Articles'}
                nextTo={nextPost ? `/blog/${nextPost.slug}` : '/blog'}
                nextLabel={nextPost ? nextPost.title : 'Back to Journal'}
                gridTo='/blog'
            />
        </div>
    );
};

export default BlogPostPage;