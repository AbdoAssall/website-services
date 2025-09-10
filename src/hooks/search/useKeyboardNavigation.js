// @ts-nocheck
import { useState, useEffect } from 'react';

/**
 * A hook to manage list navigation using the keyboard.
 * @param {object} config - The hook's configuration.
 * @param {number} config.itemCount - The number of items in the list.
 * @param {Function} config.onEnter - A callback function invoked when the Enter key is pressed.
 * @param {React.RefObject} config.scrollRef - The ref for the scrollable container.
 * @returns {[number, Function]} - The active index and a function to set it.
 */
export const useKeyboardNavigation = ({ itemCount, onEnter, scrollRef }) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    // Reset the index when the number of items changes (e.g., a new search starts)
    useEffect(() => {
        setActiveIndex(-1);
    }, [itemCount]);

    // Effect for listening to keyboard presses
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (itemCount === 0) return;

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    setActiveIndex(prev => (prev + 1) % itemCount);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setActiveIndex(prev => (prev - 1 + itemCount) % itemCount);
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (activeIndex > -1) {
                        onEnter(activeIndex);
                    }
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [itemCount, activeIndex, onEnter]);

    // Effect to scroll the active item into view
    useEffect(() => {
        if (activeIndex > -1 && scrollRef.current) {
            scrollRef.current.children[activeIndex]?.scrollIntoView({
                block: 'nearest'
            });
        }
    }, [activeIndex, scrollRef]);

    return [activeIndex, setActiveIndex];
};