// @ts-nocheck
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@material-tailwind/react";
import { MobileSidebar } from "./MobileSidebar";
import { Menu, Search } from "lucide-react";
import { ContactFormBox } from "./MiniComponents/ContactFormBox";
import { LanguageDropdown } from "./MiniComponents/LanguageDropdown";
import { useLanguage } from "../../../store/LanguageContext";
import { SearchBar } from "./MiniComponents/SearchBar";
import { NavList } from "./MiniComponents/NavList";
import useServices from "@hooks/useServices";
import { useSticky } from "@hooks/sticky/useSticky";
import { useBreakpointEffect } from "@hooks/resize/useBreakpointEffect";
import { getNavItems } from "@config/navConfig";

export function LowerNavbar() {
  const { t } = useLanguage();
  const { services } = useServices();
  const { targetRef, isSticky, scrollDirection } = useSticky();

  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useBreakpointEffect(960, () => setOpenNav(false));

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

  // Get navigation data from our config file
  const navItems = getNavItems(t);

  const openSearchBar = useCallback(() => {
    setOpenSearch((prev) => !prev);
  }, []);

  // Determine if the navbar should be visible
  // const isNavbarVisible = isSticky && scrollDirection === 'up';

  return (
    <>
      <div ref={targetRef} style={{ height: '1px', position: 'relative', top: '0' }} />

      <div
        className={`w-full z-98 transition-transform duration-500 ease-in-out ${isSticky ? 'fixed top-0 left-0' : 'relative'
          }`}
        style={{
          transform: isSticky ? (scrollDirection === 'down' ? 'translateY(-100%)' : 'translateY(0)') : 'translateY(0)',
        }}
      >
        <Navbar
          dir="ltr"
          className={`header-lower px-4 py-2 lg:px-4 lg:py-4 h-max lg:h-[5.5rem] max-w-ful rounded-none border-0 bg-white ${isSticky ? "shadow-lg backdrop-blur-sm bg-white/95" : "bg-opacity-100"
            }`}
        >
          <div className="flex items-center justify-between text-dark-one h-full px-2 md:px8 lg:px-0 mx-auto max-w-[72.125rem]">
            {/* Logo */}
            <Link to="/" className="py-1 md:py-1.5" aria-label="Scopehub Logo">
              <img
                src="https://storge.scopehub.net/images/logo.png"
                className="logo w-39.5 sm:w-41.5 md:w-53.5 !h-auto"
                alt={t('navbar.logoAlt')}
                width="150"
                height="50"
                loading="lazy"
              />
            </Link>
            <div className="flex items-center gap-2 lg:gap-4">
              <div dir="rtl" className="mr-4 hidden lg:block">
                <NavList navItems={navItems} menuServices={services} />
              </div>

              {/* Searsh bar */}
              <div className="hidden lg:inline-block">
                <button
                  onClick={openSearchBar}
                  type="button"
                  aria-label="Search"
                  title="Search"
                  className="border-0 text-[1.375rem] font-normal text-dark-one cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <Search
                    strokeWidth={1.5}
                    className="mx-auto w-7 h-7 text-dark-one leading-10"
                  />
                </button>
              </div>
              {/* Select Language */}
              {!isSmallScreen && <LanguageDropdown />}
              {/* Contact btn */}
              <div>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  type="button"
                  title="contact"
                  aria-label="contact"
                  className="hidden lg:inline-block w-10 h-[2.625rem] rounded-lg border-0 text-[1.375rem] font-normal text-white bg-primary-one hover:bg-primary-two cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <Menu
                    strokeWidth={1.3}
                    className="mx-auto w-7 h-7 text-white leading-10"
                  />
                </button>
                <ContactFormBox />
              </div>
              {/* Menu button mobile */}
              <button
                type="button"
                title="menu"
                className="ml-auto insety-2 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Navbar>
      </div>

      {openSearch && (
        <SearchBar openSearchBar={openSearchBar} />
      )}

      {/* For mobile */}
      <MobileSidebar
        openNav={openNav}
        setOpenNav={setOpenNav}
        openSearchBar={openSearchBar}
        menuServices={services}
        navItems={navItems}
      />
    </>
  );
}