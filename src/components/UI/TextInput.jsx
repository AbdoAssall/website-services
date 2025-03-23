// @ts-nocheck
/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', placeholder = '', className = '', id = '', name = '', isFocused = false, ...props },
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
        <input
            {...props}
            type={type}
            id = {id}
            name= {name}
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-primary-one focus:ring-primary-one ' +
                className
            }
            ref={localRef}
            placeholder={placeholder}
        />
    );
});