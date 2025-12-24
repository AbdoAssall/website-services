// @ts-nocheck
import { useMemo } from "react";
import { useLanguage } from "../../../store/LanguageContext";
import Section from "../../UI/Section";
import SectionShape from "../../UI/SectionShape";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import ServicesCard from "@components/UI/ServicesCard";
import useServices from "@hooks/useServices";
import { Loading2 as Spinner } from '../../elements/Loading2';
import { settings as createSliderSettings } from '@utils/settings.jsx';
import { motion } from 'framer-motion';
import { itemVariants } from '@utils/variants/animationVariants';

const Services = () => {
    const { t, direction } = useLanguage();
    const { services, loading } = useServices();
    const sliderSettings = useMemo(() => createSliderSettings({
        direction,
        slidesToShow: 3,
        dots: true,
    }), [direction]);
    const getSlide = document.querySelectorAll('.slick-slide.slick-cloned');
    const getSlide1 = document.querySelectorAll('.slick-slide');
    getSlide.forEach(slide => slide.ariaHidden = false);
    getSlide1.forEach(slide => slide.ariaHidden = false);

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
            <motion.div
                className="w-full relative"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
            >
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
            </motion.div>
            <SectionShape />
        </Section>
    );
}
export default Services;