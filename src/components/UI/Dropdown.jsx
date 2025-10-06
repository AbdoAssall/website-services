// @ts-nocheck
import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useNavigation } from "@hooks/scrollToSection/useNavigation";

const Dropdown = ({ title, children, to = '#', item, ...props }) => {
    const {
        isNavItemActive,
    } = useNavigation();

    const [isOpen, setIsOpen] = useState(false);

    let timeout;
    const handleMouseEnter = () => {
        clearTimeout(timeout);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeout = setTimeout(() => {
            setIsOpen(false);
        }, 100);
    };

    return (
        <div className="group font-normal">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="dropdown inline-block cursor-pointer"
            >
                <div

                    className="relative z-20 flex items-center gap-x-1 focus:outline-none"
                >
                    <NavLink
                        {...props}
                        to={to}
                        aria-label={title}
                        className={({ isActive }) =>
                            `group-hover:!text-primary-one font-semibold ${isActive && isNavItemActive(item) ? "!text-primary-one" : "!text-dark-one"}`
                        }
                    >
                        {title}
                    </NavLink>
                    <svg
                        className="w-5 h-5 text-light-gray group-hover:text-primary-one transition-colors duration-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>

                {isOpen && (
                    <div className="list absolute left-0 right-0 lg:top-14 z-10 w-55 pt-2 mt-2 max-h-96 bg-white rounded-md shadow-md overflow-y-auto">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Dropdown;

Dropdown.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
    item: PropTypes.any,
    children: PropTypes.node.isRequired
}