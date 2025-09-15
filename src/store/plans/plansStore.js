// @ts-nocheck
import { create } from 'zustand';

const usePlansStore = create((set) => ({
    plans: null,
    loading: false,
    error: null,
    filters: {
        searchQuery: ''
    },
    currentPlan: null,

    fetchPlans: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch('/api/plans.json');
            if (!response.ok) throw new Error(`Failed to fetch plans: ${response.status}`);
            const data = await response.json();
            set({ plans: data, loading: false });
        } catch (err) {
            console.error('Error fetching plans:', err);
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

    setCurrentPlan: (plan) => {
        set({ currentPlan: plan });
    },
}));

export default usePlansStore;
