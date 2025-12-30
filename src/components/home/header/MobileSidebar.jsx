// @ts-nocheck
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { List, ListItem, Drawer, Card } from "@material-tailwind/react";
import { X } from "lucide-react";
import { useLanguage } from "../../../store/LanguageContext";
import { useNavigation } from "../../../hooks/scrollToSection/useNavigation";
import { MobileAccordion } from "./MiniComponents/MobileAccordion";
import { SearchBarInput } from "@components/common/SearchBarInput";
import { LanguageAccordion } from "./MiniComponents/languageAccordion";

export function MobileSidebar({ openNav, setOpenNav, openSearchBar, menuServices, navItems }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const {
    isNavItemActive,
    handleNavClick,
    handlePageLoadScroll,
    isHomePage,
    location
  } = useNavigation();

  // Check screen size using matchMedia
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 418px)");

    // Set initial state
    setIsSmallScreen(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

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
              aria-label={t('navbar.closeMenu')}
            >
              <X className="h-7 w-7 mx-auto text-gray-600" />
            </button>
          </div>
          {/* Search Input */}
          <div className="p-2 relative text-center">
            <SearchBarInput openSearchBar={openSearchBar} styleSearchBtn="!bg-primary-one !p-2" />
          </div>
          <List className="text-dark-one font-medium">
            <NavLink
              to="/"
              onClick={() => closeDrawer()}
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
                {item.hasSubmenu ? (
                  <MobileAccordion
                    accordionId={item.id}
                    isOpen={open === item.id}
                    onToggle={handleOpen}
                    title={item.title}
                    item={item}
                    onCloseDrawer={closeDrawer}
                    services={menuServices}
                  />
                ) : item.isScrollLink ? (
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
                ) : (
                  <NavLink
                    to={item.to}
                    onClick={() => closeDrawer()}
                    className={({ isActive }) =>
                      `!text-dark-one !font-medium ${isActive && isNavItemActive(item) ? "!text-primary-one" : "hover:!text-primary-one"}`
                    }
                  >
                    <ListItem>{item.title}</ListItem>
                  </NavLink>
                )}
              </div>
            ))}
            <hr className="mb-2 border-gray-200" />

            {isSmallScreen && (
              <LanguageAccordion
                accordionId={99}
                isOpen={open === 99}
                onToggle={handleOpen}
                title={t('language.title')}
                onCloseDrawer={closeDrawer}
              />
            )}
          </List>
        </Card>
      </Drawer>
    </>
  );
}

MobileSidebar.propTypes = {
  openNav: PropTypes.bool.isRequired,
  setOpenNav: PropTypes.func.isRequired,
  openSearchBar: PropTypes.func.isRequired,
  menuServices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};