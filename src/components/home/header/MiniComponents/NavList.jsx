// @ts-nocheck
import { Link, NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Dropdown from "../../../UI/Dropdown";
import { useLanguage } from "../../../../contexts/LanguageContext";

export function NavList({ navItems, menuServices }) {
    const { direction, t } = useLanguage();
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    // Helper function to check if a nav item should be active
    const isNavItemActive = (item) => {
        if (item.isScrollLink && isHomePage) {
            // For scroll links on home page, check if we're on home page
            // You might want to add scroll position detection here
            return isHomePage;
        } else if (!item.isScrollLink) {
            // For regular navigation links, use exact path matching
            return location.pathname === item.to;
        }
        return false;
    };

    // Helper function to handle navigation clicks
    const handleNavClick = (item, e) => {
        if (item.isScrollLink && isHomePage) {
            e.preventDefault();
            const element = document.querySelector(item.to);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

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

            {/* Services Dropdown */}
            <li className="p-1 font-normal">
                <Dropdown
                    title={t("navbar.services")}
                    to="#services"
                    onClick={(e) => e.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                    {menuServices.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.to}
                            className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </Dropdown>
            </li>

            {/* Navigation Items */}
            {navItems.map((item) => (
                <li key={item.id} className="p-1 font-normal">
                    {item.isScrollLink && isHomePage ? (
                        <a
                            href={item.to}
                            className="flex items-center"
                            // onClick={(e) => handleNavClick(item, e)}
                        >
                            {item.title}
                        </a>
                    ) : (
                        <NavLink
                            to={item.to}
                            // className="flex items-center cursor-pointer"
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
        })
    ).isRequired,
    menuServices: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            to: PropTypes.string,
        })
    ).isRequired,
};

{/* <ScrollLink
    to={item.to}
    smooth={true}
    duration={500}
    offset={-50}
    className="flex items-center cursor-pointer"
>
    {item.title}
</ScrollLink> */}