import useServices from "@hooks/useServices";
import Section from '@components/UI/Section';
import ServicesCard from "@components/UI/ServicesCard";
import { Loading2 } from "@components/elements/Loading2";

const ServicesSection = () => {
    const { services, loading } = useServices();

    if (loading) {
        return <Loading2 />;
    }

    return (
        <Section className='py-16 services-page'>
            <div className="w-full relative flex justify-center items-center gap-x-6 flex-wrap">
                {services.map((service) => (
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