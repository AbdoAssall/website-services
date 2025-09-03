import { useLanguage } from '@store/LanguageContext';
import { MapPin, Phone, Clock } from "lucide-react";
import SocialIcons from '@components/elements/SocialIcons';

const ContactInfo = () => {
    const { isRTL, t } = useLanguage();

    return (
        <div className={`bg-primary-three p-10 ${isRTL ? 'text-right' : 'text-left'} drop-shadow-lg`}>
            <div className="mb-12">
                <h3 className="!text-primary-one !text-lg lg:!text-2xl !font-semibold font-spartan underline !mb-2">
                    {t('contact.info.subTitle')}
                </h3>
                <h2 className="text-primary-two !text-3xl lg:!text-4xl !font-semibold font-spartan leading-tight">
                    {t('contact.info.title')}
                </h2>
                <p className="text-dark-one !mt-4 text-base leading-relaxed">
                    {t('contact.info.description')}
                </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
                {/* Post Address */}
                <div className={`flex items-start gap-4`}>
                    <div className="w-12 h-12 bg-primary-one rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h4 className="!text-primary-two !font-bold font-spartan !text-lg !mb-1">
                            {t('contact.info.addressTitle')}
                        </h4>
                        <p className="text-dark-one text-base">
                            {t('contact.info.address')}
                        </p>
                    </div>
                </div>

                {/* General Enquires */}
                <div className={`flex items-start gap-4`}>
                    <div className="w-12 h-12 bg-primary-one rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h4 className="!text-primary-two !font-bold font-spartan !text-lg !mb-1">
                            {t('contact.info.enquiriesTitle')}
                        </h4>
                        <p className="text-dark-one text-base">
                            {t('contact.info.enquiries')}
                        </p>
                    </div>
                </div>

                {/* Operation Hours */}
                <div className={`flex items-start gap-4`}>
                    <div className="w-12 h-12 bg-primary-one rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h4 className="!text-primary-two !font-bold font-spartan !text-lg !mb-1">
                            {t('contact.info.hoursTitle')}
                        </h4>
                        <p className="text-dark-one text-base">
                            {t('contact.info.hours')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="w-full mt-10">
                <SocialIcons
                    className='flex gap-4 mt-4'
                    iconClassName='w-9 h-9 rounded-full !bg-primary-one flex items-center justify-center text-sm !text-white transition-all'
                    showTooltip={true}
                />
            </div>
        </div>
    );
}
export default ContactInfo;