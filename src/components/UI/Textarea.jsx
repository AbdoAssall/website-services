// @ts-nocheck
/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const Textarea = forwardRef(function Textarea(
    {
        className = '',
        ...props
    },
    ref,
) {
    return (
        <textarea
            {...props}
            className={
                'w-full px-4 py-3 !text-dark-one border border-gray-200 rounded-md shadow-sm focus:border-primary-one focus:ring-0 focus:ring-primary-one focus:outline-none transition-colors duration-200 font-inter text-base resize-none ' +
                className
            }
            ref={ref}
        />
    );
});

Textarea.displayName = 'Textarea';

export default Textarea;