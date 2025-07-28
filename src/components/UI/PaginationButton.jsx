import PropTypes from 'prop-types';

/**
 * @param {{
 *   children: React.ReactNode,
 *   onClick: () => void,
 *   active?: boolean,
 *   disabled?: boolean,
 *   ariaLabel?: string,
 *   className?: string
 * }} props,
 */

export const PaginationButton = ({
    children,
    onClick,
    active = false,
    disabled = false,
    ariaLabel = '',
    className: buttonClassName = ''
}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className={`
                relative inline-flex items-center justify-center min-w-[2.5rem] h-10 px-3 py-2
                text-sm font-medium transition-all duration-300 ease-in-out
                border border-border-dark-one rounded-md
                ${active
                ? 'bg-primary-one text-white border-primary-one shadow-md transform scale-105'
                : disabled
                    ? 'bg-gray-100 text-gray-400 !cursor-not-allowed'
                    : 'bg-white text-dark-one hover:bg-primary-one hover:text-white hover:border-primary-one hover:shadow-md hover:scale-105'
            }
                ${buttonClassName}
            `}
    >
        {children}
    </button>
);

PaginationButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    ariaLabel: PropTypes.string,
    className: PropTypes.string
};