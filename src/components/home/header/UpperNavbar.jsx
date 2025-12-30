// @ts-nocheck
import { useEffect } from "react";
import { Navbar } from "@material-tailwind/react";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "../../../store/LanguageContext";
import { useNavigation } from "@hooks/scrollToSection/useNavigation";

export function UpperNavbar() {
    const { direction, t } = useLanguage();
    const {
        handleSectionClick,
        handlePageLoadScroll,
        location
    } = useNavigation();

    // Handle scroll on page load if state contains scrollTo
    useEffect(() => {
        if (location.state?.scrollTo) {
            handlePageLoadScroll(location.state.scrollTo);
        }
    }, [location.state?.scrollTo, handlePageLoadScroll]);

    return (
        <Navbar className="header-top mx-auto max-w-full lg:h-[2.88rem] px-2 py-0 lg:px-4 bg-primary-two shadow-transparent border-0 rounded-none">
            <div className="py-2 mx-auto px-4 xl:px-0 max-w-[72.125rem] flex items-center justify-between text-white">
                <div className="hidden lg:flex items-center">
                    <a
                        href="#plans"
                        onClick={(e) => handleSectionClick('#plans', e)}
                        className="get_a_quote hover:!text-white !bg-[#056c6d] hover:!bg-[#045c5d]"
                    >
                        {t('upper.qoute')}
                    </a>
                    <p>{t('upper.welcome')}</p>
                </div>
                <div className="mx-auto lg:mx-0">
                    <ul className={`flex flex-col-reverse md:mb-0 md:mt-0 md:flex-row items-center md:gap-6 ${direction === 'rtl' ? '!p-0' : ''}`}>
                        <li className={`flex items-center gap-x-2 p-1 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                            <Phone className="font-normal w-4 h-4 text-white md:text-white" />
                            <a dir="ltr" href="https://wa.me/201065378259" className="flex items-center">
                                +20 106 537 8259
                            </a>
                        </li>
                        <li className={`flex items-center gap-x-2 p-1 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                            <Mail className="font-normal w-4 h-4 text-white md:text-white" />
                            <a href="mailto:support@scopehub.net" className="flex items-center">
                                support@scopehub.net
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Navbar>
    );
}