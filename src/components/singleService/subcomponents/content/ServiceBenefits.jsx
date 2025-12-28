// @ts-nocheck
import { useLanguage } from '@store/LanguageContext';
import PropTypes from 'prop-types';
import { BenefitCard } from './BenefitCard';
import { StrategicSteps } from './StrategicSteps';

export const ServiceBenefits = ({ service }) => {
    const { isRTL } = useLanguage();

    // const benefits = [
    //     {
    //         id: 'background-checks',
    //         title: 'Background Checks',
    //         description: 'These cases are perfectly simple and easy to distinguish. In a free hour when our power.',
    //         icon: 'https://storge.scopehub.net/images/icons/true.png'
    //         // icon: CheckCircle
    //     },
    //     {
    //         id: 'position-description',
    //         title: 'Position Description',
    //         description: 'Trouble that are bound to ensue and equal blame belongs those who fail in their duty.',
    //         icon: 'https://storge.scopehub.net/images/icons/true.png'
    //         // icon: Target
    //     }
    // ];

    return (
        <div className="space-y-6">
            <h2 className={`pb-4 text-[2.375rem] font-bold text-heading-dark ${isRTL ? '!leading-14' : 'md:!leading-12'}`}>
                {service.content.title}
            </h2>

            <p className="text-dark-one leading-relaxed text-base font-normal">
                {service.content.fullDescription}
            </p>

            {/* Benefits Grid */}
            {service.benefits && (
                <div className="grid lg:grid-cols-2 gap-6 mt-8">
                    {service.benefits.map((benefit, index) => {
                        return (
                            <BenefitCard
                                key={index}
                                title={benefit.title}
                                description={benefit.description}
                                isRTL={isRTL}
                            />
                        );
                    })}
                </div>
            )}

            {/* Strategic Planning Steps */}
            {service.steps && (
                < StrategicSteps service={service || []} />
            )}
        </div>
    );
};

ServiceBenefits.propTypes = {
    service: PropTypes.shape({
        content: PropTypes.shape({
            title: PropTypes.string.isRequired,
            fullDescription: PropTypes.string.isRequired
        }).isRequired,
        benefits: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired
            })
        ),
        highlights: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })
        ),
        steps: PropTypes.arrayOf(PropTypes.any)
    }).isRequired
};