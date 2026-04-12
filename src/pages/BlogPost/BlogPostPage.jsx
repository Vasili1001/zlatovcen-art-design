import React from 'react';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import BlogDetailArticle from '../../components/sections/BlogDetailArticle/BlogDetailArticle.jsx';
import blogPostHeroImage from '../../assets/images/blog/post/blog-post-hero.jpg';
import blogPostBackgroundImage from '../../assets/images/blog/post/blog-post-background.jpg';
import blogPostInlineImage from '../../assets/images/blog/post/blog-post-inline.jpg';
import './blogPostPage.scss';

const blogParagraphs = [
    'Art has long been a defining element of luxury interior design, serving as both an aesthetic centerpiece and a reflection of personal taste. In a luxury space, the integration of fine art elevates the environment, transforming it into a sophisticated and engaging experience.',
    'The placement of art in a luxury interior is equally important. A carefully curated gallery wall or an oversized painting above a grand fireplace can create focal points that define a room’s atmosphere.',
    'In addition to its visual impact, art in luxury interior design often reflects the homeowner’s values, interests, or life experiences. Whether it’s a piece that evokes nostalgia, honors cultural heritage, or supports a cause, art becomes a form of storytelling that enriches the space and the lives of those who live within it.',
    'In conclusion, art plays a multifaceted role in luxury interior design by enhancing the aesthetic appeal, fostering emotional connection, and creating a refined atmosphere. It is not only a display of beauty but also a symbol of sophistication and individuality that transforms a house into a true home.',
];

const BlogPostPage = () => {
    return (
        <div className='blog-post-page'>
            <PageHero
                image={blogPostHeroImage}
                imageAlt='Luxury interior editorial blog post hero'
                title='Blog Post'
                contentWidth='narrow'
            />

            <FeatureBar />

            <BlogDetailArticle
                date='April 23, 2025'
                title='The Role of Art in Luxury Interior Design'
                backgroundImage={blogPostBackgroundImage}
                backgroundImageAlt='Luxury interior background ambience'
                inlineImage={blogPostInlineImage}
                inlineImageAlt='Elegant living room with warm premium styling'
                paragraphs={blogParagraphs}
                quote='The details are not the details. They make the design.'
                previousTo='/blog'
                nextTo='/blog'
                gridTo='/blog'
            />
        </div>
    );
};

export default BlogPostPage;