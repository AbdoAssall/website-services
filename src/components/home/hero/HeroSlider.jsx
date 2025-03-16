/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SecondaryLink from '../../UI/SecondaryLink';
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from '../../../utils/variants';


const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef(null);

    const slides = [
        {
            id: 1,
            bgImage: "../../../../public/assets/images/projects/project-1.jpg",
            subTitle: "Strategy & Planning",
            title: "The Fastest Way to Achive Success",
            description: "We provide innovative solutions for your company",
            buttonServ: "Our Service",
            buttonPro: "Projects",
        },
        {
            id: 2,
            bgImage: "../../../../public/assets/images/projects/project-2.jpg",
            subTitle: "Best Agency",
            title: "Digital Marketing",
            description: "Transform your online presence with our expertise",
            buttonServ: "Our Service",
            buttonPro: "Projects",
        },
        {
            id: 3,
            bgImage: "../../../../public/assets/images/projects/project-3.jpg",
            subTitle: "Expert Team",
            title: "Strategic Planning",
            description: "Custom strategies to achieve your business goals",
            buttonServ: "Our Service",
            buttonPro: "Projects",
        }
    ];

    // Animation variants
    const textVariants = {
        hiddenTop: { y: -50, opacity: 0 },
        hiddenLeft: { x: -50, opacity: 0 },
        hiddenRight: { x: 50, opacity: 0 },
        hiddenBottom: { y: 50, opacity: 0 },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { duration: 0.8 }
        },
        exit: { opacity: 0, transition: { duration: 0.5 } }
    };

    // handl autoplay
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % slides.length);
            }, 7000)
        }
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current)
        }
    }, [isAutoPlaying, slides.length]);

    // Navigation functions
    const goToSlide = (index) => {
        setCurrentSlide(index);
        // Reset autoplay timer on manual navigation
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % slides.length);
            }, 7000)
        }
    };

    const goToPrevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    };

    const goToNextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
    }

    // Pause autoplay on hover
    //   const handleMouseEnter = () => setIsAutoPlaying(false);
    //   const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <div className="relative h-screen w-full overflow-hidden">
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
                        <div className="absolute inset-0 bg-gradient-to-b from-primary-two/50 to-primary-one/80"></div>
                    </div>

                    {/* Slide Content */}
                    {index === currentSlide && (
                        <div className={`px-4 sm:px-9 pb-16 relative z-8 flex h-full ${index === 1 ? 'justify-center text-center sm:justify-start sm:rtl:text-right sm:ltr:text-left' : 'justify-center  text-center'} items-center px-4 text-white`}>
                            <div className="max-w-4xl">
                                <AnimatePresence mode="wait">
                                    <motion.h5
                                        key={`subtitle-${slide.id}`}
                                        initial="hiddenTop"
                                        animate="visible"
                                        exit="exit"
                                        variants={textVariants}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        className="!mb-4 md:!mb-10 text-xl sm:text-3xl font-bold tracking-wider !text-white"
                                    >
                                        {slide.subTitle}
                                    </motion.h5>
                                    <motion.h2
                                        key={`title-${slide.id}`}
                                        initial="hiddenLeft"
                                        animate="visible"
                                        exit="exit"
                                        variants={textVariants}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                        className="!mb-6 text-5xl font-extrabold md:text-[6.875rem] md:!leading-[90px] !text-white tracking-tight"
                                        style={{ textShadow: '3px 1px 3px #078586' }}
                                    >
                                        {slide.title}
                                    </motion.h2>

                                    <motion.p
                                        key={`desc-${slide.id}`}
                                        initial="hiddenRight"
                                        animate="visible"
                                        exit="exit"
                                        variants={textVariants}
                                        transition={{ duration: 0.8, delay: 0.9 }}
                                        className="!text-lg md:!text-xl"
                                    >
                                        {slide.description}
                                    </motion.p>
                                    <motion.div
                                        key={`buttons-${slide.id}`}
                                        className={`!mt-16 relativ flex flex-col items-center ${index === 1 ? 'justify-start' : 'justify-center'} space-y-7 sm:flex-row gap-4 sm:space-y-0`}
                                    >
                                        <motion.div
                                            variants={fadeIn("down", 0.3)}
                                            initial="hidden"
                                            whileInView={"show"}
                                            // viewport={{ once: false, amount: 0.8 }}
                                            animate="visible"
                                            exit="exit"
                                        >
                                            <SecondaryLink
                                                to="#projects"
                                                aria-label="Projects"
                                                className={`!bg-white hover:!bg-primary-one !text-primary-two hover:!text-white`}
                                            >
                                                {slide.buttonPro}
                                            </SecondaryLink>
                                        </motion.div>
                                        <motion.div
                                            variants={fadeIn("up", 0.5)}
                                            initial="hidden"
                                            whileInView={"show"}
                                            animate="visible"
                                            exit="exit"
                                            // viewport={{ once: false, amount: 0.8 }}
                                        >
                                            <SecondaryLink
                                                to="#services"
                                                aria-label="Our service"
                                                className={`${index === 1 ? '!bg-primary-one !text-white' : '!bg-primary-two !text-white'} hover:!bg-white`}
                                            >
                                                {slide.buttonServ}
                                            </SecondaryLink>
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
                aria-label="Left"
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 z-30 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                type='button'
                aria-label="Right"
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 z-30 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-17 left-0 z-30 flex w-full justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/70"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Wave SVG */}
            <div className="absolute bottom-0 left-0 right-0 z-20 w-full overflow-hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    className="w-full h-32"
                >
                    <path
                        d="M0,40 C220,120 380,0 640,60 C880,120 1120,20 1440,80 L1440,100 L0,100 Z"
                        fill="white"
                        fillOpacity="1"
                    />
                </svg>
            </div>
        </div>
    )
}
export default HeroSlider;