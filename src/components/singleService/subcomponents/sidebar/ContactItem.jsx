import PropTypes from 'prop-types';
// import { useLanguage } from '@store/LanguageContext';

/**
 * ContactItem Component - Individual contact item
 * @param {Object} props - Component props
 * @param {React.ElementType} props.icon - Icon component
 * @param {string} props.text - Contact text
 * @param {string} props.href - Contact link
 * @returns {JSX.Element} Contact item component
 */
export const ContactItem = ({ icon: Icon, text, href }) => {
    // const { isRTL } = useLanguage();

    return (
        <a
            href={href}
            className={`
            mt-2 flex items-center justify-center gap-2 !text-white hover:!text-gray-200 
            transition-colors duration-200
        `}
            aria-label={`Contact us at ${text}`}
        >
            <Icon size={16} aria-hidden="true" />
            <span className="text-base font-medium">{text}</span>
        </a>
    );
}
ContactItem.propTypes = {
    icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};
