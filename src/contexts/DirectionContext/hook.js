import { useContext } from 'react';
import DirectionContext from './context';

// Custom hook for consuming the context
export function useDirection() {
    const context = useContext(DirectionContext);

    if (context === undefined) {
        throw new Error('useDirection must be used within a DirectionProvider');
    }

    return context;
}