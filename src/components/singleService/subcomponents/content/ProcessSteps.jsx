// @ts-nocheck
import PropTypes from 'prop-types';
import { useLanguage } from '@store/LanguageContext';
import { FeatureItem } from './FeatureItem';

export const ProcessSteps = ({ process, features }) => {
    const { t } = useLanguage();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-heading-dark">
                {t('services.process')}
            </h2>

            {process && (
                <p className="text-dark-one leading-relaxed mb-6">
                    {process}
                </p>
            )}

            {features && features.length > 0 && (
                <div className="grid gap-4">
                    <h3 className="text-xl font-semibold text-heading-dark">
                        {t('services.features')}
                    </h3>
                    <div className="grid gap-3">
                        {features.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                feature={feature}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
ProcessSteps.propTypes = {
    process: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
};
