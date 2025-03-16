// @ts-nocheck
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import Dropdown from "../../UI/Dropdown";
import { MobileSidebar } from "./MobileSidebar";
import InputLabel from "../../UI/InputLabel";
import TextInput from "../../UI/TextInput";
import Textarea from "../../UI/Textarea";
import PrimaryButton from "../../UI/PrimaryButton";
import { Menu, Search, X } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export function LowerNavbar() {
    const [openNav, setOpenNav] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    // const [isScroll, setIsScroll] = useState(false);
    // const [direction, setDirection] = useState('rtl');

    const useDebounce = (value, delay) => {
        const [debouncedValue, setDebouncedValue] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        }, [value, delay]);

        return debouncedValue;
    };

    // In your component
    const [scrollPosition, setScrollPosition] = useState(0);
    const isScroll = useDebounce(scrollPosition > 10, 40);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        AOS.init();
    }, [])

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

    // const handleScroll = () => {
    //     window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);
    // }

    const menuServices = [
        {
            id: 1,
            title: "خدمة 1",
        },
        {
            id: 2,
            title: "خدمة 2",
        },
        {
            id: 3,
            title: "خدمة 3",
        },
        {
            id: 4,
            title: "خدمة 4",
        },
    ];
    const lastProjects = [
        { id: 1, name: "project", url: "#", img: "../../../../public/assets/images/projects/project-1.jpg" },
        { id: 2, name: "project", url: "#", img: "../../../../public/assets/images/projects/project-2.jpg" },
        { id: 3, name: "project", url: "#", img: "../../../../public/assets/images/projects/project-3.jpg" },
        { id: 4, name: "project", url: "#", img: "../../../../public/assets/images/projects/project-4.jpg" },
        { id: 5, name: "project", url: "#", img: "../../../../public/assets/images/projects/project-5.jpg" },
    ]

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

    const SearchWindow = () => (
        <div data-aos="fade-down" data-aos-duration="1000" className="bg-primary-one w-full h-34 absolute top-0 left-0 z-50">
            <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1400" className="relative flex items-center justify-center h-full">
                <TextInput
                    type="search"
                    className='!px-5 !w-4xl !m-0 bg-white !text-dark-one'
                    placeholder="البحث..."
                />
                <button type="button" aria-label="find" className="inline-block bg-primary-two p-3 rounded-md absolute ltr:right-62 rtl:left-62 rtl:top-1/2 rtl:-translate-y-1/2">
                    <Search strokeWidth={1.5} className="h-5 w-5 text-white" />
                </button>
            </div>
            <button onClick={openSearchBar} aria-label="close" className="btn btn-ghost w-10 h-10 rounded-full bg-primary-one text-white absolute right-2 top-2">
                <span>
                    <X className="w-7 h-7 !text-white" />
                </span>
            </button>
        </div>
    )
    const openSearchBar = () => {
        setOpenSearch(!openSearch);
    }

    return (
        <>
            <Navbar className={`header-lower px-4 py-2 lg:px-4 lg:py-4 ${isScroll ? 'fixed top-0 z-10' : ''} h-max lg:h-[5.5rem] max-w-full rounded-none border-0 bg-white bg-opacity-100 transition-all duration-300`}>
                <div className="flex items-center justify-between text-dark-one h-full px-2 md:px-8 lg:px-0">
                    <Link to="/" className="py-1.5">
                        <img src="/public/assets/images/logo-default.png" className="logo" alt="logo" loading="lazy" />
                    </Link>
                    <div className="flex items-center lg:gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
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
                                <dialog id="my_modal_2" className="modal">
                                    <div dir="rtl" className="modal-box max-w-17/20 max-h-19/20 p-0 ltr:text-left rtl:text-right bg-white">
                                        <div className="card lg:card-side flex-col-reverse bg-primary-three shadow-sm">
                                            <div className="card-body p-10 ltr:text-left">
                                                <div className="w-full flex ltr:justify-end">
                                                    <figure className="logo w-36 h-auto">
                                                        <img
                                                            src="/public/assets/images/logo-default.png"
                                                            className="w-full h-full object-cover"
                                                            alt="logo"
                                                            loading="lazy" />
                                                    </figure>
                                                </div>
                                                <div className="my-4">
                                                    <p className="!mb-5">التنقيب مع السخط الصالحين والكراهية الرجال الذين يعانون من إعجابهم وإحباطهم من قبل لحظة متعة السحر حتى يرغبون في أن لا يستطيعوا التنبؤ بالألم والمشاكل.</p>
                                                    <Link to="#" arial-label="Read more" className="!text-dark-one font-bold font-spartan text-base uppercase">اقرأ المزيد</Link>
                                                </div>
                                                <hr className="text-dark-one/15" />
                                                <div className="my-3">
                                                    <h3 className="text-xl">احدث المشاريع</h3>
                                                    <div className="flex items-center flex-wrap gap-3 ltr:justify-end">
                                                        {lastProjects.map((project) => (
                                                            <Link key={project.id} to={project.url} arial-label="Projec" >
                                                                <figure className="w-26 h-26">
                                                                    <img src={project.img} alt={project.name} className="w-full h-full rounded-lg object-cover" loading="lazy" />
                                                                </figure>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                                <hr className="text-dark-one/15" />
                                                <div className="mt-6 mb-3">
                                                    © 2023 كريوت. جميع الحقوق محفوظة.
                                                </div>
                                            </div>
                                            <div className="card-body p-10 lg:w-3/5 drop-shadow-lg rounded-r-xl bg-white ltr:text-left">
                                                <form>
                                                    <div>
                                                        <InputLabel htmlFor="name" className="uppercase rtl:!text-base" value="اسمك" />
                                                        <TextInput
                                                            id="title"
                                                            name="title"
                                                            className="block w-full !mt-1"
                                                        />
                                                    </div>
                                                    <div className="mt-3">
                                                        <InputLabel htmlFor="name" className="uppercase rtl:!text-base" value="اميلك" />
                                                        <TextInput
                                                            type="email"
                                                            id="title"
                                                            name="title"
                                                            className="block w-full !mt-1"
                                                        />
                                                    </div>
                                                    <div className="mt-3">
                                                        <InputLabel htmlFor="name" className="uppercase rtl:!text-base" value="العنوان" />
                                                        <TextInput
                                                            id="title"
                                                            name="title"
                                                            className="block w-full !mt-1"
                                                        />
                                                    </div>
                                                    <div className="mt-3">
                                                        <InputLabel htmlFor="name" className="uppercase rtl:!text-base" value="رسالتك (اختياري)" />
                                                        <Textarea
                                                            id="title"
                                                            name="title"
                                                            className="block w-full !mt-2"
                                                        >
                                                        </Textarea>
                                                    </div>
                                                </form>
                                                <div className="grid">
                                                    <PrimaryButton type="submit" className="hover:!bg-primary-one/95 hover:!text-white ltr:!uppercase">ارسال</PrimaryButton>
                                                </div>
                                            </div>
                                        </div>
                                        <form method="dialog">
                                            <button aria-label="close" className="btn btn-sm btn-circle btn-ghost bg-primary-one text-white p-4 absolute right-2 top-2">✕</button>
                                        </form>
                                    </div>
                                    <form method="dialog" className="modal-backdrop"><button></button></form>
                                </dialog>
                            </div>
                        </div>
                        <IconButton
                            variant="text"
                            type="button"
                            title="menu"
                            className="ml-auto -inset-y-2 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
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
                        </IconButton>
                    </div>
                </div>
            </Navbar>
            {openSearch && (
                <SearchWindow />
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