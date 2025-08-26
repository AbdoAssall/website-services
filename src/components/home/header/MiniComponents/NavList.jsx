// @ts-nocheck
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Dropdown from "../../../UI/Dropdown";
import { useLanguage } from "../../../../store/LanguageContext";
import { useNavigation } from "../../../../hooks/useNavigation";

export function NavList({ navItems, menuServices }) {
    const { direction, t, isRTL } = useLanguage();
    const {
        isNavItemActive,
        handleNavClick,
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
        <ul
            dir={direction}
            className="relative mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
        >
            {/* Home Link */}
            <li className="p-1 font-normal">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center ${isActive ? "!text-primary-one" : ""}`
                    }
                >
                    {t("navbar.home")}
                </NavLink>
            </li>

            {/* Navigation Items */}
            {navItems.map((item) => (
                <li key={item.id} className="p-1 font-normal">
                    {item.hasSubmenu ? (
                        <Dropdown
                            title={item.title}
                            to={item.to}
                            item={item}
                        >
                            {menuServices.map((service) => (
                                <Link
                                    key={service.id}
                                    to={`/services/${service.slug}`}
                                    className={`block px-4 py-3 !text-sm !text-gray-600 hover:!bg-gray-100 hover:!text-primary-one ${isRTL ? '!font-medium' : ''}`}
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </Dropdown>
                    ) : item.isScrollLink ? (
                        <a
                            href={item.to}
                            className="flex items-center"
                            onClick={(e) => handleNavClick(item, e)}
                        >
                            {item.title}
                        </a>
                    ) : (
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                `flex items-center ${isActive && isNavItemActive(item) ? "!text-primary-one" : ""}`
                            }
                        >
                            {item.title}
                        </NavLink>
                    )}
                </li>
            ))}
        </ul>
    );
}

// PropTypes validation
NavList.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            to: PropTypes.string,
            isScrollLink: PropTypes.bool,
            hasSubmenu: PropTypes.bool,
        })
    ).isRequired,
    menuServices: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            to: PropTypes.string,
        })
    ).isRequired,
};