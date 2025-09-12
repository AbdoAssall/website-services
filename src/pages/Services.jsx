import { PageLayout } from "../layouts/PageLayout";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/UI/PageHeader";
import ServicesSection from "../components/services/ServicesSection";
import { useLanguage } from "../store/LanguageContext";

const Services = () => {
    const { t } = useLanguage();

    return (
        <PageLayout>
            <MetaTags
                titleKey={t("head.services.title")}
                descriptionKey="head.services.meta.description"
            />

            {/* Page Header Section */}
            <PageHeader
                title={t('services.services')}
                breadcrumbs={[
                    { label: t('navbar.home'), href: "/" },
                    { label: t('services.services') }
                ]}
            />

            {/* Services Section */}
            <ServicesSection />
        </PageLayout>
    );
};

export default Services;
