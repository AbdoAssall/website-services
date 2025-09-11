import { Link } from "react-router-dom";
import { useMemo } from 'react';
import Section from "../../UI/Section";
import { CircleCheck, ArrowRight, CircleX } from 'lucide-react';
import "@styles/scss/plans.css"
import { useLanguage } from '../../../store/LanguageContext';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@utils/variants/animationVariants';

const Plans = () => {
    const { direction, isLTR, t } = useLanguage();

    // Use useMemo to make it reactive to language changes
    const plans = useMemo(() => {
        const plansData = [
            { currency: '$', price: 22 },
            { currency: '$', price: 59 },
            { currency: '$', price: 99 },
        ];

        return plansData.map((plan, index) => {
            const features = Array.from({ length: 5 }, (_, i) => (
                t(`plans.items.${index}.features.${i}`)
            ));

            return {
                ...plan,
                tag: t(`plans.items.${index}.tag`),
                name: t(`plans.items.${index}.name`),
                description: t(`plans.items.${index}.description`),
                features: features || [],
                recommended: index === 1, // Standard Pack is most recommended
                check: index === 0 ? 2 : index === 1 ? 4 : 5, // Basic: 2, Standard: 4, Advanced: 5
            };
        });
    }, [t]);

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
                className="mt-7.5 flex flex-col md:flex-row gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-12 justify-center items-center flex-wrap"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {plans.map((plan, planIndex) => (
                    <motion.article
                        key={`${plan.name}-${planIndex}`}
                        className={`pricing-plan type-one ${plan.recommended ? 'type-two' : ''} max-w-85`}
                        role="region"
                        aria-labelledby={`plan-${planIndex}-title`}
                        aria-describedby={`plan-${planIndex}-description`}
                        variants={itemVariants}
                    >
                        {/* SEO-optimized structured data would be added via JSON-LD script tag */}
                        <div
                            className="tag absolute -top-5 inset-x-0 z-1 mx-auto text-center text-base font-normal font-inter leading-10 rounded-md h-10 shadow-md"
                            role="banner"
                            aria-label={plan.recommended ? t('plans.accessibility.recommendedBadge') : plan.tag}
                        >
                            {plan.tag}
                        </div>
                        <div className={`pricing-plan-inner backdrop-blur-sm rounded-md shadow-lg border border-gray-200/60 flex flex-col items-center pt-12.5 pb-10 px-7.5 w-full max-w-85`}>
                            <header className="upper-plan mb-4.5 pb-3">
                                <h2
                                    id={`plan-${planIndex}-title`}
                                    className="text-2xl mb-1.5"
                                >
                                    {plan.name}
                                </h2>
                                <div
                                    className="price"
                                    role="text"
                                    aria-label={`${t('plans.accessibility.price')} ${plan.price} ${plan.currency} ${t('plans.accessibility.per')} ${t('plans.period')}`}
                                >
                                    <h6 className="block mb-1.5">
                                        <small aria-hidden="true">
                                            {plan.price}{plan.currency}
                                        </small>
                                        <span aria-hidden="true">
                                            {" /"}
                                        </span>
                                        <span className="text-[17px]" aria-hidden="true">
                                            {t('plans.period')}
                                        </span>
                                    </h6>
                                </div>
                                <p
                                    id={`plan-${planIndex}-description`}
                                    className="text-dark-one"
                                >
                                    {plan.description}
                                </p>
                            </header>

                            <section
                                dir={direction}
                                className="lower-plan"
                                aria-labelledby={`plan-${planIndex}-features`}
                            >
                                <h3
                                    id={`plan-${planIndex}-features`}
                                    className="sr-only"
                                >
                                    {t('plans.accessibility.features')}
                                </h3>
                                <ul
                                    className={`!m-0 ${isLTR ? '!pr-8 !pl-0' : '!pl-8'} w-full`}
                                    role="list"
                                >
                                    {plan.features.map((feature, index) => {
                                        const isIncluded = index < plan.check;
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center gap-3"
                                                role="listitem"
                                            >
                                                {isIncluded ? (
                                                    <CircleCheck
                                                        className="text-primary-one"
                                                        size={20}
                                                        aria-label={t('plans.accessibility.featureIncluded')}
                                                        role="img"
                                                    />
                                                ) : (
                                                    <CircleX
                                                        className="text-primary-one"
                                                        size={20}
                                                        aria-label={t('plans.accessibility.featureNotIncluded')}
                                                        role="img"
                                                    />
                                                )}
                                                <span className={!isIncluded ? 'line-through opacity-90' : ''}>
                                                    {feature}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </section>

                            <footer className="w-full mt-auto">
                                <Link
                                    to="#"
                                    className={`w-full !text-primary-two !bg-white shadow-lg border border-gray-50 rounded-full py-3 font-semibold text-[0.938rem] hover:bg-gray-50 focus:shadow transition-all flex justify-center items-center gap-1 ${isLTR ? 'flex-row-reverse' : ''}`}
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
                ))}
            </motion.div>
        </Section>
    );
}
export default Plans;