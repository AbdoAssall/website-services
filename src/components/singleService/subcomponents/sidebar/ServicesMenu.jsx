// @ts-nocheck
import PropTypes from 'prop-types';
import { useLanguage } from '@store/LanguageContext';
import { Users, Shield, Award, UserCheck, ChevronRight, ChevronLeft } from 'lucide-react';
import { ServiceMenuItem } from './ServiceMenuItem';

/**
 * ServicesMenu Component - List of all services with active state
 * @param {Object} props - Component props
 * @param {Array} props.services - Array of services
 * @param {string} props.currentServiceSlug - Current active service slug
 * @returns {JSX.Element} Services menu component
 */
export const ServicesMenu = ({ services, currentServiceSlug }) => {
    const { language, isRTL, t } = useLanguage();
    const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

    // Service icons mapping
    const getServiceIcon = (slug = '') => {
        /** @type {Object<string, import('lucide-react').LucideIcon>} */
        const iconMap = {
            'risk-management': Shield,
            'hr-consulting': Users,
            'training-programs': Award,
            'digital-marketing': UserCheck
        };
        return iconMap[slug] || Users;
    };

    return (
        <div className="bg-white border border-border-dark-one rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-primary-one px-6 py-4">
                <h3 className="!text-white text-lg font-semibold flex items-center gap-2">
                    <Users size={20} aria-hidden="true" />
                    {t('services.title')}
                </h3>
            </div>

            {/* Services List */}
            <div className="divide-y divide-border-dark-one">
                {services.map((service) => {
                    const Icon = getServiceIcon(service.slug);
                    const serviceData = service[language] || service.ar;
                    const isActive = service.slug === currentServiceSlug;

                    return (
                        <ServiceMenuItem
                            key={service.id}
                            service={service}
                            serviceName={serviceData.name}
                            icon={Icon}
                            isActive={isActive}
                            isRTL={isRTL}
                            ChevronIcon={ChevronIcon}
                        />
                    );
                })}
            </div>
        </div>
    );
};

ServicesMenu.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        ar: PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string,
            fullDescription: PropTypes.string,
            steps: PropTypes.arrayOf(PropTypes.string),
            features: PropTypes.arrayOf(PropTypes.string),
            process: PropTypes.string
        }),
        en: PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string,
            fullDescription: PropTypes.string,
            steps: PropTypes.arrayOf(PropTypes.string),
            features: PropTypes.arrayOf(PropTypes.string),
            process: PropTypes.string
        })
    })).isRequired,
    currentServiceSlug: PropTypes.string.isRequired,
};