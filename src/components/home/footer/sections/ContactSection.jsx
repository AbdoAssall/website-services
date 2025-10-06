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
                    {/* <li className="flex gap-3">
                        <MapPin size={20} className="text-primary-one mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-white capitalize">
                                {t('footer.address')}
                            </span>
                            <p className="max-w-xs mt-2 !text-sm !font-semibold text-[#FFFFFFD4] leading-relaxed">
                                {t('contact.address')}
                            </p>
                        </div>
                    </li> */}
                    <li className="flex gap-3">
                        <Phone size={20} className="text-primary-one mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-white capitalize">
                                {t('footer.phone')}
                            </span>
                            <a dir="ltr" href="https://wa.me/201065378259" className="max-w-xs mt-2 !block !text-sm !font-semibold !text-[#FFFFFFD4] leading-relaxed">
                                +20 106 537 8259
                            </a>
                        </div>
                    </li>
                    <li className="flex gap-3 !mt-4">
                        <Mail size={20} className="text-primary-one mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-white select-none capitalize">
                                {t('footer.email')}
                            </span>
                            <a href="mailto:support@scopehub.net" className="max-w-xs mt-2 !block !text-sm !font-semibold !text-[#FFFFFFD4] leading-relaxed">
                                support@scopehub.net
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};