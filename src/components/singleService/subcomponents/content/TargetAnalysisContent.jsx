/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useLanguage } from '@store/LanguageContext';
import { Target } from 'lucide-react';

/**
 * @param {{ title: string; description: string; }} props
 */
export const TargetAnalysisContent = ({ title, description }) => {
    const { isRTL } = useLanguage();

    return (
        <div className="bg-white border border-border-dark-one rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-heading-dark">
                {title}
            </h3>
            <p className="text-dark-one leading-relaxed">
                {description}
            </p>
            {/* <button
                className={`
                inline-flex items-center gap-2 text-primary-one hover:text-primary-two 
                transition-colors duration-200 font-medium
                ${isRTL ? 'flex-row-reverse' : ''}
            `}
                aria-label="Read more about target market analysis"
            >
                <span>Read More</span>
                <Target size={16} />
            </button> */}
        </div>
    );
}

TargetAnalysisContent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};