// @ts-nocheck
/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function Textarea(
    { className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <textarea
            {...props}
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-primary-one focus:ring-primary-one' +
                className
            }
            ref={localRef}
        >
        </textarea>
    );
});
