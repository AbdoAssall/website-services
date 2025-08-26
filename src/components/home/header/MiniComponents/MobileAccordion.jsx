// @ts-nocheck
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
    List,
    ListItem,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../../../store/LanguageContext";
import { useNavigation } from "@hooks/useNavigation";

export function MobileAccordion({
    accordionId,
    isOpen,
    onToggle,
    title,
    item,
    onCloseDrawer,
    services,
}) {
    const { isNavItemActive } = useNavigation();
    const { direction } = useLanguage();

    const handleAccordionToggle = () => {
        onToggle(accordionId);
    };

    return (
        <Accordion
            open={isOpen}
            icon={
                <div onClick={handleAccordionToggle} className="p-2 mb2 border border-gray-200 shadow-sm rounded-sm">
                    <ChevronDown
                        className={`mx-auto h-4 w-4 text-black transition-transform ${isOpen ? "rotate-180" : ""
                            }`}
                    />
                </div>
            }
        >
            <ListItem className="px-0 !pt-0 pb-1" selected={isOpen}>
                <AccordionHeader
                    className={`items-center border-b-0 ${direction === 'rtl' ? 'pr-3 justify-normal' : ' pl-3 justify-start'
                        } content-center py-0`}
                >
                    <NavLink
                        to={item.to}
                        onClick={() => onCloseDrawer()}
                        className={({ isActive }) =>
                            `${direction === 'rtl' ? 'ml-auto' : 'mr-auto'} font-medium ${isActive && isNavItemActive(item) ? "!text-primary-one" : "!text-dark-one hover:!text-primary-one"}`
                        }
                    >
                        {title}
                    </NavLink>
                </AccordionHeader>
            </ListItem>
            <AccordionBody className="menu py-2">
                <List className="p-0">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            className={`!text-dark-one hover:!text-primary-one ${direction === 'rtl' ? '!font-normal' : '!font-normal'}`}
                        >
                            <ListItem>{service.name}</ListItem>
                        </Link>
                    ))}
                </List>
            </AccordionBody>
        </Accordion>
    );
}

MobileAccordion.propTypes = {
    accordionId: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    onNavClick: PropTypes.func,
    onCloseDrawer: PropTypes.func,
    services: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
            isScrollLink: PropTypes.bool,
        })
    ).isRequired,
};