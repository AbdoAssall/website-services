import PropTypes from 'prop-types';
import { useLanguage } from '@store/LanguageContext';

/**
 * @typedef {Object} Highlight
 * @property {string} icon - The URL for the highlight icon.
 * @property {string} title - The title of the highlight.
 * @property {string} description - The description of the highlight.
 */


/**
 * @typedef {Object} Service
 * @property {string} name - The name of the service.
 * @property {Highlight[]} [highlights] - An array of highlight objects.
 * @property {string} img - The URL for the main service image.
 * @property {Service} [ar] - The Arabic version of the service data.
 * @property {Service} [en] - The English version of the service data.
 */

/**
 * Renders a section highlighting creative solutions and best practices,
 * featuring a two-column layout with textual content and an image.
 * It is responsive and supports both LTR and RTL directions.
 *
 * @param {Object} props - The component props.
 * @param {Service} props.service - The service object containing data for the component.
 * @returns {JSX.Element} The rendered CreativeSolutions component.
 */
const CreativeSolutions = ({ service }) => {
    const { isRTL } = useLanguage();

    return (
        <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center`}>
            {/* Left Column: Textual Content */}
            <div
                className={`w-full md:w-1/2 space-y-8 ${isRTL ? 'text-right' : 'text-left'
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
                                    src={item.icon}
                                    alt="" // Decorative image, alt text is handled by the title
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
            <div className="w-full md:w-1/2">
                <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-auto rounded-lg object-cover shadow-lg"
                    loading="lazy" // Lazy loading for performance
                />
            </div>
        </div>
    );
};

/**
 * PropTypes for the CreativeSolutions component.
 * Ensures that the 'service' prop and its nested properties are of the correct type.
 */
CreativeSolutions.propTypes = {
    service: PropTypes.shape({
        name: PropTypes.string,
        img: PropTypes.string.isRequired,
        highlights: PropTypes.arrayOf(
            PropTypes.shape({
                icon: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })
        ),
        ar: PropTypes.shape({
            name: PropTypes.string.isRequired,
            highlights: PropTypes.arrayOf(
                PropTypes.shape({
                    icon: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                })
            ).isRequired,
        }),
        en: PropTypes.shape({
            name: PropTypes.string.isRequired,
            highlights: PropTypes.arrayOf(
                PropTypes.shape({
                    icon: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                })
            ).isRequired,
        }),
    }),
};

export default CreativeSolutions;
