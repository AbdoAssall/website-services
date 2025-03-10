// @ts-nocheck
import { Navbar } from "@material-tailwind/react";
import { FiPhone } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function UpperNavbar() {

    const navList = (
        <ul className="flex flex-col-reverse md:mb-0 md:mt-0 md:flex-row items-center md:gap-6 rtl:!p-0">
            <li className="flex items-center gap-x-2 p-1 rtl:flex-row-reverse">
                <FiPhone className="font-normal w-4 h-4 text-white md:text-primary-one" />
                <a href="#" className="flex items-center">
                    +98 060 712 34
                </a>
            </li>
            <li className="flex items-center gap-x-2 p-1 rtl:flex-row-reverse">
                <IoMailOpenOutline className="font-normal w-4 h-4 text-white md:text-primary-one" />
                <a href="#" className="flex items-center">
                    sendmail@creote.com
                </a>
            </li>
        </ul>
    );

    return (
        <Navbar className="header-top mx-auto max-w-full lg:h-[2.88rem] px-2 py-0 lg:px-4 bg-primary-two shadow-transparent border-0 rounded-none">
            <div className="py-2 mx-auto flex items-center justify-between text-white">
                <div className="hidden lg:flex items-center">
                    <Link to="#" className="get_a_quote hover:!text-white" target="_blank" rel="nofollow">احصل على عرض أسعار</Link>
                    <p>مرحباً بكم في شركتنا الاستشارية.</p>
                </div>
                <div className="mx-auto lg:mx-0">{navList}</div>
            </div>
        </Navbar>
    );
}