// @ts-nocheck
import { useMemo, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SecondaryLink from '../../UI/SecondaryLink';
import { motion, AnimatePresence } from 'framer-motion'
import SectionShape from "../../UI/SectionShape";
import useSwipeNavigation from '../../../hooks/slider/useSwipeNavigation';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../store/LanguageContext';
import { textVariants, textVariantsLeft, textVariantsRight } from '@utils/variants/animationVariants';

const HeroSlider = () => {
    const { t } = useTranslation();
    const { direction } = useLanguage();
    const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 768px)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleMediaChange = (e) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener("change", handleMediaChange);

        return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }, []);

    const slides = useMemo(() => {
        const slidesDataDesktop = [
            { id: 1, bgImage: "https://storge.scopehub.net/images/slider/slider-1.jpeg" },
            { id: 2, bgImage: "https://storge.scopehub.net/images/slider/slider-2.jpeg" },
            { id: 3, bgImage: "https://storge.scopehub.net/images/slider/slider-3.jpeg" }
        ];

        const slidesDataMobile = [
            { id: 1, bgImage: "https://storge.scopehub.net/images/slider/slider-1-m.jpeg" },
            { id: 2, bgImage: "https://storge.scopehub.net/images/slider/slider-2-m.jpeg" },
            { id: 3, bgImage: "https://storge.scopehub.net/images/slider/slider-3-m.jpeg" }
        ];

        const currentSlidesData = isMobile ? slidesDataMobile : slidesDataDesktop;

        return currentSlidesData.map((slide, index) => ({
            ...slide,
            subTitle: t(`hero.slides.${index}.subTitle`),
            title: t(`hero.slides.${index}.title`),
            description: t(`hero.slides.${index}.description`),
            buttonServ: t(`hero.slides.${index}.buttonServ`),
            buttonPro: t(`hero.slides.${index}.buttonPro`),
        }));
    }, [t, isMobile]);

    const {
        currentIndex: currentSlide,
        goToNext: goToNextSlide,
        goToPrev: goToPrevSlide,
        goToIndex: goToSlide,
        handleMouseEnter,
        handleMouseLeave
    } = useSwipeNavigation({
        itemCount: slides.length,
        initialIndex: 0,
        swipeThreshold: 50,
        enableAutoplay: true,
        autoplayInterval: 7000,
        pauseOnHover: false,
    });

    return (
        <section
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="mb-6 relative h-screen w-full overflow-hidden"
        >
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-5" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slide.bgImage})` }}
                    >
                        <SectionShape />
                        {/* <div className="absolute inset-0 bg-gradient-to-b from-primary-two/50 to-primary-one/80"></div> */}
                    </div>

                    {/* Slide Content */}
                    {index === currentSlide && (
                        <div className={`!px-2 sm:!px-9 pb-16 -mt-6 sm:mt-0 relative z-8 flex h-full ${index === 1 ? 'justify-center text-center sm:justify-start sm:rtl:text-right sm:ltr:text-left' : 'justify-center text-center'} items-center text-white`}>
                            <div className="max-w-4xl">
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={`content-${slide.id}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <motion.h5
                                            variants={textVariants}
                                            initial="hidden"
                                            animate="show"
                                            transition={{ duration: 0.8, delay: 0.3 }}
                                            className="!mb-4 md:!mb-9 text-xl sm:text-2xl md:text-3xl font-bold tracking-wider !text-white"
                                        >
                                            {slide.subTitle}
                                        </motion.h5>
                                        <motion.h1
                                            variants={textVariantsLeft}
                                            initial="hidden"
                                            animate="show"
                                            transition={{ duration: 0.8, delay: 0.6 }}
                                            className={`!mb-4 sm:!mb-6 text-5xl font-extrabold md:text-[5.625rem] ${direction === 'rtl' ? 'md:!leading-25' : 'md:!leading-[5.625rem]'} !text-white tracking-tight`}
                                            style={{ textShadow: '3px 1px 3px #078586' }}
                                        >
                                            {slide.title}
                                        </motion.h1>

                                        <motion.p
                                            variants={textVariantsRight}
                                            initial="hidden"
                                            animate="show"
                                            transition={{ duration: 0.8, delay: 0.9 }}
                                            className="!text-md md:!text-lg max-w-xl mx-auto"
                                        >
                                            {slide.description}
                                        </motion.p>
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 1.2 }}
                                            className={`!mt-12 sm:!mt-16 relativ flex flex-col items-center ${index === 1 ? 'justify-start' : 'justify-center'} space-y-7 sm:flex-row gap-4 sm:space-y-0`}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 1 }}
                                            >
                                                <SecondaryLink
                                                    to="/projects"
                                                    aria-label={slide.buttonPro}
                                                    className={`!bg-white hover:!bg-primary-one active:!bg-primary-one !text-primary-two hover:!text-white active:!text-white`}
                                                >
                                                    {slide.buttonPro}
                                                </SecondaryLink>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 60 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 1.7 }}
                                            >
                                                <SecondaryLink
                                                    // onClick={(e) => e.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                                    to="/services"
                                                    aria-label={slide.buttonServ}
                                                    className={`${index === 1 ? '!bg-primary-one !text-white' : '!bg-primary-two !text-white'} hover:!bg-white active:!bg-white`}
                                                >
                                                    {slide.buttonServ}
                                                </SecondaryLink>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                type='button'
                aria-label={t('hero.navigation.left')}
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 z-30 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hoverbg-white/30 active:bg-white/30"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                type='button'
                aria-label={t('hero.navigation.right')}
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 z-30 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hoverbg-white/30 active:bg-white/30"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-24 sm:bottom-17 left-0 z-30 flex w-full justify-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-4 w-4 rounded-full transition-all duration-300 ${index === currentSlide
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/70"
                            }`}
                        aria-label={t('hero.navigation.goToSlide', { number: index + 1 })}
                    />
                ))}
            </div>
        </section>
    )
}
export default HeroSlider;