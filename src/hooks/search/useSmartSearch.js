// @ts-nocheck
import { useMemo } from 'react';
import useProjects from '../useProjects';
import useServices from '../useServices';
import useDebounce from './useDebounce';
import { useLanguage } from "@store/LanguageContext";

/**
 * A custom hook to perform a smart search across projects and services.
 * @param {string} query - The search query entered by the user.
 * @param {number} [debounceDelay=300] - The debounce delay duration.
 * @returns {{projects: Array, services: Array}}
 */
export const useSmartSearch = (query, debounceDelay = 300) => {
    const { language } = useLanguage();
    // 1. Get all project and service data
    const { projects } = useProjects();
    const { services } = useServices();

    // 2. Debounce the search query to improve performance
    const debouncedQuery = useDebounce(query, debounceDelay);

    // 3. Use useMemo to execute the search only when data or the query changes
    const results = useMemo(() => {
        // Don't search if the query is too short
        if (debouncedQuery.length < 2) {
            return { projects: [], services: [] };
        }

        const lowerCaseQuery = debouncedQuery.toLowerCase();

        // Filter projects by title and category
        const filteredProjects = projects.filter(p =>
            p[language]?.name.toLowerCase().includes(lowerCaseQuery) ||
            p[language]?.category.toLowerCase().includes(lowerCaseQuery)
        ).slice(0, 5); // Show the first 5 results only

        // Filter services by name
        const filteredServices = services.filter(s =>
            s[language]?.name.toLowerCase().includes(lowerCaseQuery)
        ).slice(0, 3); // Show the first 3 results only

        return { projects: filteredProjects, services: filteredServices };

    }, [debouncedQuery, projects, services, language]);

    return results;
};