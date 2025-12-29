// @ts-nocheck
import { useState, useMemo } from 'react';
import { ArrowRight, ArrowUp, ArrowLeft, Briefcase } from 'lucide-react';
import SectionShape2 from "../../UI/SectionShape2";
import { useLanguage } from '../../../store/LanguageContext';
import "@styles/scss/questions.css"
import { motion } from 'framer-motion';
import { itemVariantsLeft, itemVariantsRight } from '@utils/variants/animationVariants';

const Questions = () => {
    const { t, direction, isRTL } = useLanguage();
    const [activeQuestion, setActiveQuestion] = useState(0);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const questions = useMemo(() => {
        return Array.from({ length: 5 }, (_, i) => ({
            question: t(`faq.items.${i}.question`),
            answer: t(`faq.items.${i}.answer`)
        }));
    }, [t]);

    return (
        <section
            id='faq'
            className="relative bg-cover bg-no-repeat bg-center w-full h-full bg-primary-two"
            style={{ backgroundImage: 'url("/assets/images/footer-bg-two.webp")' }}
        >
            <div dir={direction} id="faq" className="flex flex-col md:flex-row mx-auto relative">
                {/* Right side with content */}
                <motion.div
                    className="md:w-1/2"
                    variants={isRTL ? itemVariantsRight : itemVariantsLeft} // Select variant based on direction
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className={`py-27 px-4 sm:px-25 relative w-full flex flex-col content-start text-start`}>
                        <div className="mb-5 w-full">
                            <div className="flex gap-3 items-center justify-start">
                                <Briefcase className="text-primary-one w-5 h-5" />
                                <h3 className="section-title">{t('faq.title')}</h3>
                            </div>
                            <div className="mt-1 md:mt-4">
                                <h2 className={`text-3xl md:text-[2.75rem] font-bold ${isRTL ? '!leading-12.5' : '!leading-10 capitalize'} !text-white`}>
                                    {t('faq.mainTitle')}
                                </h2>
                            </div>
                        </div>
                        <div className="faq-accordion w-full">
                            {questions.map((item, i) => (
                                <div
                                    key={i}
                                    className={`faq-item mb-2 transition-all duration-600`}
                                >
                                    <div
                                        className={`question-header ${activeQuestion === i ? '!bg-primary-one !border-primary-one' : ''}`}
                                        onClick={() => activeQuestion !== i ? toggleQuestion(i) : null}
                                    >
                                        <div className="question-title">
                                            <span className="faq-number">
                                                {i + 1}
                                            </span>
                                            <span className={`inline-block ${isRTL ? 'text-lg' : ''}`}>{item.question}</span>

                                            <span className='faq-icon'>
                                                {activeQuestion === i ? (
                                                    <ArrowUp className="w-5 h-5" />
                                                ) : (
                                                    isRTL ? (
                                                        <ArrowLeft className="w-5 h-5 hover:-rotate-90" />
                                                    ) : (
                                                        <ArrowRight className="w-5 h-5 hover:rotate-90" />
                                                    )
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className={`transition-all duration-600 overflow-hidden ${activeQuestion === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="answer">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                {/* Left side with image */}
                <div className="md:w-1/2">
                    <div className="faq-image relative z-1 w-full h-full flex flex-wrap content-start"></div>
                </div>
            </div>
            <SectionShape2 direction="top" />
            <SectionShape2 />
        </section>
    );
}
export default Questions;