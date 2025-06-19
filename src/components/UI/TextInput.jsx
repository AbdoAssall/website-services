import PropTypes from "prop-types";
// import { forwardRef } from 'react';

export default function TextInput({
    type = 'text', placeholder = '', className = '', id = '', name = '', ...props },
) {
    return (
        <input
            {...props}
            type={type}
            id={id}
            name={name}
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-primary-one focus:ring-primary-one ' +
                className
            }
            placeholder={placeholder}
        />
    );
};

TextInput.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
}