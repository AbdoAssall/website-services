// @ts-nocheck
import { useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";
import { ChevronDown, Search, X } from "lucide-react";
import TextInput from "../../UI/TextInput";
// import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "../../../contexts/LanguageContext";

export function MobileSidebar({ openNav, setOpenNav, menuServices, navItems }) {
  const { direction, t } = useLanguage();
  const [open, setOpen] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const closeDrawer = () => setOpenNav(false);

  return (
    <>
      <div
        className={`${openNav
          ? "absolute inset-0 w-full h-full cursor-pointer bg-primary-two/80 transition-all duration-300 z-[9999]"
          : ""
          }`}
      />
      <Drawer open={openNav} onClose={closeDrawer} overlay={false}>
        <Card
          shadow={false}
          className="mobile fixed top-0 left-0 z-99 h-full w-17/20 sm:w-[18rem] p-3 bg-white text-dark-one rounded-none overflow-y-auto"
        >
          <div className="mb-2 flex items-center">
            <button
              type="button"
              className="ml-auto h-10 w-10 py-1 rounded-full border border-border-dark-one text-center"
              onClick={closeDrawer}
            >
              <X className="h-7 w-7 mx-auto text-gray-600" />
            </button>
          </div>
          <div className="p-2 relative text-center">
            <TextInput type="search" className="relative" placeholder={t('navbar.search')} />
            <span className={`inline-block bg-primary-one p-2 rounded-md absolute cursor-pointer ${direction === 'rtl' ? ' left-5' : 'right-5'} top-4.5`}>
              <Search className="h-5 w-5 text-white" />
            </span>
          </div>
          <List className="text-dark-one font-medium">
            <NavLink
              to="/"
              className="!text-dark-one hover:!text-primary-one !duration-200"
            >
              <ListItem className={isHomePage ? "text-primary-one" : ""}>
                {t('navbar.home')}
              </ListItem>
            </NavLink>
            <hr className="mb-2 border-gray-200" />

            {/* -- Services -- */}
            <Accordion
              open={open === 1}
              icon={
                <div onClick={() => handleOpen(1)} className="p-2 mb2 border border-gray-200 shadow-sm rounded-sm">
                  <ChevronDown
                    className={`mx-auto h-4 w-4 text-black transition-transform ${open === 1 ? "rotate-180" : ""
                      }`}
                  />
                </div>
              }
            >
              <ListItem className="px-0 !pt-0 pb-1" selected={open === 1}>
                <AccordionHeader
                  // onClick={() => handleOpen(1)}
                  className={`items-center border-b-0 ${direction === 'rtl' ? 'pr-3 justify-normal' : ' pl-3 justify-start'} content-center py-0`}
                >
                  <NavLink to="#" className={`${direction === 'rtl' ? 'ml-auto' : 'mr-auto'} !text-dark-one !font-medium`}>
                    {t('navbar.services')}
                  </NavLink>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="menu py-2">
                <List className="p-0">
                  {menuServices.map((item) => (
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

            {/* -- NavItems -- */}
            {navItems.map((item) => (
              <div key={item.id}>
                <hr className="mb-2 border-gray-200" />
                {item.isScrollLink && isHomePage ? (
                  <a
                    href={item.to}
                    className="cursor-pointer"
                    onClick={closeDrawer}
                  >
                    <ListItem className="!text-dark-one font-medium hover:!text-primary-one">
                      {item.title}
                    </ListItem>
                  </a>
                ) : (
                  <NavLink
                    to={item.to}
                    className="!text-dark-one font-medium hover:!text-primary-one"
                  >
                    <ListItem>{item.title}</ListItem>
                  </NavLink>
                )}
              </div>
            ))}
          </List>
        </Card>
      </Drawer>
    </>
  );
}

MobileSidebar.propTypes = {
  openNav: PropTypes.bool.isRequired,
  setOpenNav: PropTypes.func.isRequired,
  menuServices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};