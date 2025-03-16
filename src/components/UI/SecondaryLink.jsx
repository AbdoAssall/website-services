import { Link } from "react-router-dom";

export default function SecondaryLink({
    className = '',
    children,
    to = "#",
    ...props
}) {
    return (
        <Link
            {...props}
            to={to}
            className={
                `!px-8 sm:!px-12 !py-5 text-center rounded-none rounded-tr-[0.625rem] rounded-bl-[0.625rem] bg-primary-two text-md sm:!text-base !font-medium !font-spartan uppercase tracking-widest text-white hover:bg-white hover:!text-primary-one hover:rounded-none hover:rounded-tl-[0.625rem] hover:rounded-br-[0.625rem] transition-all duration-300 ease-in-out ${className}`  
            }
        >
            {children}
        </Link>
    );
}
