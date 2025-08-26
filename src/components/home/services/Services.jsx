// @ts-nocheck
import Section from "../../UI/Section";
import SectionShape from "../../UI/SectionShape";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../../../store/LanguageContext";
import ServicesCard from "@components/UI/ServicesCard";
import useServices from "@hooks/useServices";
import { Loading2 as Spinner } from '../../elements/Loading2';
import { settings } from "@utils/settings";

const Services = () => {
    const { t, direction } = useLanguage();
    const { services, loading } = useServices();
    const sliderSettings = settings(direction);

    return (
        <Section
            id="services"
            className="pt-20 pb-30 bg-cover bg-center bg-no-repeat w-full h-full"
            style={{ backgroundImage: 'url("assets/images/service-home-bg.jpg")' }}
            titleStyle="!text-white"
            descriptionStyle="!text-white"
            innerContentStyle="md:w-2xl"
            subTitle={t('services.title')}
            sectionTitle={t('services.mainTitle')}
            description={t('services.description')}
        >
            <div className="w-full relative">
                <Slider {...sliderSettings}>
                    {loading
                        ? (<Spinner />)
                        : (
                            services.map((service) => (
                                <ServicesCard
                                    key={service.id}
                                    service={service}
                                    className="slick-slide-item"
                                    titleColor="!text-white"
                                    textColor="!text-white"
                                    linkColor="!text-white"
                                />
                            ))
                        )}
                </Slider>
            </div>
            <SectionShape />
        </Section>
    );
}
export default Services;