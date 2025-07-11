// @ts-nocheck
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
    List,
    ListItem,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export function MobileAccordion({
    accordionId,
    isOpen,
    onToggle,
    title,
    item,
    onNavClick,
    onCloseDrawer,
    items,
}) {
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
                    <a
                        href={item.to}
                        onClick={(e) => {
                            onNavClick(item, e)
                            onCloseDrawer()
                        }}
                        className={`${direction === 'rtl' ? 'ml-auto' : 'mr-auto'
                            } !text-dark-one !font-medium`}
                    >
                        {title}
                    </a>
                </AccordionHeader>
            </ListItem>
            <AccordionBody className="menu py-2">
                <List className="p-0">
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            to={item.to}
                            className="!text-dark-one !font-normal hover:!text-primary-one"
                        >
                            <ListItem>{item.title}</ListItem>
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
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
            isScrollLink: PropTypes.bool,
        })
    ).isRequired,
};