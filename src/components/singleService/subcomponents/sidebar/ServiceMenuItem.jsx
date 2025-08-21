import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * ServiceMenuItem Component - Individual service menu item
 * @param {Object} props - Component props
 * @param {{ slug: string }} props.service - Service object
 * @param {string} props.serviceName - Localized service name
 * @param {React.ElementType} props.icon - Icon component
 * @param {boolean} props.isActive - Whether this service is currently active
 * @param {boolean} props.isRTL - RTL direction flag
 * @param {React.ElementType} props.ChevronIcon - Chevron icon component
 * @returns {JSX.Element} Service menu item component
 */
export const ServiceMenuItem = ({
    service,
    serviceName,
    icon: Icon,
    isActive,
    isRTL,
    ChevronIcon
}) => (
    <Link
        to={`/services/${service.slug}`}
        className={`
            block px-6 py-4 !font-medium transition-all duration-200 group
            ${isActive
                ? '!bg-primary-three text-primary-one border-r-4 border-primary-one'
                : '!text-dark-one hover:!bg-primary-four hover:!text-primary-one'
            }
            ${isRTL ? 'border-l-4 !border-r-0' : 'border-r-4'}
        `}
        aria-current={isActive ? 'page' : undefined}
    >
        <div className={`flex items-center justify-between`}>
            <div className={`flex items-center gap-3`}>
                <Icon
                    size={18}
                    className={`
                        flex-shrink-0 transition-colors duration-200
                        ${isActive ? 'text-primary-one' : 'text-light-gray group-hover:text-primary-one'}
                    `}
                    aria-hidden="true"
                />
                <span className="font-medium text-sm">
                    {serviceName}
                </span>
            </div>
            <ChevronIcon
                size={16}
                className={`
                    transition-all duration-200 group-hover:translate-x-1
                    ${isActive ? 'text-primary-one' : 'text-light-gray group-hover:text-primary-one'}
                    ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}
                `}
                aria-hidden="true"
            />
        </div>
    </Link>
);

ServiceMenuItem.propTypes = {
    service: PropTypes.shape({
        slug: PropTypes.string.isRequired
    }).isRequired,
    serviceName: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    isActive: PropTypes.bool.isRequired,
    isRTL: PropTypes.bool.isRequired,
    ChevronIcon: PropTypes.elementType.isRequired
};
