// @ts-nocheck
import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@store/LanguageContext';

/**
 * Custom hook to handle projects filtering and pagination logic
 * @param {Array} projects - Array of project objects
 * @param {number} itemsPerPage - Number of items per page
 * @returns {Object} - Object containing all the state and handlers
 */
const useProjectsFilter = (projects = [], itemsPerPage = 6) => {
    const { t } = useLanguage();
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // Extract unique categories from projects
    const viewAllLabel = t('projects.viewAll');
    const categories = useMemo(() =>
        [viewAllLabel, ...new Set(projects.map(project => project.category))],
        [viewAllLabel, projects]
    );
    const [activeTab, setActiveTab] = useState(viewAllLabel);

    useEffect(() => {
        if (!categories.includes(activeTab) || activeTab === t('projects.viewAll', { lng: undefined, defaultValue: activeTab })) {
            setActiveTab(viewAllLabel);
        }
    }, [viewAllLabel, activeTab, categories, t]);

    // Filter projects based on active tab
    const filteredProjects = activeTab === viewAllLabel
        ? projects
        : projects.filter(project => project.category === activeTab);

    // Calculate pagination
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    // Reset to page 1 when changing tabs
    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab]);

    // Handle tab change with animation
    const handleTabChange = (category = '') => {
        if (category === activeTab) return;

        setIsAnimating(true);

        // First phase: zoom out and fade out
        setTimeout(() => {
            setActiveTab(category);
        }, 250); // Half of the transition duration

        // Second phase: zoom in and fade in
        setTimeout(() => {
            setIsAnimating(false);
        }, 500); // Full transition duration
    };

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return {
        // State
        activeTab,
        categories,
        isAnimating,
        currentPage,
        totalPages,
        filteredProjects,
        currentProjects,
        startIndex,
        endIndex,

        // Handlers
        handleTabChange,
        handlePageChange
    };
};

export default useProjectsFilter;