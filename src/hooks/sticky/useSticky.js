import { useState, useEffect, useRef } from 'react';

export const useSticky = () => {
    const [isSticky, setSticky] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const lastScrollY = useRef(0);
    const targetRef = useRef(null);

    // Effect for determining scroll direction (up or down)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            lastScrollY.current = currentScrollY;
        };

        // Only add the scroll listener if the navbar is in its sticky state
        if (isSticky) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSticky]); // Rerun effect when isSticky changes

    // Effect for using IntersectionObserver to toggle the sticky state
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Set sticky to true when the target is NOT intersecting (i.e., scrolled past)
                setSticky(!entry.isIntersecting);
            },
            // Trigger when the target is completely off-screen at the top
            { rootMargin: '-1px 0px 0px 0px', threshold: 1.0 }
        );

        const currentRef = targetRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return { targetRef, isSticky, scrollDirection };
};