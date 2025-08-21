// @ts-nocheck
import PropTypes from 'prop-types';
import { useLanguage } from '@store/LanguageContext';
import { CheckCircle } from 'lucide-react';

export const FeatureItem = ({ feature }) => {
    const { isRTL } = useLanguage();

    return (
        <div className={`flex items-start gap-3 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="flex-shrink-0 mt-1">
                <CheckCircle
                    size={20}
                    className="text-primary-one"
                    aria-hidden="true"
                />
            </div>
            <p className="text-dark-one leading-relaxed">
                {feature}
            </p>
        </div>
    );
};

FeatureItem.propTypes = {
    feature: PropTypes.string.isRequired
};