import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@layouts/PageLayout";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/UI/PageHeader";
import { useLanguage } from "../store/LanguageContext";
import { Loading2 } from "../components/elements/Loading2";
import useServices from "@hooks/useServices";
import ServiceDetails from "../components/singleService/ServiceDetails";

const SingleService = () => {
    const { slug } = useParams();
    const { t, language } = useLanguage();
    const { getServiceBySlug, loading, setCurrentService, services } = useServices();

    const service = getServiceBySlug(slug);

    useEffect(() => {
        if (service) {
            setCurrentService(service);
        }
    }, [service, setCurrentService]);

    const serviceName = service ? service[language]?.name : '';

    return (
        <PageLayout>
            <MetaTags
                titleKey={`${serviceName} | ${t('head.siteName')}`}
                descriptionKey={service ? service[language]?.description : ''}
            />

            {/* Page Header Section */}
            <PageHeader
                title={serviceName || ''}
                breadcrumbs={[
                    { label: t('navbar.home'), href: "/" },
                    { label: t('services.services'), href: "/services" },
                    { label: serviceName || '' }
                ]}
            />

            {loading || !service
                ? (<Loading2 />)
                : (<ServiceDetails service={service} services={services} />)
            }
        </PageLayout>
    );
};

export default SingleService;
