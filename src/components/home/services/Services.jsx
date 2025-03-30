// @ts-nocheck
import { Link } from "react-router-dom";
import Section from "../../UI/Section";
import SectionShape from "../../UI/SectionShape";
import '../../../styles/services.css'
import { ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const servicesData = [
        {
            title: "إدارة المخاطر",
            description: "تخفيف مشاكل مكان العمل قبل تفاقمها، مشاركة الوقت البشري.",
            url: "#",
            image: "assets/images/services/service-image-4.jpg",
        },
        {
            title: "استشارات الموارد البشرية",
            description: "حلول الموارد البشرية المهنية لنمو أعمالك ورضا الموظفين.",
            url: "#",
            image: "assets/images/services/service-image-5.jpg",
        },
        {
            title: "برامج التدريب",
            description: "حلول تدريبية شاملة لتطوير قدرات القوى العاملة لديك.",
            url: "#",
            image: "assets/images/services/service-image-6.jpg",
        },
        {
            title: "Training Programs",
            description: "Comprehensive training solutions to develop your workforce capabilities.",
            url: "#",
            image: "assets/images/services/service-image-6.jpg",
        },
        {
            title: "Training Programs",
            description: "Comprehensive training solutions to develop your workforce capabilities.",
            url: "#",
            image: "assets/images/services/service-image-6.jpg",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        centerMode: false,
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows: false,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 6000,
        cssEase: "linear",
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
            className="pt-20 pb-30 bg-cover bg-center bg-no-repeat w-full h-full"
            style={{ backgroundImage: 'url("assets/images/service-home-bg.jpg")' }}
            titleStyle="!text-white"
            descriptionStyle="!text-white"
            subTitle="خدماتنا"
            sectionTitle="نحن نقدم خدمات مختلفة"
            description="هناك العديد من الاختلافات في مقاطع لوريم إيبسوم المتاحة، ولكن الأغلبية تعرضت للتغيير في شكل ما يمكن تصديقه"
        >
            <div className="w-full relative space-y-6">
                <Slider {...settings}>
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="card service-box w-92.5 px-3 bg-[#020101]/24 slick-slide-item"
                        >
                            <div className="card-body pb-1 px-2.5 items-center text-center">
                                <Link
                                    to={service.url}
                                    aria-label={service.title}
                                    className="card-title pb-6 !text-2xl !font-bold !font-spartan !text-white leading-7.5"
                                >
                                    {service.title}
                                </Link>
                                <p className="text-white">{service.description}</p>
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
                                to={service.url}
                                aria-label={service.title}
                                className="pt-7 flex items-center justify-center gap-1 rtl:flex-row-reverse capitalize !text-white text-center"
                            >
                                اقرأ المزيد
                                <ArrowRight size={20} strokeWidth={2} />
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