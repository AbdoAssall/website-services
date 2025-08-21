// @ts-nocheck
import { create } from 'zustand';

const useServicesStore = create((set, get) => ({
    services: null,
    loading: false,
    error: null,
    filters: {
        searchQuery: ''
    },
    currentService: null,

    fetchServices: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch('/api/services.json');
            if (!response.ok) throw new Error(`Failed to fetch services: ${response.status}`);
            const data = await response.json();
            set({ services: data, loading: false });
        } catch (err) {
            console.error('Error fetching services:', err);
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

    setCurrentService: (service) => {
        set({ currentService: service });
    },

    getServiceBySlug: (slug) => {
        const services = get().services || [];
        return services.find((s) => s.slug === slug) || null;
    },
}));

export default useServicesStore;
