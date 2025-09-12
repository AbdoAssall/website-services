import { useEffect } from 'react';

/**
 * A custom hook that executes a callback function when the window width
 * meets or exceeds a specified breakpoint.
 * @param {number} breakpoint - The width in pixels to check against.
 * @param {() => void} callback - The function to call when the condition is met.
 */
export const useBreakpointEffect = (breakpoint, callback) => {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= breakpoint) {
                callback();
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint, callback]); // Rerun effect if breakpoint or callback changes
};