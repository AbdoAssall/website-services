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

const Services = () => {
    const { t, direction } = useLanguage();
    const { services, loading } = useServices();

    const settings = {
        dots: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows: false,
        initialSlide: 0,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 5000,
        cssEase: "linear",
        rtl: direction === 'rtl',
        ltr: direction === 'ltr',
        accessibility: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                }
            },
        ]
    };

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
                <Slider {...settings}>
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