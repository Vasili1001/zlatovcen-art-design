export const getLocalizedPostData = (t, postId) => {
    const localizedPost = t(`blog.posts.${postId}`, {
        returnObjects: true,
        defaultValue: {},
    });

    if (!localizedPost || typeof localizedPost !== 'object' || Array.isArray(localizedPost)) {
        return {};
    }

    return localizedPost;
};

export const localizeBlogPost = (post, t) => {
    if (!post) return null;

    const localizedPost = getLocalizedPostData(t, post.id);

    return {
        ...post,
        ...localizedPost,
    };
};

export const localizeBlogPosts = (posts, t) => {
    if (!Array.isArray(posts)) return [];

    return posts.map((post) => localizeBlogPost(post, t)).filter(Boolean);
};