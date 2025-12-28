// @ts-nocheck
import { Link } from "react-router-dom";
import { useLanguage } from '../../../store/LanguageContext';
import usePlans from "@hooks/plans/usePlans";
import "@styles/scss/plans.css"
import Section from "../../UI/Section";
import { CircleCheck, ArrowRight, CircleX } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@utils/variants/animationVariants';
import { Loading2 as Spinner } from '../../elements/Loading2';

const Plans = () => {
    const { direction, isLTR, t } = useLanguage();
    const { plans, loading } = usePlans();

    return (
        <Section
            id="plans"
            className="py-20 bg-primary-three"
            contentStyle={`${isLTR ? 'items-center md:items-start md:justify-start' : 'items-center md:items-start md:justify-end'} `}
            innerContentStyle={`mt-0.5 md:!mt-0 md:flex-row md:justify-between items-center ${isLTR ? '' : 'md:text-right'}`}
            descriptionStyle={`md:w-xl ${isLTR ? 'md:text-start' : 'md:text-right'}`}
            subTitle={t('plans.subtitle')}
            sectionTitle={t('plans.title')}
            description={t('plans.description')}
        >
            <motion.div
                className="mt-7.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-16 lg:gap-8 w-full max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                // whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
            >
                {loading ? (
                    <div className="col-span-full flex justify-center">
                        <Spinner />
                    </div>
                ) : (
                    plans.map((plan, planIndex) => (
                        <motion.article
                            key={`${plan.name}-${plan.id}`}
                            className={`relative flex flex-col h-full`}
                            role="region"
                            aria-labelledby={`plan-${planIndex}-title`}
                            aria-describedby={`plan-${planIndex}-description`}
                            variants={itemVariants}
                        >
                            {/* Recommended Badge */}
                            {plan.tag && (
                                <div
                                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 px-6 py-1.5 text-sm text-center text-nowrap font-medium text-white rounded-full shadow-lg ${plan.recommended
                                        ? 'bg-gradient-to-r from-primary-one to-primary-two'
                                        : 'bg-gray-700'
                                        }`}
                                    role="banner"
                                    aria-label={plan.recommended ? t('plans.accessibility.recommendedBadge') : plan.tag}
                                >
                                    {plan.tag}
                                </div>
                            )}

                            {/* Card Container */}
                            <div className={`
                                h-full flex flex-col
                                ${plan.recommended
                                    ? 'bg-gradient-to-b from-gray-900 to-gray-800 border-2 border-primary-one/30 shadow-2xl'
                                    : 'bg-white border border-gray-200 shadow-lg'
                                }
                                rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105
                            `}>

                                {/* Header Section - Fixed Height */}
                                <header className={`
                                    px-6 pt-10 pb-3 text-center border-b
                                    ${plan.recommended
                                        ? 'border-gray-700 text-white'
                                        : 'border-gray-200 text-primary-two'
                                    }
                                `}>
                                    <h2
                                        id={`plan-${planIndex}-title`}
                                        className={`
                                            !text-2xl !font-bold !mb-2
                                            ${plan.recommended
                                                ? '!text-gray-300'
                                                : '!text-primary-two'
                                            }
                                            `}>
                                        {plan.name}
                                    </h2>

                                    <div className="mb-4">
                                        <span className={`
                                            text-5xl font-bold
                                            ${plan.recommended ? 'text-primary-one' : 'text-primary-one'}
                                            `}>
                                            ${plan.price}
                                        </span>
                                        {/* <span className={`text-base ${plan.recommended ? 'text-gray-300' : 'text-primary-two'}`}>
                                            /{t('plans.period')}
                                        </span> */}
                                    </div>

                                    <p
                                        id={`plan-${planIndex}-description`}
                                        className={`
                                            !text-sm !h-12 flex items-center justify-center !font-medium
                                            ${plan.recommended ? 'text-gray-100' : 'text-dark-one'}
                                        `}
                                    >
                                        {plan.description}
                                    </p>
                                </header>

                                {/* Features Section - Fixed Height with Scroll if Needed */}
                                <section
                                    dir={direction}
                                    className="flex-1 px-6 py-6 overflow-y-auto"
                                    aria-labelledby={`plan-${planIndex}-features`}
                                    style={{ minHeight: '280px', maxHeight: '280px' }}
                                >
                                    <h3
                                        id={`plan-${planIndex}-features`}
                                        className="sr-only"
                                    >
                                        {t('plans.accessibility.features')}
                                    </h3>

                                    <ul className="space-y-3" role="list">
                                        {plan.features.map((feature, index) => {
                                            const isIncluded = index < plan.check;
                                            return (
                                                <li
                                                    key={index}
                                                    className={`
                                                        flex items-start gap-3 !font-medium
                                                    `}
                                                    role="listitem"
                                                >
                                                    <span className="mt-0.5 flex-shrink-0">
                                                        {isIncluded ? (
                                                            <CircleCheck
                                                                className={`${plan.recommended ? 'text-green-400' : 'text-green-600'}`}
                                                                size={18}
                                                                aria-label={t('plans.accessibility.featureIncluded')}
                                                                role="img"
                                                            />
                                                        ) : (
                                                            <CircleX
                                                                className={`${plan.recommended ? 'text-gray-500' : 'text-gray-400'}`}
                                                                size={18}
                                                                aria-label={t('plans.accessibility.featureNotIncluded')}
                                                                role="img"
                                                            />
                                                        )}
                                                    </span>
                                                    <span className={`
                                                        text-sm leading-relaxed
                                                        ${plan.recommended
                                                            ? (isIncluded ? 'text-gray-100' : 'text-gray-400')
                                                            : (isIncluded ? 'text-dark-one' : 'text-gray-600')
                                                        }
                                                    `}>
                                                        {feature}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </section>

                                <footer className={`
                                    px-6 py-6 mt-auto border-t
                                    ${plan.recommended ? 'border-gray-700' : 'border-gray-200'}
                                `}>
                                    <Link
                                        to={`/payment/${plan.id}`}
                                        className={`
                                            w-full py-3 px-4 rounded-lg font-semibold text-sm
                                            transition-all duration-300 transform hover:scale-105
                                            flex justify-center items-center gap-2
                                            ${isLTR ? 'flex-row-reverse' : ''}
                                            ${plan.recommended
                                                ? '!bg-gradient-to-r !from-primary-one !to-primary-two !text-white hover:shadow-xl'
                                                : '!bg-gray-900 !text-white hover:!bg-gray-800'
                                            }
                                        `}
                                        // className={`w-full !text-primary-two !bg-white border-gray-50 shadow-lg border rounded-full py-3 font-semibold text-[0.938rem hover:!bg-gray-200 focus:shadow transition-all flex justify-center items-center gap-1 ${isLTR ? 'flex-row-reverse' : ''}`}
                                        aria-label={`${t('plans.accessibility.selectPlan')} ${plan.name}`}
                                        role="button"
                                    >
                                        <ArrowRight
                                            size={16}
                                            aria-hidden="true"
                                        />
                                        {t('plans.getStarted')}
                                    </Link>
                                </footer>
                            </div>
                        </motion.article>
                    ))
                )}
            </motion.div>
        </Section>
    );
}
export default Plans;