import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DirectionContext from './context';

// Create a provider component
export function DirectionProvider({ defaultDirection = 'rtl', children }) {
    const [direction, setDirection] = useState(defaultDirection);

    // Effect to update document direction when context changes
    useEffect(() => {
        document.documentElement.dir = direction;
        document.documentElement.lang = direction === 'rtl' ? 'ar' : 'en';
        document.body.dir = direction;
    }, [direction]);

    // Function to toggle between RTL and LTR
    const toggleDirection = () => {
        setDirection(prevDirection => prevDirection === 'ltr' ? 'rtl' : 'ltr');
    };

    // Function to set specific direction
    const changeDirection = (newDirection) => {
        if (newDirection === 'rtl' || newDirection === 'ltr') {
            setDirection(newDirection);
        } else {
            console.warn('Invalid direction. Use "rtl" or "ltr".');
        }
    };

    // The value that will be provided to consumers
    const value = {
        direction,
        isRTL: direction === 'rtl',
        isLTR: direction === 'ltr',
        toggleDirection,
        changeDirection,
    };

    return (
        <DirectionContext.Provider value={value}>
            {children}
        </DirectionContext.Provider>
    );
}

// Add prop type validation
DirectionProvider.propTypes = {
    defaultDirection: PropTypes.oneOf(['ltr', 'rtl']),
    children: PropTypes.node.isRequired
};