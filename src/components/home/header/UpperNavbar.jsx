// @ts-nocheck
import { Navbar } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "../../../store/LanguageContext";

export function UpperNavbar() {
    const { direction, t } = useLanguage();
    const navList = (
        <ul className={`flex flex-col-reverse md:mb-0 md:mt-0 md:flex-row items-center md:gap-6 ${direction === 'rtl' ? '!p-0' : ''}`}>
            <li className={`flex items-center gap-x-2 p-1 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Phone className="font-normal w-4 h-4 text-white md:text-primary-one" />
                <a href="#" className="flex items-center">
                    +98 060 712 34
                </a>
            </li>
            <li className={`flex items-center gap-x-2 p-1 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Mail className="font-normal w-4 h-4 text-white md:text-primary-one" />
                <a href="#" className="flex items-center">
                    sendmail@creote.com
                </a>
            </li>
        </ul>
    );

    return (
        <Navbar className="header-top mx-auto max-w-full lg:h-[2.88rem] px-2 py-0 lg:px-4 bg-primary-two shadow-transparent border-0 rounded-none">
            <div className="py-2 mx-auto px-4 xl:px-0 max-w-[72.125rem] flex items-center justify-between text-white">
                <div className="hidden lg:flex items-center">
                    <Link to="#" className="get_a_quote hover:!text-white" target="_blank" rel="nofollow">
                        {t('upper.qoute')}
                    </Link>
                    <p>{t('upper.welcome')}</p>
                </div>
                <div className="mx-auto lg:mx-0">{navList}</div>
            </div>
        </Navbar>
    );
}