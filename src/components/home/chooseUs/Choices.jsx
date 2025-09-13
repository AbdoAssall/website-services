import { useMemo } from "react";
import { useLanguage } from "../../../store/LanguageContext";
import Section from "../../UI/Section";
import '../../../styles/scss/choices.css'
import { motion } from 'framer-motion';
import { itemVariants } from '@utils/variants/animationVariants';

const Choices = () => {
    const { t } = useLanguage();

    const choices = useMemo(() => {
        const choicesData = [
            {
                image: "assets/images/choices/solution.png"
            },
            {
                image: "assets/images/choices/team-management.png"
            },
            {
                image: "assets/images/choices/email-marketing.png"
            },
            {
                image: "assets/images/choices/24-hours-support.png"
            },
        ];
        return choicesData.map((choice, index) => ({
            ...choice,
            title: t(`chooseUs.items.${index}.title`),
            description: t(`chooseUs.items.${index}.description`),
        }));
    }, [t])

    return (
        <Section
            className="pt-16 pb-30"
            innerContentStyle="md:w-2xl"
            subTitle={t('chooseUs.subtitle')}
            sectionTitle={t('chooseUs.title')}
            description={t('chooseUs.description')}
        >
            <motion.div
                className="choices-container flex justify-center items-center mt-18 md:flex-wrap flex-col md:flex-row gap-x-6 gap-y-24"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
            >
                {choices.map((choice, index) => (
                    <div key={index} className="relative grou">
                        <div
                            // className="choice-card card bg-white w-full md:w-65.5 h69 shadow-md md:shadow-lg hover:bg-primary-one hover:rounded-tr-none overflow-hidden border border-gray-100 transition-all duration-300"
                            className="choice-card bg-white w-full md:w-65.5 h69 shadow-md md:shadow-lg border border-gray-100 overflow-hidden hover:bg-primary-one hover:rounded-tr-none focus:bg-primary-one focus:rounded-tr-none active:bg-primary-one active:rounded-tr-none"
                            tabIndex={0}
                            role="button"
                            aria-label={`${choice.title} - ${choice.description}`}
                            onKeyDown={(e) => {
                                // Handle Enter and Space key presses
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    e.currentTarget.click();
                                }
                            }}
                        >
                            <div className="card-bod px-7.5 pb-3 pt-19 justify-end">
                                <h2 className="choice-title card-title text-2xl text-primary-two font-bold font-spartan group-hover:!text-white transition-colors duration-500">
                                    {choice.title}
                                </h2>
                                <p className="choice-description text-dark-one grow-0 group-hover:text-white transition-colors !duration-500">
                                    {choice.description}
                                </p>
                            </div>
                            <div className="choice-badge absolute -top-2 -right-2 z-2 w-[3.063rem] h-12 bg-primary-one rounded-full text-center leading-12 shadow-lg group-hover:bg-white text-white group-hover:text-dark-one font-medium transition-colors duration-500">
                                <span>0{index + 1}</span>
                            </div>
                        </div>
                        <div className="absolute -top-12.5 left-7.5 z-2 w-25 h-25 bg-white rounded-full border border-gray-100 shadow-xl content-center">
                            <img
                                src={choice.image}
                                alt={choice.title}
                                className="w-15 h-15 object-cover mx-auto"
                                role="presentation"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </Section>
    );
}
export default Choices;