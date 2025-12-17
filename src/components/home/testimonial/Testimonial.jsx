// @ts-nocheck
import { useMemo } from "react";
import Section from "../../UI/Section";
import "@styles/scss/testimonial.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Quote } from 'lucide-react';
import { useLanguage } from '../../../store/LanguageContext';
import { motion } from 'framer-motion';
import { itemVariants } from '@utils/variants/animationVariants';
import { settings as createSliderSettings } from '@utils/settings.jsx';
import { NextArrow, PrevArrow } from '../../UI/SliderArrows';
import { StarRating } from "./StarRating";

const Testimonial = () => {
    const { t, direction } = useLanguage();
    const settings = useMemo(() => createSliderSettings({
        direction,
        t,
        slidesToShow: 2,
        arrows: true,
        NextArrow,
        PrevArrow,
    }), [t, direction]);

    const testimonials = useMemo(() => {
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
        return clientsData.map((client, index) => ({
            ...client,
            name: t(`testimonials.clients.${index}.name`),
            position: t(`testimonials.clients.${index}.position`),
            description: t(`testimonials.clients.${index}.description`),
        }));
    }, [t])

    return (
        <Section
            className="pt-10 pb-20 bg-white"
            subTitle={t('testimonials.subTitle')}
            sectionTitle={t('testimonials.sectionTitle')}
            description={t('testimonials.description')}
        >
            <motion.div
                className="testimonial w-full relative mt-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
            >
                {testimonials?.length > 0 ? (
                    <Slider {...settings} role="region" aria-label={t('testimonials.sectionTitle')} aria-hidden="false">
                        {testimonials.map((client) => (
                            <div dir={direction} key={client.id} className="testimonial-inner w-140 h-72 md:h-60 lg:h-56 p-7.5 bg-gray-50/35 rounded-md mb-2.5 border border-gray-50">
                                <blockquote className={`description leading-6 ${direction === 'rtl' ? 'text-right' : 'text-left'}`} cite="">
                                    {client.description}
                                </blockquote>
                                <div className={`lower-content pt-2 flex items-center justify-between`}>
                                    <div className={`w-full flex items-center relative`}>
                                        <div className="relative">
                                            {/* <img
                                                className="object-cover object-center rounded-full w-18 h-18 sm:w-20 sm:h-20 shadow-sm"
                                                src={client.image}
                                                alt={`${client.name} - ${client.position}`}
                                                loading="lazy"
                                                width="80"
                                                height="80"
                                                onError={(e) => {
                                                    e.target.src = 'assets/images/clients/testi-2.png'; // Fallback image
                                                }}
                                            /> */}
                                        </div>
                                        <div className={`auhour-name mx-6 relative flex flex-col ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                                            <h3 className="text-lg sm:text-xl">{client.name}</h3>
                                            <span className={`text-sm sm:text-base leading-6`}>{client.position}</span>
                                            <StarRating rating={client.rating} t={t} clientName={client.name} />
                                        </div>
                                    </div>
                                    <div aria-hidden="true" className="icon-quote w-13 h-13 sm:w-15 sm:h-15 content-center rounded-full text-2xl bg-white shadow-md">
                                        <Quote className="text-primary-one mx-auto w-7 h-7" strokeWidth={1.5} />
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
            </motion.div>
        </Section>
    );
}
export default Testimonial;