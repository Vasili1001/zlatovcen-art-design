import { portfolioProjectsGenerated } from './portfolioProjects.generated.js';
import { portfolioProjectMeta } from './portfolioProjectMeta.js';

export const portfolioProjects = portfolioProjectsGenerated.map((project, index) => {
    const meta = portfolioProjectMeta[project.id] || {};
    const galleryImages = project.galleryImages || [];

    return {
        ...project,
        ...meta,
        title: meta.title || project.title,
        category: meta.category || project.category,
        shortDescription: meta.shortDescription || '',
        serviceType: meta.serviceType || meta.category || project.category || '',
        features: Array.isArray(meta.features) ? meta.features : [],
        featured: Boolean(meta.featured ?? index === 0),
        coverImage: project.coverImage,
        heroImage: project.heroImage || project.coverImage,
        thumbImage: project.thumbImage || project.coverImage,
        statementBannerImage: meta.statementBannerImage || galleryImages[1]?.src || galleryImages[0]?.src || project.coverImage,
        galleryImages,
    };
});