import { PageLayout } from "../layouts/PageLayout";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/UI/PageHeader";
import { useLanguage } from "../store/LanguageContext";

const About = () => {
    const { t } = useLanguage();

    return (
        <PageLayout>
            <MetaTags
                titleKey={t("head.about.title")}
                descriptionKey="head.about.meta.description"
            />

            {/* Page Header Section */}
            <PageHeader
                title={t('about.title')}
                breadcrumbs={[
                    { label: t('navbar.home'), href: "/" },
                    { label: t('about.title') }
                ]}
            />

            <h1>About us page</h1>
        </PageLayout>
    );
};

export default About;
