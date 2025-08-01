// @ts-nocheck
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  Drawer,
  Card,
} from "@material-tailwind/react";
import { Search, X } from "lucide-react";
import TextInput from "../../UI/TextInput";
import { useLanguage } from "../../../store/LanguageContext";
import { useNavigation } from "../../../hooks/useNavigation";
import { MobileAccordion } from "./MiniComponents/MobileAccordion";

export function MobileSidebar({ openNav, setOpenNav, menuServices, navItems }) {
  const { direction, t } = useLanguage();
  const [open, setOpen] = useState(0);
  const {
    isNavItemActive,
    handleNavClick,
    handlePageLoadScroll,
    isHomePage,
    location
  } = useNavigation();

  // Handle scroll on page load if state contains scrollTo
  useEffect(() => {
    if (location.state?.scrollTo) {
      handlePageLoadScroll(location.state.scrollTo);
    }
  }, [location.state?.scrollTo, handlePageLoadScroll]);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const closeDrawer = () => setOpenNav(false);

  // const regularNavItems = navItems.filter(item => !item.hasSubmenu);

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
            {/* <hr className="mb-2 border-gray-200" /> */}

            {/* -- NavItems -- */}
            {navItems.map((item) => (
              <div key={item.id}>
                <hr className="mb-2 border-gray-200" />
                {item.isScrollLink ? (
                  item.hasSubmenu ? (
                    <MobileAccordion
                      accordionId={item.id}
                      isOpen={open === item.id}
                      onToggle={handleOpen}
                      title={item.title}
                      item={item}
                      onNavClick={handleNavClick}
                      onCloseDrawer={closeDrawer}
                      items={menuServices}
                    />
                  ) : (
                    <a
                      href={item.to}
                      className="cursor-pointer"
                      onClick={(e) => {
                        handleNavClick(item, e)
                        closeDrawer()
                      }}
                    >
                      <ListItem className="!text-dark-one !font-medium hover:!text-primary-one">
                        {item.title}
                      </ListItem>
                    </a>
                  )
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `!text-dark-one font-medium ${isActive && isNavItemActive(item) ? "!text-primary-one" : "hover:!text-primary-one"}`
                    }
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