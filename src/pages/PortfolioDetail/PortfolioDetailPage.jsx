import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PageHero from '../../components/sections/PageHero/PageHero.jsx';
import FeatureBar from '../../components/sections/FeatureBar/FeatureBar.jsx';
import ProjectOverview from '../../components/sections/ProjectOverview/ProjectOverview.jsx';
import ProjectEditorialGallery from '../../components/sections/ProjectEditorialGallery/ProjectEditorialGallery.jsx';
import ProjectPager from '../../components/sections/ProjectPager/ProjectPager.jsx';
import { portfolioProjects } from '../../data/portfolioProjects.js';
import './portfolioDetailPage.scss';
import CTA from "../../components/sections/CTA/CTA.jsx";
import ProjectStatementBanner from "../../components/sections/ProjectStatementBanner/ProjectStatementBanner.jsx";

const PortfolioDetailPage = () => {
    const { id } = useParams();

    const currentIndex = portfolioProjects.findIndex((project) => project.id === id);
    const project = portfolioProjects[currentIndex];

    if (!project || !project.heroImage) {
        return <Navigate to='/portfolio' replace />;
    }

    const previousProject = currentIndex > 0 ? portfolioProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < portfolioProjects.length - 1 ? portfolioProjects[currentIndex + 1] : null;

    return (
        <div className='portfolio-detail-page'>
            <PageHero
                image={project.heroImage}
                imageAlt={project.heroAlt || project.title}
                title={project.title}
                contentWidth='wide'
            />

            <FeatureBar />

            <ProjectOverview
                title={project.title}
                shortDescription={project.shortDescription}
                serviceType={project.serviceType}
                features={project.features}
                thumbImage={project.thumbImage}
            />

            <ProjectEditorialGallery rows={project.galleryRows} />

            {project.statementBannerImage ? (
                <ProjectStatementBanner
                    image={project.statementBannerImage}
                    imageAlt={`${project.title} statement banner`}
                />
            ) : null}

            <ProjectPager
                previousProject={previousProject}
                nextProject={nextProject}
            />

        </div>
    );
};

export default PortfolioDetailPage;