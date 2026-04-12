import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../ui/Container/Container.jsx';
import backgroundImage from '../../../assets/images/blog/featured/featured-background.jpg';
import featuredImage from '../../../assets/images/blog/featured/featured-main.jpg';
import './featuredBlogPost.scss';

const FeaturedBlogPost = () => {
    return (
        <section className='featured-blog-post' aria-labelledby='featured-blog-post-title'>
            <div className='featured-blog-post__background' aria-hidden='true'>
                <img
                    src={backgroundImage}
                    alt=''
                    className='featured-blog-post__background-image'
                />
            </div>

            <div className='featured-blog-post__overlay featured-blog-post__overlay--base' />
            <div className='featured-blog-post__overlay featured-blog-post__overlay--vignette' />
            <div className='featured-blog-post__overlay featured-blog-post__overlay--glow' />

            <Container>
                <div className='featured-blog-post__inner'>
                    <div className='featured-blog-post__eyebrow-wrap'>
                        <span className='featured-blog-post__eyebrow'>Featured</span>
                    </div>

                    <div className='featured-blog-post__layout'>
                        <article className='featured-blog-post__card'>
                            <div className='featured-blog-post__card-inner'>
                                <h2 className='featured-blog-post__title' id='featured-blog-post-title'>
                                    A Featured Blog Post
                                    <br />
                                    Title Would Go Here
                                </h2>

                                <p className='featured-blog-post__text'>
                                    With meticulous attention to detail and an unwavering commitment
                                    to quality, we design spaces that are as exceptional as you are.
                                </p>

                                <NavLink to='/blog' className='featured-blog-post__link'>
                                    Read Post
                                </NavLink>
                            </div>
                        </article>

                        <div className='featured-blog-post__image-wrap'>
                            <img
                                src={featuredImage}
                                alt='Featured luxury interior blog post preview'
                                className='featured-blog-post__image'
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedBlogPost;