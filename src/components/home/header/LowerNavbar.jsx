// @ts-nocheck
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Typography } from "@material-tailwind/react";
import Dropdown from "../../UI/Dropdown";
import { MobileSidebar } from "./MobileSidebar";
import TextInput from "../../UI/TextInput";
import { Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from "/src/utils/variants";
import { ContuctForm } from "./ContactForm";

export function LowerNavbar() {
    const [openNav, setOpenNav] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    // const [direction, setDirection] = useState('rtl');

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleScroll = () => {
        window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);
    }

    const menuServices = [
        { id: 1, title: "خدمة 1" },
        { id: 2, title: "خدمة 2" },
        { id: 3, title: "خدمة 3" },
        { id: 4, title: "خدمة 4" },
    ];

    const navItems = [
        { id: 1, title: "المقالات" },
        { id: 2, title: "المشاريع" },
        { id: 3, title: "الاسعار" },
        { id: 4, title: "تواصل معنا" },
    ];

    const navList = (
        <ul className="relative mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" className="p-1 font-normal">
                <NavLink to="/" className="flex items-center">
                    الرئيسية
                </NavLink>
            </Typography>
            <Dropdown title="الخدمات">
                {menuServices.map((item) => (
                    <NavLink key={item.id} to="#" className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-100">
                        {item.title}
                    </NavLink>
                ))}
            </Dropdown>
            {navItems.map((item) => (
                <Typography key={item.id} as="li" className="p-1 font-normal">
                    <NavLink to="#" className="flex items-center">
                        {item.title}
                    </NavLink>
                </Typography>
            ))}
        </ul >
    );

    const openSearchBar = () => {
        setOpenSearch(!openSearch);
    }

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key={isScroll ? "scrolled-navbar" : "static-navbar"}
                    initial={isScroll ? { y: -100 } : { y: 0 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 60,
                        duration: 0.5
                    }}
                    className="w-full z-98"
                >
                    <Navbar dir="ltr" className={`header-lower px-4 py-2 lg:px-4 lg:py-4 ${isScroll ? 'fixed top-0 left-0 z-98 w-full shadow-md' : ''} h-max lg:h-[5.5rem] max-w-full rounded-none border-0 bg-white bg-opacity-100 transition-all duration300`}>
                        <div className="flex items-center justify-between text-dark-one h-full px-2 md:px-8 lg:px-0">
                            <Link to="/" className="py-1 md:py-1.5">
                                <img src="assets/images/logo-default.png" className="logo" alt="logo" loading="lazy" />
                            </Link>
                            <div className="flex items-center lg:gap-4">
                                <div dir="rtl" className="mr-4 hidden lg:block">{navList}</div>
                                <div className="flex items-center gap-x-6">
                                    {/* Searsh bar */}
                                    <div>
                                        <button onClick={openSearchBar} type="button" aria-label="Search" title="Search" className="hidden lg:inline-block border-0 text-[1.375rem] font-normal text-dark-one cursor-pointer transition-all duration-300 ease-in-out">
                                            <Search strokeWidth={1.5} className="mx-auto w-7 h-7 text-dark-one leading-10" />
                                        </button>
                                    </div>
                                    {/* Contuct btn */}
                                    <div>
                                        <button
                                            onClick={() => document.getElementById('my_modal_2').showModal()}
                                            type="button"
                                            title="contact"
                                            aria-label="contact"
                                            className="hidden lg:inline-block w-10 h-[2.625rem] rounded-lg border-0 text-[1.375rem] font-normal text-white bg-primary-one hover:bg-primary-two cursor-pointer transition-all duration-300 ease-in-out"
                                        >
                                            <Menu strokeWidth={1.3} className="mx-auto w-7 h-7 text-white leading-10" />
                                        </button>
                                        <ContuctForm />
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    title="menu"
                                    className="ml-auto pl insety-2 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
                </motion.div>
            </AnimatePresence>

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
                            duration: 0.3
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
                                duration: 0.5
                            }}
                            className="relative flex items-center justify-center h-full"
                        >
                            <TextInput
                                type="search"
                                className='!px-5 !w-4xl !m-0 bg-white !text-dark-one'
                                placeholder="البحث..."
                            />
                            <button type="button" aria-label="find" className="inline-block bg-primary-two p-3 rounded-md absolute ltr:right-62 rtl:left-62 rtl:top-1/2 rtl:-translate-y-1/2">
                                <Search strokeWidth={1.5} className="h-5 w-5 text-white" />
                            </button>
                        </motion.div>
                        <button onClick={openSearchBar} aria-label="close" className="btn btn-ghost w-10 h-10 rounded-full bg-primary-one text-white absolute right-2 top-2">
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