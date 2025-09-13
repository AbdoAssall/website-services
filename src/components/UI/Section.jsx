// @ts-nocheck
import PropTypes from "prop-types";
import { Briefcase } from "lucide-react";
import '@styles/scss/section.css'
import PrimaryLink from "./PrimaryLink";
import { useLanguage } from '../../store/LanguageContext';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@utils/variants/animationVariants';

export default function Section({
    children,
    className = '',
    id = '',
    style = {},
    contentStyle = 'justify-center items-center text-center',
    titleStyle = '',
    descriptionStyle = '',
    innerContentStyle = '',
    subTitle = '',
    isSubTitle = false,
    sectionTitle = '',
    description = '',
    button = '',
    buttonLink = '#',
    btnStyle = '',
    ...props
}) {
    const { isRTL } = useLanguage();

    return (
        <section
            {...props}
            id={id}
            className={`relative py-12 !overflow-hidden ${className}`}
            style={style}
        >
            <div className="flex flex-col mx-auto !px-4 xl:!px-0 max-w-6xl !overflow-hidden">
                {contentStyle && (
                    <motion.div
                        className={`relative flex flex-col !overflow-hidden ${contentStyle}`}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* ✨ 1. ANIMATE THE SUBTITLE */}
                        {subTitle && (
                            <motion.div variants={itemVariants} className="flex gap-3 justify-start">
                                {isSubTitle
                                    ? (
                                        <div className={`small_text_sub capitalize !w-full ${isRTL ? '-right-1' : 'left-0'}`}>
                                            {subTitle}
                                        </div>
                                    ) : (
                                        <Briefcase className="text-primary-one w-5 h-5" />
                                    )}
                                <h5 className={`section-title`}>{subTitle}</h5>
                            </motion.div>
                        )}
                        {/* ✨ 2. ANIMATE THE MAIN HEADER BLOCK */}
                        <motion.div variants={itemVariants} className={`${isSubTitle ? 'mt-4.5' : 'mt-1 md:mt-4.5'} flex flex-col text-center w-full ${innerContentStyle}`}>
                            {sectionTitle && (
                                <h2 className={`text-3xl md:text-[3.13rem] font-bold ${isRTL ? 'md:!leading-13' : '!leading-10'} text-primary-two capitalize ${titleStyle}`}>
                                    {sectionTitle}
                                </h2>
                            )}
                            {description && (
                                <p className={`w-full mdw-2xl mt-4 text-dark-one ${descriptionStyle}`}>
                                    {description}
                                </p>
                            )}
                            {button && (
                                <div className={btnStyle}>
                                    <PrimaryLink to={buttonLink} ariaLabel={button}>{button}</PrimaryLink>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
                <div className="mt-3">
                    {children}
                </div>
            </div>
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    contentStyle: PropTypes.string,
    titleStyle: PropTypes.string,
    descriptionStyle: PropTypes.string,
    innerContentStyle: PropTypes.string,
    subTitle: PropTypes.string,
    isSubTitle: PropTypes.bool,
    sectionTitle: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
    buttonLink: PropTypes.string,
    btnStyle: PropTypes.string,
};