import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import ProjectOverview from '../../components/sections/ProjectOverview/ProjectOverview.jsx';
import ProjectEditorialGallery from '../../components/sections/ProjectEditorialGallery/ProjectEditorialGallery.jsx';
import ProjectPager from '../../components/sections/ProjectPager/ProjectPager.jsx';
import { portfolioProjects } from '../../data/portfolioProjects.js';
import './portfolioDetailPage.scss';

const PortfolioDetailPage = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    const currentIndex = portfolioProjects.findIndex((project) => project.id === id);
    const project = portfolioProjects[currentIndex];

    if (!project) {
        return <Navigate to='/portfolio' replace />;
    }

    const previousProject = currentIndex > 0 ? portfolioProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < portfolioProjects.length - 1 ? portfolioProjects[currentIndex + 1] : null;

    const heroEyebrow =
        project.heroEyebrow ||
        project.serviceType ||
        project.category ||
        t('portfolio.detailHero.defaultEyebrow');

    return (
        <div className='portfolio-detail-page'>
            <PageHero
                image={project.heroImage || project.coverImage}
                imageAlt={project.heroAlt || project.coverAlt || project.title}
                eyebrow={heroEyebrow}
                title={project.title}
                contentWidth='wide'
            />

            <FeatureBar />

            <ProjectOverview
                title={project.title}
                shortDescription={project.shortDescription}
                serviceType={project.serviceType || project.category}
                features={project.features || []}
                thumbImage={project.thumbImage || project.coverImage}
            />

            <ProjectEditorialGallery images={project.galleryImages || []} />

            <ProjectPager
                previousProject={previousProject}
                nextProject={nextProject}
            />
        </div>
    );
};

export default PortfolioDetailPage;