// @ts-nocheck
import PropTypes from 'prop-types';
import { useLanguage } from '@store/LanguageContext';
import { ServicesMenu } from './subcomponents/sidebar/ServicesMenu';
import { ContactInfo } from './subcomponents/sidebar/ContactInfo';

/**
 * ServiceSidebar Component - Right sidebar with services list and contact info
 * @param {Object} props - Component props
 * @param {Array} props.services - Array of all services
 * @param {string} props.currentServiceSlug - Slug of the currently viewed service
 * @returns {JSX.Element} Service sidebar component
 */
const ServiceSidebar = ({ services, currentServiceSlug }) => {
    const { isRTL } = useLanguage();

    return (
        <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Services List */}
            <ServicesMenu
                services={services}
                currentServiceSlug={currentServiceSlug}
            />

            {/* Contact Info */}
            <ContactInfo />
        </div>
    );
};

ServiceSidebar.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
    })).isRequired,
    currentServiceSlug: PropTypes.string.isRequired
};
export default ServiceSidebar;