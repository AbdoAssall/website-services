export default function PrimaryButton({
    className = '',
    disabled,
    children,
    type ='button',
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `text-center border border-primary-one rounded-none rounded-tl-[0.625rem] rounded-br-[0.625rem] bg-primary-one px-4 py-4 !text-md font-semibold !font-spartan uppercase tracking-widest text-white hover:bg-transparent hover:text-primary-one hover:rounded-none hover:rounded-tr-[0.625rem] hover:rounded-bl-[0.625rem] transition duration-200 ease-in-out cursor-pointer ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
