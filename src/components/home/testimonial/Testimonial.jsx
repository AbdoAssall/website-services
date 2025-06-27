// @ts-nocheck
/* eslint-disable react/prop-types */
import { memo, useMemo } from "react";
import Section from "../../UI/Section";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "/src/styles/scss/testimonial.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Quote } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';


const Testimonial = () => {
    const { t, direction } = useLanguage();

    // Memoized Star Rating Component
    const StarRating = memo(({ rating, t, clientName }) => {
        const stars = Array.from({ length: 5 }, (_, index) => (
            <div
                key={index}
                className={`mask mask-star bg-primary-one`}
                aria-label={`${index + 1} star`}
                aria-current={index < rating ? "true" : "false"}
                role="img"
            />
        ));

        return (
            <div
                className="rating rating-xs gap-2"
                role="img"
                aria-label={`${rating} ${t('testimonials.rating.alt')}`}
                title={`${clientName} - ${rating}/5 ${t('testimonials.rating.star')}`}
            >
                {stars}
            </div>
        );
    });

    StarRating.displayName = 'StarRating';

    // Memoized Arrow Components
    const NextArrow = memo((props) => {
        const { onClick, t } = props;
        return (
            <button
                type="button"
                aria-label={t('testimonials.navigation.next')}
                onClick={onClick}
                className="absolute right-0 md:-right-4 top-1/2 z-30 flex h-12.5 w-12.5 -translate-y-1/2 items-center justify-center rounded-full bg-primary-three text-heading-dark backdrop-blur-sm transition-colors hover:bg-primary-one hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-one focus:ring-offset-2"
            >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
        );
    });

    NextArrow.displayName = 'NextArrow';

    const PrevArrow = memo((props) => {
        const { onClick, t } = props;
        return (
            <button
                type="button"
                aria-label={t('testimonials.navigation.previous')}
                onClick={onClick}
                className="absolute left-0 md:-left-4 top-1/2 z-30 flex h-12.5 w-12.5 -translate-y-1/2 items-center justify-center rounded-full bg-primary-three text-heading-dark backdrop-blur-sm transition-colors hover:bg-primary-one hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-one focus:ring-offset-2"
            >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
        );
    });

    PrevArrow.displayName = 'PrevArrow';

    // Memoized slider settings
    const settings = useMemo(() => ({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: false,
        nextArrow: <NextArrow t={t} />,
        prevArrow: <PrevArrow t={t} />,
        initialSlide: 0,
        rtl: direction === 'rtl',
        ltr: direction === 'ltr',
        autoplay: true,
        speed: 600,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        accessibility: true,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
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
                    initialSlide: 0,
                    infinite: true,
                }
            },
        ]
    }), [t, direction]);

    const clientsData = [
        {
            id: 1,
            image: "assets/images/clients/testi-1.png",
            rating: 5,
        },
        {
            id: 2,
            image: "assets/images/clients/testi-2.png",
            rating: 4,
        },
        {
            id: 3,
            image: "assets/images/clients/testi-3.png",
            rating: 3,
        },
        {
            id: 4,
            image: "assets/images/clients/testi-2.png",
            rating: 5,
        },
    ];

    // Map static data with translations
    const testimonials = clientsData.map((client, index) => ({
        ...client,
        name: t(`testimonials.clients.${index}.name`),
        position: t(`testimonials.clients.${index}.position`),
        description: t(`testimonials.clients.${index}.description`),
    }));

    return (
        <Section
            className="pt-10 pb-20 bg-white"
            subTitle={t('testimonials.subTitle')}
            sectionTitle={t('testimonials.sectionTitle')}
            description={t('testimonials.description')}
        >
            <div className="testimonial w-full relative mt-4">
                {testimonials?.length > 0 ? (
                    <Slider {...settings} role="region" aria-label={t('testimonials.sectionTitle')} aria-hidden="false">
                        {testimonials.map((client) => (
                            <div dir={direction} key={client.id} className="testimonial-inner w-140 p-7.5 bg-gray-50/35 rounded-md mb-2.5 border border-gray-50">
                                <blockquote className={`description leading-6 ${direction === 'rtl' ? 'text-right' : 'text-left'}`} cite="">
                                    {client.description}
                                </blockquote>
                                <div className={`lower-content flex items-center justify-between`}>
                                    <div className={`flex items-center relative`}>
                                        <div className="relative">
                                            <img
                                                className="object-cover object-center rounded-full w-18 h-18 sm:w-20 sm:h-20 shadow-sm"
                                                src={client.image}
                                                alt={`${client.name} - ${client.position}`}
                                                loading="lazy"
                                                width="80"
                                                height="80"
                                                onError={(e) => {
                                                    e.target.src = 'assets/images/clients/testi-2.png'; // Fallback image
                                                }}
                                            />
                                        </div>
                                        <div className={`auhour-name mx-6 relative flex flex-col ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                                            <h3>{client.name}</h3>
                                            <span className={`text-[0.938rem] sm:text-base leading-6`}>{client.position}</span>
                                            <StarRating rating={client.rating} t={t} clientName={client.name} />
                                            {/* <div className="rating rating-xs gap-2">
                                            <div className="mask mask-star bg-primary-one" aria-label="1 star"></div>
                                            <div className="mask mask-star bg-primary-one" aria-label="2 star"></div>
                                            <div className="mask mask-star bg-primary-one" aria-label="3 star" aria-current="true"></div>
                                            <div className="mask mask-star bg-primary-one" aria-label="4 star"></div>
                                            <div className="mask mask-star bg-primary-one" aria-label="5 star"></div>
                                        </div> */}
                                        </div>
                                    </div>
                                    <div aria-hidden="true" className="icon-quote w-13 h-13 sm:w-15 sm:h-15 content-center rounded-full text-2xl bg-white shadow-md">
                                        <Quote className="text-primary-one mx-auto w-7 h-7"  strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="text-center py-8" role="status" aria-live="polite">
                        <p className="text-gray-600">No testimonials available at the moment.</p>
                    </div>
                )}
            </div>
        </Section>
    );
}
export default Testimonial;