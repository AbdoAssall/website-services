// @ts-nocheck
import { useEffect, useMemo } from "react";
import { useLanguage } from "../store/LanguageContext";
import { translateProjects } from "../utils/translateProjects";
import useProjectsStore from "../store/projectsStore";
import { slugify } from "@utils/slugify";

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

    const translated = useMemo(() => {
        if (!projects) return [];
        return translateProjects(projects, language);
    }, [projects, language]);

    const filtered = useMemo(() => {
        return translated.filter(project => {
            const matchesCategory = filters.category ? project.category === filters.category : true;
            const matchesSearch = filters.searchQuery
                ? project.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
                : true;
            return matchesCategory && matchesSearch;
        });
    }, [translated, filters]);

    const getProjectById = (id) => {
        return translated.find(p => String(p.id) === String(id)) || null;
    };

    const getProjectBySlug = (slug) => {
        return translated.find(p => slugify(p.name) === slug) || null;
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
