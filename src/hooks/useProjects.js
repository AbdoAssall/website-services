// @ts-nocheck
import { useEffect, useMemo } from "react";
import { useLanguage } from "../store/LanguageContext";
import { translateProjects } from "../utils/translateProjects";
import useProjectsStore from "../store/projectsStore";

const useProjects = () => {
    const { language } = useLanguage();
    const {
        projects,
        fetchProjects,
        loading,
        error,
        filters,
        setFilters,
        resetFilters,
        setCurrentProject
    } = useProjectsStore();

    useEffect(() => {
        if (!projects || projects.length === 0) fetchProjects();
    }, [projects, fetchProjects]);

    const processedProjects = useMemo(() => {
        if (!projects) return [];
        return translateProjects(projects, language);
    }, [projects, language]);

    const filtered = useMemo(() => {
        return processedProjects.filter(project => {
            const matchesCategory = filters.category ? project.category === filters.category : true;
            const matchesSearch = filters.searchQuery
                ? project.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
                : true;
            return matchesCategory && matchesSearch;
        });
    }, [processedProjects, filters]);

    const getProjectById = (id) => {
        return processedProjects.find(p => String(p.id) === String(id)) || null;
    };

    const getProjectBySlug = (slug) => {
        return processedProjects.find(p => p.slug == slug) || null;
    };

    return {
        projects: filtered,
        loading,
        error,
        filters,
        setFilters,
        resetFilters,
        setCurrentProject,
        getProjectById,
        getProjectBySlug,
        fetchProjects
    };
};

export default useProjects;
