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
 * @param {String} props.service.img - Service image URL
 * @param {String} [props.service.process] - The service process description
 * @param {String[]} [props.service.features] - List of service features
 * @param {String[]} [props.service.steps] - List of service steps
 * @param {Object} props.service.content - Service content object
 * @param {String} props.service.content.title - Service content title
 * @param {String} props.service.content.fullDescription - Service content full description
 * @param {Object[]} [props.service.benefits] - List of service benefits
 * @param {String} props.service.benefits[].icon - Benefit icon URL
 * @param {String} props.service.benefits[].title - Benefit title
 * @param {String} props.service.benefits[].description - Benefit description
 * @param {Object} [props.service.highlights] - Highlights section data
 * @param {String} props.service.highlights.img - Highlights image URL
 * @param {Object[]} props.service.highlights.items - List of highlight items
 * @param {String} props.service.highlights.items[].icon - Highlight item icon URL
 * @param {String} props.service.highlights.items[].title - Highlight item title
 * @param {String} props.service.highlights.items[].description - Highlight item description
 * @param {Object} [props.service.steps] - Steps section data
 * @param {String} props.service.steps.img - Steps image URL
 * @param {String[]} props.service.steps.items - List of step descriptions
 * @param {object} [props.service.confidence]
 * @param {string} props.service.confidence.description
 * @param {object[]} props.service.confidence.tabs
 * @param {string} props.service.confidence.tabs[].label
 * @param {string} props.service.confidence.tabs[].title
 * @param {string} props.service.confidence.tabs[].description
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
                    loading="lazy"
                />
            </div>

            {/* Service Benefits */}
            <ServiceBenefits service={service} />

            {/* Highlights Section */}
            {service.highlights && (
                <CreativeSolutions service={service} />
            )}

            {/* Process Steps */}
            <ProcessSteps
                process={service.process}
                features={service.features}
            />

            {/* Confidence Section */}
            {service.confidence && (
                <ConfidenceSection confidence={service.confidence} />
            )}
        </div>
    );
};

ServiceContent.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        process: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.string),
        // Shape for the main content (title, description)
        content: PropTypes.shape({
            title: PropTypes.string.isRequired,
            fullDescription: PropTypes.string.isRequired
        }).isRequired,
        benefits: PropTypes.arrayOf(
            PropTypes.shape({
                icon: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })
        ),
        // Shape for the highlights section
        highlights: PropTypes.shape({
            img: PropTypes.string,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    icon: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                })
            )
        }),

        // Shape for the steps section
        steps: PropTypes.shape({
            img: PropTypes.string,
            items: PropTypes.arrayOf(PropTypes.string)
        }),
        confidence: PropTypes.shape({
            description: PropTypes.string.isRequired,
            tabs: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                })
            ).isRequired
        })
    }).isRequired
};

export default ServiceContent;