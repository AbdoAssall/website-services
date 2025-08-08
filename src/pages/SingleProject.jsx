import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@layouts/PageLayout";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/UI/PageHeader";
import { useLanguage } from "../store/LanguageContext";
import { Loading2 } from "../components/elements/Loading2";
import useProjects from "@hooks/useProjects";
import Project from "@components/singleProject/Project";

const SingleProject = () => {
    const { slug } = useParams();
    const { t } = useLanguage();
    const {
        getProjectBySlug,
        loading,
        setCurrentProject,
    } = useProjects();

    const project = getProjectBySlug(slug);

    useEffect(() => {
        if (project) {
            setCurrentProject(project);
        }
    }, [project, setCurrentProject]);

    return (
        <PageLayout>
            <MetaTags
                titleKey={`${project?.name || ''} | ${t('head.siteName')}`}
                descriptionKey="head.projects.meta.description"
            />

            {/* Page Header Section */}
            <PageHeader
                title={t('projects.projects')}
                breadcrumbs={[
                    { label: t('navbar.home'), href: "/" },
                    { label: t('projects.projects'), href: "/projects" },
                    { label: project?.name || '' }
                ]}
            />

            {loading || !project
                ? (<Loading2 />)
                : (<Project project={project} />)
            }
        </PageLayout>
    );
};

export default SingleProject;
