import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../ui/Container/Container.jsx';
import './latestPosts.scss';

import post1 from '../../../assets/images/blog/posts/post1.jpg';
import post2 from '../../../assets/images/blog/posts/post2.jpg';

const posts = [
    {
        id: 'art-in-luxury',
        title: 'The Role of Art in Luxury Interior Design.',
        image: post1,
    },
    {
        id: 'color-palettes',
        title: 'Color-Palettes for Interiors: The Guide',
        image: post2,
    },
    {
        id: 'small-touches',
        title: 'Small Touches That Make an Impact in Design.',
        image: post1,
    },
    {
        id: 'art-in-luxury-2',
        title: 'The Role of Art in Luxury Interior Design.',
        image: post2,
    },
];

const LatestPosts = () => {
    return (
        <section className='latest-posts' aria-labelledby='latest-posts-title'>
            <Container>
                <div className='latest-posts__header'>
                    <span className='latest-posts__eyebrow'>Design Journal</span>

                    <h2 className='latest-posts__title' id='latest-posts-title'>
                        Latest Posts
                    </h2>
                </div>

                <div className='latest-posts__grid'>
                    {posts.map((post) => (
                        <article key={post.id} className='latest-posts__card'>
                            <div className='latest-posts__image-wrap'>
                                <img src={post.image} alt={post.title} />
                            </div>

                            <div className='latest-posts__content'>
                                <h3 className='latest-posts__card-title'>
                                    {post.title}
                                </h3>

                                <NavLink
                                    to={`/blog/${post.id}`}
                                    className='latest-posts__link'
                                >
                                    Learn More
                                </NavLink>
                            </div>
                        </article>
                    ))}
                </div>

                <div className='latest-posts__divider' aria-hidden='true'>
                    <span className='latest-posts__divider-line'/>
                    <span className='latest-posts__logo'>Z</span>
                    <span className='latest-posts__divider-line'/>
                </div>
            </Container>
        </section>
    );
};

export default LatestPosts;