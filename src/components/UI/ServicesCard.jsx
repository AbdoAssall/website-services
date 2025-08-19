import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useLanguage } from "@store/LanguageContext";
import '@styles/services.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

/**
 * Renders a service card component.
 *
 * @param {object} props - The component props.
 * @param {object} props.service - The service object.
 * @param {string} props.service.url - The URL of the service.
 * @param {string} props.service.title - The title of the service.
 * @param {string} props.service.description - The description of the service.
 * @param {string} props.service.image - The image URL of the service.
 * @param {string} [props.className] - Additional CSS classes for the card.
 * @param {string} [props.titleColor] - Additional CSS classes for the title.
 * @param {string} [props.textColor] - Additional CSS classes for the text.
 * @param {string} [props.linkColor] - Additional CSS classes for the link.
 * @returns {JSX.Element} The rendered service card component.
 */
const ServicesCard = ({
    service,
    className = '',
    titleColor,
    textColor,
    linkColor
}) => {
    const { t, direction } = useLanguage();

    return (
        <div className={`card service-box w92.5 px-3 bg-[#020101]/24 ${className}`}>
            <div className="card-body pb-1 px-2.5 items-center text-center">
                <Link
                    to={service.url || '#'}
                    aria-label={service.title}
                    className={`card-title pb-6 ${direction === 'rtl' ? 'text-xl' : '!text-2xl'} !font-bold !font-spartan ${titleColor} leading-7.5`}
                >
                    {service.title}
                </Link>
                <p dir={direction} className={`${textColor}`}>{service.description}</p>
            </div>
            <div className="icon-serv">
                <img src="assets/images/icons/thumbs-up.png" alt="service icon" className="icon-thumbs" />
            </div>
            <div className="card-overlay-img">
                <figure>
                    <img
                        src={service.image}
                        alt={service.title}
                        className="relative rounded-[0.625rem]"
                        loading="lazy"
                        width="500"
                        height="500"
                        srcSet={`${service.image} 500w, ${service.image} 300w, ${service.image} 100w, ${service.image} 150w`}
                        sizes="(max-width: 500px) 100vw, 500px"
                    />
                </figure>
            </div>
            <Link
                to={service.url || '#'}
                aria-label={service.title}
                className={`pt-7 flex items-center justify-center gap-1 ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row-reverse'} capitalize ${linkColor} text-center`}
            >
                {t('services.readMore')}
                {direction === 'rtl' ? (
                    <ArrowLeft size={18} strokeWidth={2} />
                ) : (
                    <ArrowRight size={18} strokeWidth={2} />
                )}
            </Link>
        </div>
    );
}

ServicesCard.propTypes = {
    service: PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    className: PropTypes.string,
    titleColor: PropTypes.string,
    textColor: PropTypes.string,
    linkColor: PropTypes.string,
};

export default ServicesCard;