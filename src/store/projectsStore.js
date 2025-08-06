// @ts-nocheck
import { create } from 'zustand';

const useProjectsStore = create((set, get) => ({
    projects: null,
    loading: false,
    error: null,
    filters: {
        category: null,  // e.g. "Human Resources", "Training", etc.
        searchQuery: ''
    },
    currentProject: null,

    // Fetch all projects
    fetchProjects: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch('/api/projects.json');
            if (!response.ok) throw new Error(`Failed to fetch projects: ${response.status}`);
            const data = await response.json();
            set({ projects: data.projects, loading: false });
        } catch (err) {
            console.error('Error fetching projects:', err);
            set({ error: err.message, loading: false });
        } finally {
            set({ loading: false });
        }
    },

    // Set filters
    /**
         * @param {Partial<{category: string|null, searchQuery: string}>} filters
    */
    setFilters: (filters) => {
        set((state) => ({ filters: { ...state.filters, ...filters } }));
    },

    // Reset filters
    resetFilters: () => {
        set({ filters: { category: null, searchQuery: '' } });
    },

    /**
         * @param {object} project
     */
    // Set current project
    setCurrentProject: (project) => {
        set({ currentProject: project });
    },

    /**
     * @param {string|number} id
    */

    // Get project by ID
    getProjectById: (id) => {
        const projects = get().projects || [];
        return projects.find((p) => String(p.id) === String(id)) || null;
    },
}));
export default useProjectsStore;
