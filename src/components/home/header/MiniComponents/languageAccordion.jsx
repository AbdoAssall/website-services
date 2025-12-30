// @ts-nocheck
import PropTypes from "prop-types";
import {
    List,
    ListItem,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@store/LanguageContext";

export function LanguageAccordion({
    accordionId,
    isOpen,
    onToggle,
    title,
    onCloseDrawer,
}) {
    const { direction, changeLanguage, language, t } = useLanguage();

    const handleAccordionToggle = () => {
        onToggle(accordionId);
    };

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        if (onCloseDrawer) onCloseDrawer();
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
                    onClick={handleAccordionToggle}
                    className={`items-center border-b-0 cursor-pointer ${direction === 'rtl' ? 'pr-3 justify-normal' : ' pl-3 justify-start'
                        } content-center py-0`}
                >
                    <span
                        className={`${direction === 'rtl' ? 'ml-auto' : 'mr-auto'} font-medium !font-spartan text-[17px] !text-dark-one hover:!text-primary-one`}
                    >
                        {title}
                    </span>
                </AccordionHeader>
            </ListItem>
            <AccordionBody className="menu py-2">
                <List className="p-0">
                    {/* english language */}
                    <ListItem
                        onClick={() => handleLanguageChange('en')}
                        className={`!text-dark-one hover:!text-primary-one cursor-pointer ${language === 'en' ? 'font-bold !text-primary-one' : ''}`}
                    >
                        {t('language.english')}
                    </ListItem>

                    {/* arabic language */}
                    <ListItem
                        onClick={() => handleLanguageChange('ar')}
                        className={`!text-dark-one hover:!text-primary-one cursor-pointer ${language === 'ar' ? 'font-bold !text-primary-one' : ''}`}
                    >
                        {t('language.arabic')}
                    </ListItem>
                </List>
            </AccordionBody>
        </Accordion>
    );
}

LanguageAccordion.propTypes = {
    accordionId: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    onCloseDrawer: PropTypes.func,
};