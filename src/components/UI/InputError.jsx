import PropTypes from "prop-types";

export default function InputError({ message = '', className = '', ...props }) {
    return (
        <p
            {...props}
            role="alert"
            className={`!mt-1 !text-sm !text-red-500 ${className}`}
        >
            {message}
        </p>
    );
}

InputError.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
};