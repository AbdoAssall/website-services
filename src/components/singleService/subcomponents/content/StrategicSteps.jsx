// @ts-nocheck
import { useLanguage } from '@store/LanguageContext';
import { FeatureItem } from './FeatureItem';
import PropTypes from 'prop-types';

export const StrategicSteps = ({ service }) => {
    const { t } = useLanguage();

    return (
        <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-heading-dark !mb-2">
                {t('services.strategic')}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <img
                    src={service?.images[0]}
                    alt="Service illustration"
                    className="rounded-[0.625rem] !w-full !h-73 bg-fixed"
                    loading="lazy"
                />
                <div className="md:mt-2">
                    {service.steps?.map((step, index) => (
                        <FeatureItem
                            key={index}
                            feature={step}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

StrategicSteps.propTypes = {
    service: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.string),
        steps: PropTypes.arrayOf(PropTypes.any)
    })
};