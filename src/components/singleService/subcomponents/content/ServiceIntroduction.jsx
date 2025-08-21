import PropTypes from 'prop-types';
import { useLanguage } from '@store/LanguageContext';

/**
 * ServiceContent Component - Main content area for service details
 * @param {Object} props - Component props
 * @param {String} props.title - Service title
 * @param {String} props.description - Service description
 * @returns {JSX.Element} Service content component
 */

export const ServiceIntroduction = ({ title, description }) => {
    const { isRTL } = useLanguage();

    return (
        <div className="space-y-4">
            <h1 className={`text-3xl md:text-4xl font-bold text-heading-dark ${isRTL ? 'font-arabic' : ''}`}>
                {title}
            </h1>
            <p className="text-lg text-dark-one leading-relaxed">
                {description}
            </p>
        </div>
    );
}

ServiceIntroduction.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
