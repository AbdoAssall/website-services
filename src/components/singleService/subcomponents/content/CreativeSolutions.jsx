import PropTypes from 'prop-types';
import { useLanguage } from '@store/LanguageContext';

/**
 * @typedef {Object} Highlight
 * @property {string} icon - The URL for the highlight icon.
 * @property {string} title - The title of the highlight.
 * @property {string} description - The description of the highlight.
 */

/**
 * @typedef {Array<Highlight>} HighlightsSection 
 */

/**
 * @typedef {Object} Service
 * @property {string} name - The name of the service.
 * @property {string[]} images - An array of image URLs related to the service.
 * @property {HighlightsSection} [highlights] - The highlights section containing image and items.
 */

/**
 * @param {Object} props - The component props.
 * @param {Service} props.service - The service object containing data for the component.
 * @returns {JSX.Element} The rendered CreativeSolutions component.
 */
const CreativeSolutions = ({ service }) => {
    const { isRTL } = useLanguage();

    return (
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:pt-8`}>
            {/* Left Column: Textual Content */}
            <div
                className={`w-full lg:w-1/2 space-y-8 ${isRTL ? 'text-right' : 'text-left'
                    }`}
            >
                {/* The heading is visually hidden but available for screen readers for better SEO and accessibility */}
                <h2 id="creative-solutions-heading" className="sr-only">
                    {service.name}
                </h2>

                {service.highlights &&
                    service.highlights.map((item, index) => (
                        <div
                            key={index}
                            className={`flex gap-4 items-start`}
                        >
                            <div className="flex-shrink-0 w-16 h-16 bg-sky rounded-full flex items-center justify-center">
                                <img
                                    src={'/assets/images/icons/innovation.png'}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-10 h-10"
                                    style={{ color: 'var(--color-primary-one)' }}
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-primary-two mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-dark-one leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>

            {/* Right Column: Image */}
            <div className="w-full lg:w-1/2 h-full">
                <img
                    src={service?.images[1]}
                    alt={service.name}
                    className="w-full !h-73 rounded-lg object-cover shadow-lg"
                    loading="lazy"
                />
            </div>
        </div>
    );
};

CreativeSolutions.propTypes = {
    service: PropTypes.shape({
        name: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        highlights: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })
        ),
    }),
};

export default CreativeSolutions;
