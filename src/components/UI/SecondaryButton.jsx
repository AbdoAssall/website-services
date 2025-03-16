export default function SecondaryButton({
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
                ` px-12 py-4 text-center rounded-none rounded-tr-[0.625rem] rounded-bl-[0.625rem] bg-primary-two !text-base font-semibold !font-spartan uppercase tracking-widest text-white hover:bg-white hover:text-primary-one hover:rounded-none hover:rounded-tr-[0.625rem] hover:rounded-bl-[0.625rem] transition-all duration-300 ease-in-out cursor-pointer ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
