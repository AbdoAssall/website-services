// @ts-nocheck
import { PageLayout } from "../layouts/PageLayout";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/UI/PageHeader";
import ProjectsTabs from "../components/projects/ProjectsTabs";
import { useLanguage } from "../store/LanguageContext";
import { Loading2 } from "../components/elements/Loading2";
import useProjects from "../hooks/useProjects";

const Projects = () => {
    const { t } = useLanguage();
    const { projects, loading } = useProjects();

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

            {/* Projects Tabs Section with Pagination */}
            {loading
                ? (<Loading2 />)
                : (
                    <ProjectsTabs
                        projects={projects}
                        itemsPerPage={6}
                    />
                )
            }
        </PageLayout>
    );
};

export default Projects;
