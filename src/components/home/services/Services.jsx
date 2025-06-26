// @ts-nocheck
import { Link } from "react-router-dom";
import Section from "../../UI/Section";
import SectionShape from "../../UI/SectionShape";
import '../../../styles/services.css';
import { ArrowLeft, ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useLanguage } from "../../../contexts/LanguageContext";
// import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const { t, direction } = useLanguage();

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
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="card service-box w-92.5 px-3 bg-[#020101]/24 slick-slide-item"
                        >
                            <div className="card-body pb-1 px-2.5 items-center text-center">
                                <Link
                                    to={service.url || '#'}
                                    aria-label={service.title}
                                    className={`card-title pb-6 ${direction === 'rtl' ? 'text-xl' : '!text-2xl'} !font-bold !font-spartan !text-white leading-7.5`}
                                >
                                    {service.title}
                                </Link>
                                <p dir={direction} className="text-white">{service.description}</p>
                            </div>
                            <div className="icon-serv">
                                <img src="assets/images/icons/thumbs-up.png" alt="service icon" className="icon-thumbs" />
                            </div>
                            <div className="card-overlay-img">
                                <figure>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="relative rounded-[0.625rem]"
                                        loading="lazy"
                                        width="500"
                                        height="500"
                                        srcSet={`${service.image} 500w, ${service.image} 300w, ${service.image} 100w, ${service.image} 150w`}
                                        sizes="(max-width: 500px) 100vw, 500px"
                                    />
                                </figure>
                            </div>
                            <Link
                                to={service.url || '#'}
                                aria-label={service.title}
                                className={`pt-7 flex items-center justify-center gap-1 ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row-reverse'} capitalize !text-white text-center`}
                            >
                                {t('services.readMore')}
                                {direction === 'rtl' ? (
                                    <ArrowLeft size={18} strokeWidth={2} />
                                ) : (
                                    <ArrowRight size={18} strokeWidth={2} />
                                )}
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
            <SectionShape />
        </Section>
    );
}
export default Services;