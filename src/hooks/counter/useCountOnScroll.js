// @ts-nocheck
import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook to animate numbers counting up when the component scrolls into view.
 * @param {Array} initialCounters - An array of counter objects, each with a 'target' number.
 * @param {Object} options - Configuration for the animation.
 * @param {number} options.duration - The total animation duration in milliseconds.
 * @param {number} options.steps - The number of steps in the animation.
 * @returns {[React.RefObject, Array]} - A ref to attach to the target element and the array of counters with their current values.
 */
const useCountOnScroll = (initialCounters, { duration = 2000, steps = 100 } = {}) => {
    const [counters, setCounters] = useState(
        initialCounters.map(counter => ({ ...counter, current: 0 }))
    );
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const counterObserver = (entries, observer) => {
            const [entry] = entries;

            if (entry.isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                observer.unobserve(entry.target); // Stop observing to save resources.
            };
        };

        const observer = new IntersectionObserver(counterObserver, {
            root: null,
            threshold: 0.7
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        // Cleanup function to unobserve the element.
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasAnimated]);

    // This effect runs the counting animation once `hasAnimated` becomes true.
    useEffect(() => {
        if (!hasAnimated) return;

        const interval = duration / steps;

        const timers = counters.map((counter, index) => {
            let currentStep = 0
            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;
                // Using an ease-out functio
                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                const newCurrentValue = Math.floor(counter.target * easeOutCubic);

                setCounters(prev => {
                    const newCounters = [...prev];
                    newCounters[index] = {
                        ...newCounters[index],
                        current: Math.min(newCurrentValue, counter.target),
                    };
                    return newCounters;
                });

                if (currentStep >= steps) {
                    setCounters(prev => {
                        const finalCounters = [...prev];
                        finalCounters[index] = { ...finalCounters[index], current: counter.target };
                        return finalCounters;
                    });
                    clearInterval(timer);
                }
            }, interval);
            return timer
        })
        // Cleanup: clear all timers if the component unmounts.
        return () => timers.forEach(timer => clearInterval(timer));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasAnimated, duration, steps]);

    return [ref, counters];
};

export default useCountOnScroll;