// @ts-nocheck
/* eslint-disable react/prop-types */
export default function InputLabel({
    value,
    className = '',
    htmlFor = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            htmlFor = {htmlFor}
            className={
                `block text-sm font-semibold font-spartan text-link-dark ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
