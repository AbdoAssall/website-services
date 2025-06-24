// @ts-nocheck
import { NavLink, useLocation } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
import PropTypes from "prop-types";
import Dropdown from "../../../UI/Dropdown";
import { useLanguage } from "../../../../contexts/LanguageContext";

export function NavList({ navItems, menuServices }) {
    const { direction, t } = useLanguage();
    const location = useLocation();
    const isHomePage = location.pathname === "/";

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
                        `flex items-center ${isActive && isHomePage ? "!text-primary-one" : ""
                        }`
                    }
                >
                    {t("navbar.home")}
                </NavLink>
            </li>

            {/* Services Dropdown */}
            {isHomePage ? (
                <li className="p-1 font-normal">
                    <Dropdown title={t("navbar.services")}>
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
            ) : (
                <Dropdown title={t("navbar.services")}>
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
            )}

            {/* Navigation Items */}
            {navItems.map((item) => (
                <li key={item.id} className="p-1 font-normal">
                    {item.isScrollLink && isHomePage ? (
                        <a href={item.to} className="flex items-center">
                            {item.title}
                        </a>
                    ) : (
                        <NavLink
                            to={item.to}
                            className="flex items-center cursor-pointer"
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