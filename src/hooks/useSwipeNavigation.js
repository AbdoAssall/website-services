import { useRef, useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for handling swipe/drag navigation in carousels and sliders
 * 
 * @param {Object} options Configuration options
 * @param {number} options.itemCount Total number of items to navigate between
 * @param {number} options.initialIndex Starting index (defaults to 0)
 * @param {number} options.swipeThreshold Minimum distance in pixels to trigger a swipe (defaults to 50)
 * @param {boolean} options.enableAutoplay Whether to enable autoplay (defaults to true)
 * @param {number} options.autoplayInterval Time between auto-slides in ms (defaults to 7000)
 * @param {boolean} options.pauseOnHover Whether to pause autoplay on hover (defaults to false)
 * @param {function} options.onSwipe Optional callback when swipe occurs (receives direction: 'left'|'right')
 * @returns {Object} Hook methods and state
 */

const useSwipeNavigation = ({
    itemCount,
    initialIndex = 0,
    swipeThreshold = 50,
    enableAutoplay = true,
    autoplayInterval = 7000,
    pauseOnHover = false,
    onSwipe
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isAutoPlaying, setIsAutoPlaying] = useState(enableAutoplay);

    // Swipe functionality refs
    const autoPlayRef = useRef(null);
    const startXRef = useRef(null);
    const isDraggingRef = useRef(false);
    const elementRef = useRef(null);

    // Navigation methods
    const goToNext = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % itemCount);
        if (onSwipe) onSwipe('left');
    }, [itemCount, onSwipe])

    const goToPrev = useCallback(() => {
        setCurrentIndex(prev => (prev - 1 + itemCount) % itemCount);
        if (onSwipe) onSwipe('right');
    }, [itemCount, onSwipe])

    const goToIndex = useCallback((index) => {
        if (index >= 0 && index < itemCount) {
            setCurrentIndex(index);
            resetAutoplayTimer();
        }
    }, [itemCount])

    // Handle autoplay
    useEffect(() => {
        if (isAutoPlaying) {
            resetAutoplayTimer();
        } else if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }

        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isAutoPlaying, itemCount]);

    const resetAutoplayTimer = useCallback(() => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);

        if (enableAutoplay) {
            autoPlayRef.current = setInterval(() => {
                goToNext();
            }, autoplayInterval)
        }
    }, [enableAutoplay, autoplayInterval, goToNext])

    // Mouse event handlers
    const handleMouseDown = useCallback((e) => {
        startXRef.current = e.clientX;
        isDraggingRef.current = true;
        setIsAutoPlaying(false);

        if (elementRef.current) {
            elementRef.current.style.cursor = 'grabbing';
        }
    }, []);

    // const handleMouseMove = useCallback((e) => {
    // Optional: add visual feedback during dragging if needed
    // }, []);

    const handleMouseUp = useCallback((e) => {
        if (!isDraggingRef.current || startXRef.current === null) return;

        const endX = e.clientX;
        const diffX = startXRef.current - endX;

        if (diffX > swipeThreshold) {
            goToNext();
        } else if (diffX < -swipeThreshold) {
            goToPrev();
        }

        startXRef.current = null;
        isDraggingRef.current = false;
        setIsAutoPlaying(enableAutoplay);

        if (elementRef.current) {
            elementRef.current.style.cursor = 'grab';
        }
    }, [swipeThreshold, goToNext, goToPrev, enableAutoplay]);

    const handleMouseLeave = useCallback(() => {
        if (isDraggingRef.current) {
            isDraggingRef.current = false;
            startXRef.current = null;
            setIsAutoPlaying(enableAutoplay);

            // Resume autoplay when mouse leaves (if enabled)
            if (enableAutoplay && pauseOnHover) {
                setIsAutoPlaying(true);
            }

            if (elementRef.current) {
                elementRef.current.style.cursor = 'grab';
            }
        }
    }, [enableAutoplay, pauseOnHover]);

    // Touch event handlers
    const handleTouchStart = useCallback((e) => {
        startXRef.current = e.touches[0].clientX;
        isDraggingRef.current = true;
        setIsAutoPlaying(false);
    }, []);

    // const handleTouchMove = useCallback((e) => {
    // Optional: add visual feedback during touch dragging if needed
    // }, []);

    const handleTouchEnd = useCallback((e) => {
        if (!isDraggingRef.current || startXRef.current === null) return;

        const endX = e.changedTouches[0].clientX;
        const diffX = startXRef.current - endX;

        if (diffX > swipeThreshold) {
            goToNext();
        } else if (diffX < -swipeThreshold) {
            goToPrev();
        }

        startXRef.current = null;
        isDraggingRef.current = false;
        setIsAutoPlaying(enableAutoplay);
    }, [swipeThreshold, goToNext, goToPrev, enableAutoplay]);

    // Hover handlers for autoplay control
    const handleMouseEnter = useCallback(() => {
        if (pauseOnHover && enableAutoplay) {
            setIsAutoPlaying(false);
        }
    }, [pauseOnHover, enableAutoplay]);

    const handleHoverEnd = useCallback(() => {
        if (pauseOnHover && enableAutoplay && !isDraggingRef.current) {
            setIsAutoPlaying(true);
        }
    }, [pauseOnHover, enableAutoplay]);

    // Autoplay controls
    const pauseAutoplay = useCallback(() => {
        setIsAutoPlaying(false);
    }, []);

    const resumeAutoplay = useCallback(() => {
        if (enableAutoplay) {
            setIsAutoPlaying(true);
        }
    }, [enableAutoplay]);

    // Generate props to spread onto the container element
    const getSwipeHandlerProps = useCallback(() => ({
        ref: elementRef,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseLeave,
        onMouseEnter: handleMouseEnter,
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        // onTouchMove: handleTouchMove,
        // onMouseMove: handleMouseMove,
        style: { cursor: 'grab' }
    }), [
        handleMouseDown,
        // handleMouseMove,
        handleMouseUp,
        handleMouseLeave,
        handleMouseEnter,
        handleTouchStart,
        // handleTouchMove,
        handleTouchEnd
    ]);

    return {
        currentIndex,
        isAutoPlaying,
        goToNext,
        goToPrev,
        goToIndex,
        pauseAutoplay,
        resumeAutoplay,
        handleMouseEnter,
        handleMouseLeave: handleHoverEnd,
        getSwipeHandlerProps,
        elementRef
    };
};

export default useSwipeNavigation;