import { createContext } from 'react';

// Create the context with default value
const DirectionContext = createContext({
    direction: 'rtl',
    isRTL: true,
    isLTR: false,
    toggleDirection: () => {},
    changeDirection: () => {}
  });

export default DirectionContext;