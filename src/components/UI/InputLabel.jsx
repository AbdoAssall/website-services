// @ts-nocheck
/* eslint-disable react/prop-types */
export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-semibold font-spartan text-link-dark ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
