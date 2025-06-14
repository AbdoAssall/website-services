// @ts-nocheck
import { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Navbar } from "@material-tailwind/react";
import Dropdown from "../../UI/Dropdown";
import { MobileSidebar } from "./MobileSidebar";
import TextInput from "../../UI/TextInput";
import { Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "/src/utils/variants";
import { ContuctForm } from "./MiniComponents/ContactForm";
import { LanguageDropdown } from "./MiniComponents/LanguageDropdown";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Link as ScrollLink } from "react-scroll";

export function LowerNavbar() {
  const { direction, t } = useLanguage();
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
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

  // Update navItems to use translations
  const navItems = [
    { id: 1, title: t("navbar.articles"), to: "/#" },
    { id: 2, title: t("navbar.projects"), to: "/#" },
    { id: 3, title: t("navbar.prices"), to: "plans", isScrollLink: true },
    { id: 4, title: t("navbar.contactUs"), to: "/#" },
  ];

  // Update menuServices to use translations
  const menuServices = [
    { id: 1, title: t("navbar.service1"), to: "#" },
    { id: 2, title: t("navbar.service2"), to: "#" },
    { id: 3, title: t("navbar.service3"), to: "#" },
    { id: 4, title: t("navbar.service4"), to: "#" },
  ];

  const navList = (
    <ul dir={direction} className="relative mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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

      {navItems.map((item) => (
        <li key={item.id} className="p-1 font-normal">
          {item.isScrollLink && isHomePage ? (
            <ScrollLink
              to={item.to}
              smooth={true}
              duration={500}
              offset={-50}
              className="flex items-center cursor-pointer"
            >
              {item.title}
            </ScrollLink>
          ) : (
            <NavLink to={item.to} className="flex items-center">
              {item.title}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );

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
            // opacity: isScroll ? 1 : isNavVisible ? 0 : 1,
            // visibility: isScroll ? "visible" : "hidden",
          }}
        >
          <div className="flex items-center justify-between text-dark-one h-full px-2 md:px8 lg:px-0 mx-auto max-w-[72.125rem]">
            {/* Logo */}
            <Link to="/" className="py-1 md:py-1.5">
              <img
                src="assets/images/logo-default.png"
                className="logo"
                alt="logo"
                loading="lazy"
              />
            </Link>
            <div className="flex items-center gap-2 lg:gap-4">
              <div dir="rtl" className="mr-4 hidden lg:block">
                {navList}
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
        <AnimatePresence mode="wait">
          <motion.div
            key="search-window"
            variants={fadeIn("down", 0)}
            initial={{ y: -100 }}
            animate="show"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 55,
              duration: 0.3,
            }}
            className="bg-primary-one w-full h-34 fixed top-0 left-0 z-99"
          >
            <motion.div
              key="search-bar"
              variants={fadeIn("up", 0.5)}
              initial={{ y: 100, opacity: 0 }}
              animate="show"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 55,
                duration: 0.5,
              }}
              className="relative flex items-center justify-center mx-auto w-4xl h-full"
            >
              <TextInput
                name="search"
                type="search"
                className="inline-block !px-5 w-full !m-0 bg-white !text-dark-one"
                placeholder={t('navbar.search')}
                dir={direction}
              />
              <button
                type="button"
                aria-label="find"
                className={`inline-block bg-primary-two p-3 rounded-md absolute ${direction === 'ltr' ? 'right-4' : 'left-4 top-1/2 -translate-y-1/2'}`}
              >
                <Search strokeWidth={1.5} className="h-5 w-5 text-white" />
              </button>
            </motion.div>
            <button
              onClick={openSearchBar}
              aria-label="close"
              className="btn btn-ghost w-10 h-10 rounded-full bg-primary-one text-white absolute right-2 top-2"
            >
              <span>
                <X className="w-7 h-7 !text-white" />
              </span>
            </button>
          </motion.div>
        </AnimatePresence>
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