import PropTypes from 'prop-types';
import { Briefcase, Play } from "lucide-react";
import PrimaryLink from "../../UI/PrimaryLink";
import '../../../styles/about.css'
import { useLanguage } from '../../../store/LanguageContext';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@utils/variants/animationVariants';

const About = ({ btn = true, isSubTitle = false }) => {
    const { direction, isRTL, t } = useLanguage();

    return (
        <motion.div
            dir="ltr"
            className="flex w-full flex-col md:flex-row"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible, only once
        >
            {/* ✨ 4. ANIMATE THE IMAGE SECTION AS ONE BLOCK */}
            <motion.div variants={itemVariants} className="relative md:-top-5 image-full rounded-md grid md:w-1/2 grow">
                <figure>
                    <img
                        src="assets/images/home-about-2-1.jpg"
                        alt="Shoes"
                        className="rounded-md min-h-9/10 object-cover"
                        loading="lazy"
                    />
                </figure>
                <div className="absolute -bottom-20 md:-bottom-8 left-5">
                    <figure>
                        <img
                            src="assets/images/home-1-about-2.jpg"
                            alt="Shoes"
                            className="rounded-md object-cover"
                            loading="lazy"
                        />
                    </figure>
                </div>
                <div className="absolute -bottom-8 md:bottom-5 right-5 z-2">
                    <div className="w-17.5 h-17.5 rounded-full mx-auto bg-primary-one">
                        <Play className="w-9 h-9 text-white mx-auto relative top-1/2 -translate-y-1/2" />
                    </div>
                    <span className="scale-in-center"></span>
                </div>
                <div className="absolute top-5 left-5 px-7 py-2 rounded-tr-[0.625rem] rounded-bl-[0.625rem] bg-primary-one text-white text-lg font-bold">
                    {t('about.experience')}
                </div>
            </motion.div>

            <div className="divider md:divider-horizontal"></div>

            {/* ✨ 5. ANIMATE THE TEXT CONTENT SECTION AND ITS CHILDREN */}
            <motion.div
                variants={containerVariants} // Use container variants again for nested staggering
                className={`relative grid md:w-1/2 grow ${isSubTitle ? 'mt-28' : 'mt-21'} md:mt-0 ${direction === 'rtl' ? 'text-right' : 'text-start'}`}
            >
                <motion.div variants={itemVariants} className={`flex gap-3 ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                    {isSubTitle
                        ? (
                            <div className={`small_text_sub uppercase ${isRTL ? '-right-1' : '-left-1'}`}>
                                {t('about.title')}
                            </div>
                        ) : (
                            <Briefcase className="text-primary-one w-5 h-5" />
                        )}
                    <h5 className="section-title">{t('about.title')}</h5>
                </motion.div>

                <motion.div dir={direction} variants={itemVariants} className={`${isSubTitle ? 'mt-4.5' : 'mt-1 md:mt-4.5'}`}>
                    <h2 className={`!text-4xl md:!text-5xl !font-semibold ${direction === 'rtl' ? 'md:!leading-13 !mt-2' : '!leading-12'} text-primary-two capitalize`}>
                        {t('about.mainTitle')}
                    </h2>
                    <p className="mt-4 text-dark-one">
                        {t('about.description')}
                    </p>
                </motion.div>

                {/* ✨ 6. WRAP THE TWO FEATURE BOXES TO ANIMATE THEM TOGETHER */}
                <motion.div variants={itemVariants} className={`flex flex-col sm:flex-row ${isRTL ? 'gap-8' : 'gap-6'} justify-start rtl:justify-end`}>
                    <div className="mt-3">
                        <div className="mb-3">
                            <span className="inline-block w-20 h-20 rounded-full bg-primary-three">
                                <img src="assets/images/icons/idea.png" className="w-15 h-15" alt="Idea icon" loading="lazy" />
                            </span>
                        </div>
                        <h2 className={`text-[1.375rem] !font-bold capitalize truncate ${isRTL ? 'md:!leading-11' : '!leading-8'}`}>
                            {t('about.creativeWork.title')}
                        </h2>
                        <p className="mt-3 text-dark-one">
                            {t('about.creativeWork.description')}
                        </p>
                    </div>
                    <div className="mt-3">
                        <div className="mb-3">
                            <span className="inline-block w-20 h-20 rounded-full bg-primary-three">
                                <img src="assets/images/icons/solution.png" className="w-15 h-15" alt="Idea icon" loading="lazy" />
                            </span>
                        </div>
                        <h2 className={`text-[1.375rem] !font-bold capitalize ${isRTL ? 'md:!leading-11' : '!leading-8'}`}>
                            {t('about.bestSolution.title')}
                        </h2>
                        <p className="mt-3 text-dark-one">
                            {t('about.bestSolution.description')}
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-6 sm:mt-12 flex gap-10 flex-col-reverse sm:flex-row-reverse sm:rtl:flex-row justify-end">
                    <div className="rtl:self-end">
                        <img src="assets/images/sign.png" className="w-34 lg:w-auto h-auto object-contain" alt="Sign" loading="lazy" />
                    </div>
                    {btn && (
                        <div>
                            <PrimaryLink to="/about-us" ariaLabel={t('about.readMore')}>{t('about.readMore')}</PrimaryLink>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
export default About;

About.propTypes = {
    btn: PropTypes.bool,
    isSubTitle: PropTypes.bool,
};