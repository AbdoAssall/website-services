// @ts-nocheck
import { useEffect, useMemo } from "react";
import { useLanguage } from "../store/LanguageContext";
import { translateProjects } from "../utils/translateProjects";
import useProjectsStore from "../store/projectsStore";

const useProjects = () => {
    const { language, t } = useLanguage();
    const {
        projects,
        fetchProjects,
        loading,
        error,
        currentPage,
        itemsPerPage,
        filters,
        setCurrentPage,
        setItemsPerPage,
        setFilters,
        resetFilters,
        setCurrentProject
    } = useProjectsStore();

    useEffect(() => {
        if (!projects || projects.length === 0) fetchProjects();
    }, [projects, fetchProjects]);

    // Step 1: Memoize translated projects
    const translatedProjects = useMemo(() => {
        if (!projects) return [];
        return translateProjects(projects, language);
    }, [projects, language]);

    // Step 2: Memoize the list of unique categories
    const viewAllLabel = t('projects.viewAll');
    const categories = useMemo(() =>
        [viewAllLabel, ...new Set(translatedProjects.map(project => project.category))],
        [viewAllLabel, translatedProjects]
    );

    // Step 3: Memoize filtered projects based on the current filters in the store
    const filteredProjects = useMemo(() => {
        return translatedProjects.filter(project => {
            // Category filter logic
            const matchesCategory = !filters.category || filters.category === viewAllLabel
                ? true // If no filter OR the filter is 'View All', it's a match
                : project.category === filters.category; // Otherwise, check for a specific category match

            // Search query filter logic
            const matchesSearch = filters.searchQuery
                ? project.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
                : true;

            return matchesCategory && matchesSearch;
        });
    }, [translatedProjects, filters, viewAllLabel]);

    // 4. Calculate pagination based on the *filtered* projects list
    const paginatedData = useMemo(() => {
        const totalProjects = filteredProjects.length;
        const totalPages = Math.ceil(totalProjects / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return {
            // This is the final list of projects for the current page
            currentProjects: filteredProjects.slice(startIndex, endIndex),
            totalPages,
            totalProjects,
            startIndex,
            endIndex
        };
    }, [filteredProjects, currentPage, itemsPerPage]);

    // useEffect(() => {
    //     setCurrentPage(1);
    // }, [filters.category, setCurrentPage]);

    const getProjectById = (id) => {
        return translatedProjects.find(p => String(p.id) === String(id)) || null;
    };

    const getProjectBySlug = (slug) => {
        return translatedProjects.find(p => p.slug == slug) || null;
    };

    return {
        // Data for display
        projects: translatedProjects, // All translated projects
        filteredProjects, // All filtered projects
        paginatedProjects: paginatedData, // Paginated data object
        currentProjects: paginatedData.currentProjects, // The projects for the current page
        totalPages: paginatedData.totalPages, // Total pages for the pagination component
        totalProjects: paginatedData.totalProjects,
        startIndex: paginatedData.startIndex,
        endIndex: paginatedData.endIndex,
        categories,
        // State from the store
        loading,
        error,
        currentPage,
        itemsPerPage,
        filters,
        // Actions from the store to be used by components
        setCurrentPage,
        setItemsPerPage,
        setFilters,
        resetFilters,
        setCurrentProject,
        getProjectById,
        getProjectBySlug,
        fetchProjects
    };
};

export default useProjects;
