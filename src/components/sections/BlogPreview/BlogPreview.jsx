import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../ui/Container/Container.jsx';
import backgroundImage from '../../../assets/images/blog-preview/blog-preview-background.jpg';
import post1 from '../../../assets/images/blog-preview/post-1.jpg';
import post2 from '../../../assets/images/blog-preview/post-2.jpg';
import post3 from '../../../assets/images/blog-preview/post-3.jpg';
import './blogPreview.scss';

const posts = [
    {
        id: 1,
        image: post1,
        title: 'The Role of Art in Luxury Interior Design.',
        category: 'Design Insight',
        link: '/blog',
    },
    {
        id: 2,
        image: post2,
        title: 'Color Palettes for Interiors: The Guide',
        category: 'Materials & Tone',
        link: '/blog',
    },
    {
        id: 3,
        image: post3,
        title: 'Small Touches That Make an Impact in Design.',
        category: 'Styling Notes',
        link: '/blog',
    },
];

const BlogPreview = () => {
    return (
        <section className='blog-preview' aria-labelledby='blog-preview-title'>
            <div className='blog-preview__background' aria-hidden='true'>
                <img src={backgroundImage} alt='' className='blog-preview__background-image' />
            </div>

            <div className='blog-preview__overlay blog-preview__overlay--base' />
            <div className='blog-preview__overlay blog-preview__overlay--vignette' />
            <div className='blog-preview__overlay blog-preview__overlay--glow' />
            <div className='blog-preview__overlay blog-preview__overlay--focus' />

            <Container size='wide'>
                <div className='blog-preview__inner'>
                    <div className='blog-preview__header'>
                        <div className='blog-preview__topline'>
                            <span className='blog-preview__eyebrow'>Journal</span>
                            <span className='blog-preview__topline-line' aria-hidden='true' />
                            <span className='blog-preview__index'>03</span>
                        </div>

                        <h2 className='blog-preview__title' id='blog-preview-title'>
                            Latest Posts
                        </h2>

                        <p className='blog-preview__subtitle'>
                            Perspectives on interiors, materials, atmosphere, and the subtle decisions that shape a
                            timeless living space.
                        </p>
                    </div>

                    <div className='blog-preview__grid'>
                        {posts.map((post) => (
                            <article key={post.id} className='blog-preview__card'>
                                <div className='blog-preview__image-wrap'>
                                    <img src={post.image} alt={post.title} />
                                </div>

                                <div className='blog-preview__content'>
                                    <span className='blog-preview__category'>{post.category}</span>

                                    <h3 className='blog-preview__card-title'>{post.title}</h3>

                                    <NavLink to={post.link} className='blog-preview__link'>
                                        Read Post
                                    </NavLink>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className='blog-preview__footer'>
                        <span className='blog-preview__footer-line' aria-hidden='true' />
                        <NavLink to='/blog' className='blog-preview__footer-link'>
                            Visit the Journal
                        </NavLink>
                        <span className='blog-preview__footer-line' aria-hidden='true' />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BlogPreview;