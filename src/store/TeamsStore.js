// @ts-nocheck
import { create } from 'zustand';

const useTeamsStore = create((set) => ({
    teams: null,
    loading: false,
    error: null,
    filters: {
        searchQuery: ''
    },
    currentTeam: null,

    fetchTeams: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch('/api/teamMembers.json');
            if (!response.ok) throw new Error(`Failed to fetch teams: ${response.status}`);
            const data = await response.json();
            set({ teams: data, loading: false });
        } catch (err) {
            console.error('Error fetching teams:', err);
            set({ error: err.message, loading: false });
        }
    },

    // Set filters
    /**
         * @param {Partial<{searchQuery: string}>} filters
    */
    setFilters: (filters) => {
        set((state) => ({
            filters: { ...state.filters, ...filters }
        }));
    },

    // Reset filters
    resetFilters: () => {
        set({
            filters: { searchQuery: '' }
        });
    },

    setCurrentTeam: (service) => {
        set({ currentTeam: service });
    },
}));

export default useTeamsStore;
