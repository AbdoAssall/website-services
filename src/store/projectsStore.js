import { create } from 'zustand';

const useProjectsStore = create((set) => ({
    projects: null,
    loading: false,
    error: null,

    fetchProjects: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch('api/projects.json');
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
}));
export default useProjectsStore;
