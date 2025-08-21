// @ts-nocheck
import { useLanguage } from '@store/LanguageContext';
import PropTypes from 'prop-types';
import { BenefitCard } from './BenefitCard';
import { StrategicSteps } from './StrategicSteps';

export const ServiceBenefits = ({ service }) => {
    const { isRTL } = useLanguage();

    const benefits = [
        {
            id: 'background-checks',
            title: 'Background Checks',
            description: 'These cases are perfectly simple and easy to distinguish. In a free hour when our power.',
            icon: '/assets/images/icons/true.png'
            // icon: CheckCircle
        },
        {
            id: 'position-description',
            title: 'Position Description',
            description: 'Trouble that are bound to ensue and equal blame belongs those who fail in their duty.',
            icon: '/assets/images/icons/true.png'
            // icon: Target
        }
    ];

    return (
        <div className="space-y-6">
            <h2 className={`pb-4 text-[2.375rem] font-bold text-heading-dark ${isRTL ? '!leading-14' : 'md:!leading-12'}`}>
                Providing world class service experiences!..
            </h2>

            <p className="text-dark-one leading-relaxed text-base font-normal">
                {service.fullDescription}
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
                {benefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                        <BenefitCard
                            key={benefit.id}
                            title={benefit.title}
                            description={benefit.description}
                            icon={Icon}
                            isRTL={isRTL}
                        />
                    );
                })}
            </div>

            {/* Strategic Planning Steps */}
            <StrategicSteps steps={service.steps || []} />
        </div>
    );
};

ServiceBenefits.propTypes = {
    service: PropTypes.shape({
        fullDescription: PropTypes.string.isRequired,
        steps: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
};
