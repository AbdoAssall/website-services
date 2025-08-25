import { Mail, Phone } from "lucide-react";
import { ContactItem } from "./ContactItem";
import { useLanguage } from '@store/LanguageContext';

export const ContactInfo = () => {
    const { isRTL, t } = useLanguage();

    return (
        <div className="relative bg-primary-two text-white text-center rounded-[0.625rem] pt-10 pb-16 px-5">
            <img
                src="/assets/images/service-sidebar-contact-bg.jpg"
                alt="backgroundimage"
                className="absolute top-0 left-0 z-1 w-full !h-full rounded-[0.625rem] md:object-cover"
            />
            {/* Header */}
            <div className="relative z-2 pb-25 text-center">
                <h3 className="text-3xl font-semibold !text-white">
                    {t('contact.question')}
                </h3>
                <p className={`${isRTL ? '!text-gray-300' : '!text-light'}`}>
                    {t('contact.descrip')}
                </p>
            </div>

            {/* Question Mark Illustration */}
            {/* <div className="flex justify-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/60 rounded-full flex items-center justify-center">
                    <span className="text-white/80 text-lg font-bold">?</span>
                </div>
            </div>
        </div> */}

            {/* Contact Details */}
            <div className="relative z-2 pt-25 text-center">
                <ContactItem
                    icon={Phone}
                    text="+98 060 712 34"
                    href="tel:+98060712234"
                />
                <ContactItem
                    icon={Mail}
                    text="sendmail@qetus.com"
                    href="mailto:sendmail@qetus.com"
                />
            </div>

            {/* Contact Button */}
            <div className="absolute left-0 right-0 z-3 flex justify-center mt-8">
                <a
                    href="tel:+98060712234"
                    className="md:w-3/4 px-5 sm:px-7 py-4 sm:py-4.5 text-center block border border-primary-one rounded-none rounded-tl-[0.625rem] rounded-br-[0.625rem] !bg-primary-one !text-md sm:!text-base font-semibold !font-spartan capitalize tracking-widest text-nowrap whitespace-nowrap !text-white hover:!bg-white hover:!text-primary-one hover:rounded-none hover:rounded-tr-[0.625rem] hover:rounded-bl-[0.625rem] active:!bg-transparent active:!text-primary-one active:rounded-none active:rounded-tr-[0.625rem] active:rounded-bl-[0.625rem] transition-all duration-500 ease-in-out cursor-pointer"
                    aria-label="Schedule an appointment"
                >
                    {t('contact.contactUs')}
                </a>
            </div>
        </div>
    );
}