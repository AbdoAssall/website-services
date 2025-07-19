// @ts-nocheck
import { useState, useEffect } from "react";
import { PageLayout } from "../layouts/PageLayout";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/projects/PageHeader";
import ProjectsTabs from "../components/projects/ProjectsTabs";
import { useLanguage } from "../contexts/LanguageContext";
import { Loading2 } from "../components/elements/Loading2";

const Projects = () => {
    const { t, language } = useLanguage();
    const [projectsData, setProjectsData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('api/projects.json');
                const data = await response.json();
                setProjectsData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, [])

    // Get translated projects based on current language
    const translatedProjects = () => {
        if (!projectsData?.projects) return [];

        return projectsData?.projects.map(project => ({
            ...project,
            title: project[language]?.name || project.ar.name,
            category: project[language]?.category || project.ar.category,
            description: project[language]?.description || project.ar.description,
            client: project[language]?.client || project.ar.client,
            image: project.img || project.ar.img,
            date: project.date || project.ar.date,
            link: project.url || project.ar.url,
        }));
    };
    const projects = translatedProjects();

    return (
        <PageLayout>
            <MetaTags
                titleKey="head.projects.title"
                descriptionKey="head.projects.meta.description"
            />

            {/* Page Header Section */}
            <PageHeader
                title={t('projects.projects')}
                breadcrumbs={[
                    { label: t('navbar.home'), href: "/" },
                    { label: t('projects.projects') }
                ]}
            />

            {/* Projects Tabs Section */}
            {loading
                ? (<Loading2 />)
                : (<ProjectsTabs projects={projects} />)
            }
        </PageLayout>
    );
};

export default Projects;
