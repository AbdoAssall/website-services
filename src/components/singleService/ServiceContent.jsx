import PropTypes from 'prop-types';
import { useLanguage } from '@store/LanguageContext';
import { ConfidenceSection } from './subcomponents/content/ConfidenceSection';
import { ServiceBenefits } from './subcomponents/content/ServiceBenefits';
import { ProcessSteps } from './subcomponents/content/ProcessSteps';
import CreativeSolutions from './subcomponents/content/CreativeSolutions';

/**
 * ServiceContent Component - Main content area for service details
 * @param {Object} props - Component props
 * @param {Object} props.service - Service object containing all service information
 * @param {String} props.service.name - Service name
 * @param {String} props.service.fullDescription - Service full description
 * @param {String} props.service.img - Service image URL
 * @param {String} [props.service.process] - The service process description
 * @param {String[]} [props.service.features] - List of service features
 * @param {String[]} [props.service.steps] - List of service steps
 * @returns {JSX.Element} Service content component
 */
const ServiceContent = ({ service }) => {
    const { isRTL } = useLanguage();

    return (
        <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Hero Image */}
            <div className="w-full h-64 md:h-120 overflow-hidden rounded-lg">
                <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-auto object-cover"
                    loading="eager"
                />
            </div>

            {/* Service Benefits */}
            <ServiceBenefits service={service} />

            <CreativeSolutions service={service} />

            {/* Process Steps */}
            <ProcessSteps
                process={service.process}
                features={service.features}
            />

            {/* Confidence Section */}
            <ConfidenceSection />
        </div>
    );
};

ServiceContent.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        fullDescription: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string),
        highlights: PropTypes.arrayOf(
            PropTypes.shape({
                icon: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })
        ),
        process: PropTypes.string,
        steps: PropTypes.arrayOf(PropTypes.string),
        ar: PropTypes.object,
        en: PropTypes.object
    }).isRequired
};

export default ServiceContent;