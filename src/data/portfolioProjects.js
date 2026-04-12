import projectImage1 from '../assets/images/portfolio/projects/project-1.jpg';
import projectImage2 from '../assets/images/portfolio/projects/project-2.jpg';
import projectImage3 from '../assets/images/portfolio/projects/project-3.jpg';
import projectImage4 from '../assets/images/portfolio/projects/project-4.jpg';
import projectImage5 from '../assets/images/portfolio/projects/project-5.jpg';

import detailHeroModernLivingRoom from '../assets/images/portfolio/detail/modern-living-room/hero.jpg';
import detailThumbModernLivingRoom from '../assets/images/portfolio/detail/modern-living-room/thumb.jpg';

import mlrGallery1 from '../assets/images/portfolio/detail/modern-living-room/gallery-1.jpg';
import mlrGallery2 from '../assets/images/portfolio/detail/modern-living-room/gallery-2.jpg';
import mlrGallery3 from '../assets/images/portfolio/detail/modern-living-room/gallery-3.jpg';
import mlrGallery4 from '../assets/images/portfolio/detail/modern-living-room/gallery-4.jpg';
import mlrGallery5 from '../assets/images/portfolio/detail/modern-living-room/gallery-5.jpg';
import mlrGallery6 from '../assets/images/portfolio/detail/modern-living-room/gallery-6.jpg';
import mlrGallery7 from '../assets/images/portfolio/detail/modern-living-room/gallery-7.jpg';
import mlrGallery8 from '../assets/images/portfolio/detail/modern-living-room/gallery-8.jpg';
import mlrGallery9 from '../assets/images/portfolio/detail/modern-living-room/gallery-9.jpg';
import mlrGallery10 from '../assets/images/portfolio/detail/modern-living-room/gallery-10.jpg';

export const portfolioProjects = [
    {
        id: 'contemporary-bachelor-pad',
        title: 'Contemporary Bachelor Pad',
        category: 'Residential Interior',
        coverImage: projectImage1,
        coverAlt: 'Contemporary bachelor apartment interior with warm wood finishes',
        featured: false,
    },
    {
        id: 'modern-living-room',
        title: 'Modern Living Room',
        category: 'Luxury Living Space',
        coverImage: projectImage2,
        coverAlt: 'Modern living room interior with tall sheer curtains and refined furniture',
        featured: false,
        heroImage: detailHeroModernLivingRoom,
        heroAlt: 'Modern living room luxury project hero image',
        thumbImage: detailThumbModernLivingRoom,
        statementBannerImage: mlrGallery4,
        shortDescription:
            'Minimalism is built on simplicity, clarity, and purposeful design. Every element serves a function, creating a clean, harmonious space. Neutral tones, natural materials, and lighting shape a calm, modern environment focused on comfort and balance.',
        serviceType: 'Residential Interior',
        features: ['Marble Counter', 'Wooden Flooring', 'Custom Lighting'],
        galleryRows: [
            {
                layout: 'two-large',
                images: [
                    { src: mlrGallery1, alt: 'Interior living room corner with warm sunlight' },
                    { src: mlrGallery2, alt: 'Minimal bright living room with tall curtains' },
                ],
            },
            {
                layout: 'three-small',
                images: [
                    { src: mlrGallery3, alt: 'Styled interior console area' },
                    { src: mlrGallery4, alt: 'Elegant living room seating composition' },
                    { src: mlrGallery5, alt: 'Refined kitchen styling detail' },
                ],
            },
            {
                layout: 'two-tall',
                images: [
                    { src: mlrGallery6, alt: 'Architectural staircase detail' },
                    { src: mlrGallery7, alt: 'Luxury double-height interior' },
                ],
            },
            {
                layout: 'three-small',
                images: [
                    { src: mlrGallery8, alt: 'Decorative interior styling detail' },
                    { src: mlrGallery9, alt: 'Modern elegant living room detail' },
                    { src: mlrGallery10, alt: 'Premium kitchen shelf styling' },
                ],
            },
        ],
    },
    {
        id: 'olive-wood-opulence',
        title: 'Olive Wood Opulence',
        category: 'Curated Interior Styling',
        coverImage: projectImage3,
        coverAlt: 'Elegant olive-toned living interior with premium wood furniture',
        featured: false,
    },
    {
        id: 'white-elegant-residential',
        title: 'White Elegant Residential',
        category: 'Classic Residential Design',
        coverImage: projectImage4,
        coverAlt: 'Bright elegant residential living room with soft neutral styling',
        featured: false,
    },
    {
        id: 'exquisite-marble-bathroom',
        title: 'Exquisite Marble Bathroom',
        category: 'Bathroom Design',
        coverImage: projectImage5,
        coverAlt: 'Luxury marble bathroom interior with soft ambient lighting',
        featured: true,
    },
];