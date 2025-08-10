// @ts-nocheck
import { PageLayout } from "../layouts/PageLayout";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/UI/PageHeader";
import ProjectsTabs from "../components/projects/Tabs/ProjectsTabs";
import { useLanguage } from "../store/LanguageContext";
import { Loading2 } from "../components/elements/Loading2";
import useProjects from "../hooks/useProjects";

const Projects = () => {
    const { t } = useLanguage();
    const { projects, loading } = useProjects();
    // const location = useLocation();

    // Check if we're on a child route (single project page)
    // const isProjectPage = location.pathname.includes('/projects/') &&
    //     location.pathname.includes('/projects');
    // console.log(projects)

    return (
        <PageLayout>
            <MetaTags
                titleKey={t("head.projects.title")}
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
            {loading && !projects.length
                ? (<Loading2 />)
                : (<ProjectsTabs />)
            }
        </PageLayout>
    );
};

export default Projects;
