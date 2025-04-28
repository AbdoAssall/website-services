// @ts-nocheck
/* eslint-disable react/prop-types */
import Section from "../../UI/Section";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "/src/styles/scss/testimonial.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote } from 'lucide-react';
import { useDirection } from '../../../contexts/DirectionContext';


const Testimonial = () => {
    const { direction } = useDirection();
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                type='button'
                aria-label="Right"
                onClick={onClick}
                className="absolute right-0 md:-right-4 top-1/2 z-30 flex h-12.5 w-12.5 -translate-y-1/2 items-center justify-center rounded-full bg-primary-three text-heading-dark backdrop-blur-sm transition-colors hover:bg-primary-one hover:text-white"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
        )
    }
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                type='button'
                aria-label="Left"
                onClick={onClick}
                className="absolute left-0 md:-left-4 top-1/2 z-30 flex h-12.5 w-12.5 -translate-y-1/2 items-center justify-center rounded-full bg-primary-three text-heading-dark backdrop-blur-sm transition-colors hover:bg-primary-one hover:text-white"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
        )
    }
    const settings = {
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        initialSlide: 0,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                }
            },
        ]
    };

    const testimonials = [
        {
            name: "ميا براون",
            position: "مدير تسويق في Stech",
            description: "لقد جلبت قيمة هائلة للشركة. لقد أنشأنا المزيد من العملاء المحتملين في آخر 45 يومًا أكثر من آخر يومين",
            image: "assets/images/clients/testi-1.png"
        },
        {
            name: "ميا براون",
            position: "مدير تسويق في Stech",
            description: "لقد جلبت قيمة هائلة للشركة. لقد أنشأنا المزيد من العملاء المحتملين في آخر 45 يومًا أكثر من آخر يومين",
            image: "assets/images/clients/testi-2.png"
        },
        {
            name: "ميا براون",
            position: "مدير تسويق في Stech",
            description: "لقد جلبت قيمة هائلة للشركة. لقد أنشأنا المزيد من العملاء المحتملين في آخر 45 يومًا أكثر من آخر يومين",
            image: "assets/images/clients/testi-3.png"
        },
        {
            name: "Mia Bron",
            position: "Maneger in Stech",
            description: "لقد جلبت قيمة هائلة للشركة. لقد أنشأنا المزيد من العملاء المحتملين في آخر 45 يومًا أكثر من آخر يومين",
            image: "assets/images/clients/testi-2.png"
        },
    ]

    return (
        <Section
            className="pt-10 pb-20 bg-white"
            subTitle="عملائنا"
            sectionTitle="كلمات من عملائنا"
            description="وهذا يشبه قول الانكماش من التعب والألم. هذه الحالات بسيطة للغاية ويسهل تمييزها."
        >
            <div className="testimonial w-full relative mt-4">
                <Slider {...settings}>
                    {testimonials.map((client, index) => (
                        <div dir={direction} key={index} className="testimonial-inner w-140 p-7.5 bg-gray-50/35 rounded-md mb-2.5 border border-gray-50">
                            <p className="description rtl:text-right">
                                {client.description}
                            </p>
                            <div className={`lower-content flex items-center justify-between`}>
                                <div className={`flex items-center relative`}>
                                    <div className="relative">
                                        <img
                                            className="object-cover object-center rounded-full w-20 !h-20 shadow-sm"
                                            src={client.image}
                                            alt={client.name}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="auhour-name mx-6 relative flex flex-col rtl:text-right">
                                        <h3>{client.name}</h3>
                                        <span>{client.position}</span>
                                        <div className="rating rating-xs gap-2">
                                            <div className="mask mask-star bg-primary-one" aria-label="1 star"></div>
                                            <div className="mask mask-star bg-primary-one" aria-label="2 star"></div>
                                            <div className="mask mask-star bg-primary-one" aria-label="3 star" aria-current="true"></div>
                                            <div className="mask mask-star bg-primary-one" aria-label="4 star"></div>
                                            <div className="mask mask-star bg-primary-one" aria-label="5 star"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="icon-quote w-15 h-15 content-center rounded-full text-2xl bg-white shadow-md">
                                    <Quote className="text-primary-one mx-auto" size={26} strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Section>
    );
}
export default Testimonial;