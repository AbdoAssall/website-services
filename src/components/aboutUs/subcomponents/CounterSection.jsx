import { useMemo } from 'react';
import { Lightbulb, Users, Globe } from 'lucide-react';
import Section from "@components/UI/Section";
import SectionShape from '@components/UI/SectionShape';
import { useLanguage } from '@store/LanguageContext';
import useCountOnScroll from '@hooks/useCountOnScroll';

const CounterSection = () => {
    const { t } = useLanguage();
    const counterData = useMemo(() => [
        { target: 4536, label: 'Projects Completed', icon: Lightbulb, suffix: '+' },
        { target: 29848, label: 'Happy Clients', icon: Users, suffix: '+' },
        { target: 44, label: 'Experienced Team', icon: Globe, suffix: 'K' }
    ], []);
    const [counterRef, counters] = useCountOnScroll(counterData);

    return (
        <Section className="counter bg-primary-three relative w-full pt-20 pb-11 overflow-hidden">
            {/* Background with wave pattern */}
            <SectionShape direction='top' />
            {/* Content */}
            <div ref={counterRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {counters.map((counter, index) => {
                    const Icon = counter.icon;
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Icon Container */}
                            <div className="mb-4 relative">
                                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                    <Icon
                                        className="w-10 h-10 text-primary-one/90 transition-colors duration-300 group-hover:text-primary-one"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                {/* Decorative circle */}
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                            </div>

                            {/* Counter */}
                            <div className="flex items-baseline mb-2">
                                <span className="text-4xl lg:text-5xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-primary-one">
                                    {counter.current.toLocaleString()}
                                </span>
                                <span className="text-3xl lg:text-4xl font-bold text-gray-800 ml-1 transition-colors duration-300 group-hover:text-primary-one">
                                    {counter.suffix}
                                </span>
                            </div>

                            {/* Label */}
                            <h3 className="text-lg lg:text-2xl !font-medium text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                                {t(`about.counters.${index}.label`)}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-sm lg:text-base text-dark-one max-w-xs">
                                {index === 0 && t(`about.counters.${index}.description`)}
                                {index === 1 && t(`about.counters.${index}.description`)}
                                {index === 2 && t(`about.counters.${index}.description`)}
                            </p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default CounterSection;