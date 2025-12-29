// @ts-nocheck
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from "../../UI/Section";
import { useLanguage } from "../../../store/LanguageContext";
import { useMemo } from "react";
import { settings as createSliderSettings } from "@utils/settings.jsx";

export const Brands = () => {
    const { direction } = useLanguage();
    const brands = [
        { name: 'Brand Logo', url: '/assets/images/brand/cecode-brand-1.png' },
        { name: 'Brand Logo', url: '/assets/images/brand/cecode-brand-2.png' },
        { name: 'Brand Logo', url: '/assets/images/brand/cecode-brand-3.png' },
        { name: 'Brand Logo', url: '/assets/images/brand/cecode-brand-4.png' },
        { name: 'Brand Logo', url: '/assets/images/brand/cecode-brand-5.png' },
    ];

    const settings = useMemo(() => createSliderSettings({
        direction,
        slidesToShow: 5,
        arrows: false,
        overrides: {
            autoplaySpeed: 3000,
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                    infinite: true,
                }
            },
        ]
    }), [direction]);

    return (
        <Section
            className="mt-12 relative bg-cover bg-center bg-no-repeat w-full h-43.5"
            style={{ backgroundImage: 'url("/assets/images/slider/slider-2.jpeg")' }}
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