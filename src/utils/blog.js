export const getFeaturedPost = (posts) => posts.find((post) => post.isFeatured) || posts[0];

export const getLatestPosts = (posts, featuredId) =>
    posts.filter((post) => post.id !== featuredId);

export const getPostBySlug = (posts, slug) =>
    posts.find((post) => post.slug === slug);

export const getAdjacentPosts = (posts, slug) => {
    const currentIndex = posts.findIndex((post) => post.slug === slug);

    if (currentIndex === -1) {
        return {
            previousPost: null,
            nextPost: null,
        };
    }

    return {
        previousPost: currentIndex > 0 ? posts[currentIndex - 1] : null,
        nextPost: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
    };
};