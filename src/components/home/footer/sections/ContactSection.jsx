import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../../../store/LanguageContext';

export const ContactSection = () => {
    const { t } = useLanguage();

    return (
        <div className="md:w-[24.25%] flex">
            <div className="md:mb-7.5 md:pt-7 md:px-[0.938rem] flex flex-wrap flex-col content-start w-full relative">
                <div className="pb-4.5 mb-6">
                    <div className="relative before:absolute before:w-14 before:h-0.5 before:bg-primary-one before:inset-x-0 before:-bottom-3">
                        <h3 className="!text-white font-bold text-xl">
                            {t('footer.contactUs')}
                        </h3>
                    </div>
                </div>
                <ul>
                    <li className="flex gap-3">
                        <MapPin size={20} className="text-primary-one mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-white capitalize">
                                {t('footer.address')}
                            </span>
                            <p className="max-w-xs mt-2 !text-sm !font-semibold text-[#FFFFFFD4] leading-relaxed">
                                {t('contact.address')}
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <Phone size={20} className="text-primary-one mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-white capitalize">
                                {t('footer.phone')}
                            </span>
                            <p className="max-w-xs mt-2 !text-sm !font-semibold text-[#FFFFFFD4] leading-relaxed">
                                +555 5678 12340
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <Mail size={20} className="text-primary-one mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-white select-none capitalize">
                                {t('footer.email')}
                            </span>
                            <p className="max-w-xs mt-2 !text-sm !font-semibold text-[#FFFFFFD4] leading-relaxed">
                                support@creote.com
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};