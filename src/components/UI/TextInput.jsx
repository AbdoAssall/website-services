// @ts-nocheck
import PropTypes from "prop-types";
import { forwardRef } from "react";

/**
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props
 * @param {React.ForwardedRef<HTMLInputElement>} ref
 */
const TextInput = forwardRef(({
    type = 'text',
    placeholder = '',
    className = '',
    id = '',
    name,
    ...props
}, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            type={type}
            id={id}
            name={name}
            className={
                'inline-block w-full px-4 py-2 !text-dark-one bg-white placeholder:!text-dark-two border border-gray-200 rounded-md shadow-sm focus:border-primary-one focus:ring-0 focus:ring-primary-one focus:outline-none transition-colors duration-200 font-inter text-base ' +
                className
            }
            placeholder={placeholder}
        />
    );
});

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

export default TextInput;