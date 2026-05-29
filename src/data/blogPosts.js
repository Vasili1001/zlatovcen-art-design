import featuredBackgroundImage from '../assets/images/blog/featured/featured-background.webp';
import featuredMainImage from '../assets/images/hero/PC/slide-2.webp';
import post1Image from '../assets/images/hero/phone/slide-2.webp';
import post2Image from '../assets/images/hero/phone/slide-5.webp';
import post3Image from '../assets/images/hero/phone/slide-3.webp';
import post4Image from '../assets/images/hero/phone/slide-4.webp';
import blogPostHeroImage1 from '../assets/images/hero/PC/slide-3.webp';
import blogPostHeroImage2 from '../assets/images/hero/PC/slide-4.webp';
import blogPostHeroImage3 from '../assets/images/hero/phone/slide-3.webp';
import blogPostHeroImage4 from '../assets/images/hero/PC/slide-1.webp';
import blogPostBackgroundImage from '../assets/images/blog/post/blog-post-background.webp';
import blogPostInlineImage from '../assets/images/hero/PC/slide-2.webp';

export const blogPosts = [
    {
        id: 'interior-design-price-chisinau-moldova',
        slug: 'interior-design-price-chisinau-moldova',
        previewImage: post1Image,
        featuredImage: post1Image,
        featuredBackgroundImage,
        heroImage: blogPostHeroImage1,
        backgroundImage: blogPostBackgroundImage,
        inlineImage: blogPostInlineImage,
        isFeatured: true,
    },
    {
        id: 'what-is-included-in-interior-design-project',
        slug: 'what-is-included-in-interior-design-project',
        previewImage: post2Image,
        featuredImage: post2Image,
        featuredBackgroundImage,
        heroImage: blogPostHeroImage2,
        backgroundImage: featuredBackgroundImage,
        inlineImage: featuredMainImage,
        isFeatured: false,
    },
    {
        id: 'renovation-without-designer-mistakes',
        slug: 'renovation-without-designer-mistakes',
        previewImage: post3Image,
        featuredImage: post3Image,
        featuredBackgroundImage: blogPostBackgroundImage,
        heroImage: blogPostHeroImage3,
        backgroundImage: blogPostBackgroundImage,
        inlineImage: featuredMainImage,
        isFeatured: false,
    },
    {
        id: 'how-to-choose-interior-designer-moldova',
        slug: 'how-to-choose-interior-designer-moldova',
        previewImage: post4Image,
        featuredImage: post4Image,
        featuredBackgroundImage,
        heroImage: blogPostHeroImage4,
        backgroundImage: featuredBackgroundImage,
        inlineImage: blogPostInlineImage,
        isFeatured: false,
    },
];