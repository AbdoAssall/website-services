import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === "/";

    // Helper function to scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Check if nav item should be active
    const isNavItemActive = useCallback((item) => {
        if (item.isScrollLink && isHomePage) {
            return isHomePage;
        } else if (!item.isScrollLink) {
            return location.pathname === item.to;
        }
        return false;
    }, [isHomePage, location.pathname]);

    // Handle navigation to scroll sections
    const handleScrollNavigation = useCallback((sectionId) => {
        if (isHomePage) {
            scrollToSection(sectionId);
        } else {
            navigate("/", { state: { scrollTo: sectionId } });
        }
    }, [isHomePage, navigate]);

    // Handle regular navigation
    const handleRegularNavigation = useCallback((path) => {
        navigate(path);
    }, [navigate]);

    // Handle navigation click events
    const handleNavClick = useCallback((item, e) => {
        if (item.isScrollLink) {
            e.preventDefault();
            handleScrollNavigation(item.to);
        } else {
            handleRegularNavigation(item.to);
        }
    }, [handleScrollNavigation, handleRegularNavigation]);

    // Handle scroll on page load
    const handlePageLoadScroll = useCallback((scrollTo) => {
        if (scrollTo && isHomePage) {
            setTimeout(() => {
                scrollToSection(scrollTo);
            }, 700);

            // Clear the state after scrolling
            navigate(location.pathname, { replace: true });
        }
    }, [isHomePage, navigate, location.pathname]);

    return {
        isHomePage,
        isNavItemActive,
        handleNavClick,
        handlePageLoadScroll,
        location
    };
};