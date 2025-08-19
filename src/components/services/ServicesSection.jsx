import { useLanguage } from "@store/LanguageContext";
import Section from '@components/UI/Section';
import ServicesCard from "@components/UI/ServicesCard";

const ServicesSection = () => {
    const { t } = useLanguage();

    const servicesStaticData = [
        {
            id: 1,
            url: "/services/risk-management",
            image: "assets/images/services/service-image-4.jpg",
            icon: "assets/images/icons/risk-management.png"
        },
        {
            id: 2,
            url: "/services/hr-consulting",
            image: "assets/images/services/service-image-5.jpg",
            icon: "assets/images/icons/hr-consulting.png"
        },
        {
            id: 3,
            url: "/services/training-programs",
            image: "assets/images/services/service-image-6.jpg",
            icon: "assets/images/icons/training.png"
        },
        {
            id: 4,
            url: "/services/strategic-planning",
            image: "assets/images/services/service-image-4.jpg",
            icon: "assets/images/icons/strategy.png"
        },
        {
            id: 5,
            url: "/services/financial-consulting",
            image: "assets/images/services/service-image-5.jpg",
            icon: "assets/images/icons/finance.png"
        },
        {
            id: 6,
            url: "/services/business-development",
            image: "assets/images/services/service-image-6.jpg",
            icon: "assets/images/icons/business-dev.png"
        }
    ];

    // Combine static data with translations
    const servicesData = servicesStaticData.map((service, index) => ({
        ...service,
        title: t(`services.items.${index}.title`),
        description: t(`services.items.${index}.description`),
    }));

    return (
        <Section className='py-16 services-page'>
            <div className="w-full relative flex justify-center items-center gap-x-6 flex-wrap">
                {servicesData.map((service) => (
                    <ServicesCard
                        key={service.id}
                        service={service}
                        className="w-full md:w-90 !mb-6 bg-gray-50 border border-gray-200"
                        titleColor="!text-primary-two"
                        textColor="!text-dark-one"
                        linkColor="!text-primary-one"
                    />
                ))}
            </div>
        </Section>
    );
}

export default ServicesSection;