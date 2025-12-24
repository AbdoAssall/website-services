// @ts-nocheck
import PropTypes from 'prop-types';
import { MoveRight } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { useNavigation } from "@hooks/scrollToSection/useNavigation";

/**
 * @param {{ t: (key: string) => string, isRTL: boolean, Link: React.ComponentType<any> }} props
*/

export const EssentialsSection = ({ t, isRTL, Link }) => {
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

    const essentialLinks = useMemo(() => {
        const pages = [
            { path: "/contact" },
            { path: "/about-us" },
            { path: "/privacy-policy" },
            { path: "/terms-of-service" },
            { path: "/payment/2" },
            { path: "#faq" },
        ];
        return Array.from({ length: 6 }, (_, i) => ({
            title: t(`footer.essentialLinks.${i}.title`),
            path: pages[i] ? pages[i].path : '#',
        }));
    }, [t]);

    return (
        <div className="w-auto lg:w-[17.06%] flex">
            <div className="md:mb-7.5 md:pt-7 md:px-[0.938rem] flex flex-wrap flex-col content-start w-full relative">
                <div className="pb-4.5 mb-6">
                    <div className="relative before:absolute before:w-14 before:h-0.5 before:bg-primary-one before:inset-x-0 before:-bottom-3">
                        <h3 className="!text-white font-bold text-xl">
                            {t('footer.essentials')}
                        </h3>
                    </div>
                </div>
                <ul>
                    {essentialLinks?.map((link, index) => (
                        <li key={index} className="flex items-center gap-2 pb-3">
                            <MoveRight size={18} className={`text-[#FFFFFF4A] ${isRTL ? 'rotate-180' : ''}`} />
                            <Link
                                to={link.path}
                                onClick={link.path.startsWith('#') ? (e) => handleSectionClick(link.path, e) : undefined}
                                aria-label={link.title}
                                className="!text-white hover:!text-white/80 transition-colors"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

EssentialsSection.propTypes = {
    t: PropTypes.func.isRequired,
    isRTL: PropTypes.bool.isRequired,
    Link: PropTypes.elementType.isRequired,
}