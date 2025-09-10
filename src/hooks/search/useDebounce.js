import { useState, useEffect } from 'react';

/**
 * A hook to delay updating a value (debouncing).
 * @param {any} value - The value you want to debounce.
 * @param {number} delay - The delay duration in milliseconds.
 * @returns {any} - The debounced value.
 */
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set up a timer to update the value after the delay has passed
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Clear the timer if the value changes (e.g., user continues typing)
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;