import { Link } from "react-router-dom";

export default function PrimaryButton({
    className = '',
    ariaLabel,
    children,
    to = "#",
    ...props
}) {
    return (
        <Link
        aria-label={ariaLabel}
            {...props}
            to={to}
            className={
                `px-5 sm:px-7 py-4 sm:py-4.5 text-center block border border-primary-one rounded-none rounded-tl-[0.625rem] rounded-br-[0.625rem] !bg-primary-one !text-md sm:!text-base font-semibold !font-spartan capitalize tracking-widest text-nowrap whitespace-nowrap !text-white hover:!bg-transparent hover:!text-primary-one hover:rounded-none hover:rounded-tr-[0.625rem] hover:rounded-bl-[0.625rem] transition-all duration-500 ease-in-out cursor-pointer ${className}`
            }
        >
            {children}
        </Link>
    );
}
