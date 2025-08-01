// @ts-nocheck
import { useEffect, useMemo } from "react";
import { useLanguage } from "../store/LanguageContext";
import { translateProjects } from "../utils/translateProjects";
import useProjectsStore from "../store/projectsStore";

const useProjects = () => {
    const { language } = useLanguage();
    // const [projectsData, setProjectsData] = useState({ projects: [] });
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const { projects, fetchProjects, loading, error } = useProjectsStore();

    useEffect(() => {
        if (!projects) fetchProjects();
    }, [projects, fetchProjects]);

    const translated = useMemo(() => {
        if (!projects) return [];
        return translateProjects(projects, language);
    }, [projects, language]);

    return {
        projects: translated,
        loading,
        error,
    };
};

export default useProjects;
