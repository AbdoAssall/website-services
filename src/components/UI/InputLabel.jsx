// @ts-nocheck
/* eslint-disable react/prop-types */
export default function InputLabel({
    value,
    className = '',
    htmlFor = '',
    ...props
}) {
    return (
        <label
            {...props}
            htmlFor={htmlFor}
            className={
                `block text-sm font-semibold font-spartan text-link-dark tracking-wide ` +
                className
            }
        >
            {value}
        </label>
    );
}
