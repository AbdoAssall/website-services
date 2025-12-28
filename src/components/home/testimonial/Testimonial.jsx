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
import { Loading2 as Spinner } from '../../elements/Loading2';
import useReviews from "@hooks/useReviews";

const Testimonial = () => {
    const { t, direction } = useLanguage();
    const { reviews, loading } = useReviews();
    const settings = useMemo(() => createSliderSettings({
        direction,
        t,
        slidesToShow: 2,
        arrows: true,
        NextArrow,
        PrevArrow,
    }), [t, direction]);

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
                {loading
                    ? (
                        <div className="col-span-full flex justify-center">
                            <Spinner />
                        </div>
                    ) : (
                        <Slider {...settings} role="region" aria-label={t('testimonials.sectionTitle')} aria-hidden="false">
                            {reviews?.map((review) => (
                                <div dir={"rtl"} key={review.id} className="testimonial-inner w-140 h-72 md:h-60 lg:h-56 p-7.5 bg-gray-50/35 rounded-md mb-2.5 border border-gray-50">
                                    <blockquote className={`description leading-6 !font-medium  ${direction === 'rtl' ? 'text-right' : 'text-right'}`} cite="">
                                        {review.description}
                                    </blockquote>
                                    <div className={`lower-content pt-2 flex items-center justify-between`}>
                                        <div className={`w-full flex items-center relative`}>
                                            <div className="relative">
                                                {/* <img
                                                className="object-cover object-center rounded-full w-18 h-18 sm:w-20 sm:h-20 shadow-sm"
                                                src={review.img}
                                                alt={`${review.name} - ${review.position}`}
                                                loading="lazy"
                                                width="80"
                                                height="80"
                                                onError={(e) => {
                                                    e.target.src = 'https://storge.scopehub.net/images/clients/testi-2.png'; // Fallback image
                                                }}
                                            /> */}
                                            </div>
                                            <div className={`auhour-name mx-6 pr-2 md:pr-0 relative flex flex-col ${direction === 'rtl' ? 'text-right' : 'text-right'}`}>
                                                <h3 className="text-lg sm:text-xl">{review.name}</h3>
                                                <span className={`text-sm sm:text-base leading-6`}>{review.position}</span>
                                                <StarRating rating={review.rating} t={t} clientName={review.name} />
                                            </div>
                                        </div>
                                        <div aria-hidden="true" className="icon-quote w-13 h-13 sm:w-15 sm:h-15 content-center rounded-full text-2xl bg-white shadow-md">
                                            <Quote className="text-primary-one mx-auto w-7 h-7" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    )}

                {/* <div className="text-center py-8" role="status" aria-live="polite">
                        <p className="text-gray-600">No testimonials available at the moment.</p>
                    </div> */}
            </motion.div>
        </Section>
    );
}
export default Testimonial;