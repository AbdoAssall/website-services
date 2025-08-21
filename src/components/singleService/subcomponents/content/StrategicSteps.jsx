// @ts-nocheck
import { useLanguage } from '@store/LanguageContext';
import { FeatureItem } from './FeatureItem';
import PropTypes from 'prop-types';

export const StrategicSteps = ({ steps }) => {
    const { t } = useLanguage();

    return (
        <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-heading-dark">
                Strategic Planning Process
                {/* {t('services.features')} */}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <img
                    src={'/assets/images/services/service-image-5.jpg'}
                    alt="Service illustration"
                    className="rounded-[0.625rem] !w-full !h-73 bg-fixed"
                    loading="lazy"
                />
                <div className="md:mt-2">
                    {steps.map((step, index) => (
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
    steps: PropTypes.arrayOf(PropTypes.string).isRequired
};
