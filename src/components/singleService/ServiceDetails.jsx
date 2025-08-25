// @ts-nocheck
import PropTypes from 'prop-types';
import ServiceContent from './ServiceContent';
import ServiceSidebar from './ServiceSidebar';
import { useLanguage } from '@store/LanguageContext';

const ServiceDetails = ({ service, services }) => {
    const { isRTL } = useLanguage();

    // Fallback in case service data is not available for the current language
    if (!service) {
        return <div>Service data not available for the selected language.</div>;
    }

    return (
        <div className={`py-20 ${isRTL ? 'rtl' : 'ltr'}`}>
            <div className="container mx-auto px-4">
                <div className={`flex flex-col gap-12 relative ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    {/* Main Content */}
                    <div className="lg:w-8/12">
                        <ServiceContent service={service} />
                    </div>

                    {/* Vertical Separator Line */}
                    <div className={`
                        hidden lg:block absolute top-0 bottom-0 w-px bg-border-dark-one
                        ${isRTL ? 'right-1/3' : 'left-2/3'}
                    `}
                        style={{
                            height: 'calc(440vh - 160px)', // Adjust based on header height
                            marginTop: '-80px' // Extend up to connect with header
                        }}
                    />

                    {/* Sidebar */}
                    <div className="lg:w-4/12 ml6">
                        <ServiceSidebar
                            services={services}
                            currentServiceSlug={service.slug}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceDetails.propTypes = {
    service: PropTypes.object.isRequired,
    services: PropTypes.array.isRequired,
};

export default ServiceDetails;