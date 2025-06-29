// @ts-nocheck
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from "../../UI/Section";
import { useLanguage } from "../../../contexts/LanguageContext";

export const Brands = () => {
    const { direction } = useLanguage();
    const brands = [
        { name: 'Brand Logo', url: 'assets/images/brand/cecode-brand-1.png' },
        { name: 'Brand Logo', url: 'assets/images/brand/cecode-brand-2.png' },
        { name: 'Brand Logo', url: 'assets/images/brand/cecode-brand-3.png' },
        { name: 'Brand Logo', url: 'assets/images/brand/cecode-brand-4.png' },
        { name: 'Brand Logo', url: 'assets/images/brand/cecode-brand-5.png' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        centerMode: false,
        // lazyLoad: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows: false,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 3000,
        cssEase: "linear",
        rtl: direction === 'rtl',
        ltr: direction === 'ltr',
        accessibility: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                }
            },
        ]
    };

    return (
        <Section
            className="mt-12 relative bg-cover bg-center bg-no-repeat w-full h-43.5"
            style={{ backgroundImage: 'url("assets/images/slider/slider-2.jpg")' }}
        >
            {/* <div className="flex items-center justify-center gap-9 sm:gap-20 w-full h-full">
            </div> */}
            <div className="test w-full h-full mx-auto pl30">
                <Slider {...settings}>
                    {brands.map((brand, index) => (
                        <div
                            key={`brand-${index}`}
                            className="w-full"
                        >
                            <img
                                src={brand.url}
                                alt={brand.name}
                                className="max-h-20 sm:w-40 mx-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </Section>
    );
}