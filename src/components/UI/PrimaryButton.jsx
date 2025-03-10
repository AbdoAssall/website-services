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
                `btn text-center rounded-md border border-transparent bg-primary-one px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-200 ease-in-out hover:bg-primary-one/95 cursor-pointer ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
