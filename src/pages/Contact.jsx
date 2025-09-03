import { PageLayout } from "../layouts/PageLayout";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/UI/PageHeader";
import { useLanguage } from "../store/LanguageContext";
import ContactPage from "@components/contact/ContactPage";

const Contact = () => {
    const { t } = useLanguage();

    return (
        <PageLayout>
            <MetaTags
                titleKey={t("head.contact.title")}
                descriptionKey="head.contact.meta.description"
            />

            {/* Page Header Section */}
            <PageHeader
                title={t('contact.title')}
                breadcrumbs={[
                    { label: t('navbar.home'), href: "/" },
                    { label: t('contact.title') }
                ]}
            />
            <ContactPage />
        </PageLayout>
    );
};

export default Contact;
