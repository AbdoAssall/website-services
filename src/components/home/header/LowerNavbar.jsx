// @ts-nocheck
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@material-tailwind/react";
import { MobileSidebar } from "./MobileSidebar";
import { Menu, Search } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
import { ContuctForm } from "./MiniComponents/ContactForm";
import { LanguageDropdown } from "./MiniComponents/LanguageDropdown";
import { useLanguage } from "../../../contexts/LanguageContext";
import { SearchBar } from "./MiniComponents/SearchBar";
import { NavList } from "./MiniComponents/NavList";

export function LowerNavbar() {
  const { t } = useLanguage();
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const isMountedRef = useRef(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      // isMountedRef.current = false;
    };
  }, []);

  // Optimized scroll handler with useCallback to prevent recreation
  const handleScroll = useCallback(() => {
    // if (!isMountedRef.current) return;

    const currentScrollY = window.scrollY;
    const scrolled = currentScrollY > 100;
    setIsScroll((prevIsScroll) => {
      if (scrolled !== prevIsScroll) {
        return scrolled;
      }
      return prevIsScroll;
    });

    // Handle navbar visibility based on scroll direction
    // if (currentScrollY > 100) { // Only start hiding after 100px scroll
    //   if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
    //     // Scrolling down & past 200px - hide navbar
    //     setIsScroll(false);
    //   } else if (currentScrollY < lastScrollY.current) {
    //     // Scrolling up - show navbar
    //     setIsScroll(true);
    //   }
    // } else {
    //   // Near top of page - always show navbar
    //   setIsScroll(true);
    // }

    lastScrollY.current = currentScrollY;
  }, []);

  // Use requestAnimationFrame for smooth scroll handling
  const scrollTimeoutRef = useRef();
  const rafRef = useRef();

  useEffect(() => {
    const throttledScrollHandler = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        scrollTimeoutRef.current = setTimeout(handleScroll, 16);
      });
    };

    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      isMountedRef.current = false;
    };
  }, [handleScroll]);

  // Navigation items
  const navItems = [
    { id: 1, title: t("navbar.services"), to: "#services", isScrollLink: true, hasSubmenu: true },
    { id: 2, title: t("navbar.articles"), to: "#", isScrollLink: false, hasSubmenu: false },
    { id: 3, title: t("navbar.projects"), to: "/projects", isScrollLink: false, hasSubmenu: false },
    { id: 4, title: t("navbar.prices"), to: "#plans", isScrollLink: true, hasSubmenu: false },
    { id: 5, title: t("navbar.contactUs"), to: "#", isScrollLink: false, hasSubmenu: false },
  ];

  // Menu services
  const menuServices = [
    { id: 1, title: t("navbar.service1"), to: "#" },
    { id: 2, title: t("navbar.service2"), to: "#" },
    { id: 3, title: t("navbar.service3"), to: "#" },
    { id: 4, title: t("navbar.service4"), to: "#" },
  ];

  const openSearchBar = useCallback(() => {
    setOpenSearch((prev) => !prev);
  }, []);

  return (
    <>
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={isScroll ? "scrolled-navbar" : "static-navbar"}
          initial={isScroll ? { y: -100 } : { y: 0 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 60,
            duration: 0.3,
          }}
          className="w-full z-98"
        >
        </motion.div>
      </AnimatePresence>  */}
      <div className={`w-full z-98 ${isScroll ? "fixed top-0 left-0" : ""}`}>
        <Navbar
          dir="ltr"
          className={`header-lower px-4 py-2 lg:px-4 lg:py-4 h-max lg:h-[5.5rem] max-w-ful rounded-none border-0 bg-white ${isScroll
            ? "shadow-lg backdrop-blur-sm bg-white/95"
            : "bg-opacity-100"
            }`}
          style={{
            transform: isScroll
              ? `translateY(${isScroll ? '0%' : '-100%'})`
              : 'translateY(0%)',
            transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            // opacity: isScroll ? 1 : 0 ,
            // visibility: isScroll ? "visible" : "hidden",
          }}
        >
          <div className="flex items-center justify-between text-dark-one h-full px-2 md:px8 lg:px-0 mx-auto max-w-[72.125rem]">
            {/* Logo */}
            <Link to="/" className="py-1 md:py-1.5">
              <img
                src="assets/images/logo-default.png"
                className="logo"
                alt={t('navbar.logoAlt')}
                width="150"
                height="50"
                loading="lazy"
              />
            </Link>
            <div className="flex items-center gap-2 lg:gap-4">
              <div dir="rtl" className="mr-4 hidden lg:block">
                <NavList navItems={navItems} menuServices={menuServices} />
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
              <LanguageDropdown />
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
                <ContuctForm />
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
        menuServices={menuServices}
        navItems={navItems}
      />
    </>
  );
}