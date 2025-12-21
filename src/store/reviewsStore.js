// @ts-nocheck
import { create } from 'zustand';

const useReviewsStore = create((set) => ({
    reviews: [],
    loading: false,
    error: null,
    filters: {
        searchQuery: ''
    },
    currentReview: null,

    fetchReviews: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch('/api/reviews.json');
            if (!response.ok) throw new Error(`Failed to fetch reviews: ${response.status}`);
            const data = await response.json();
            set({ reviews: data, loading: false });
        } catch (err) {
            console.error('Error fetching reviews:', err);
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

    setCurrentReview: (service) => {
        set({ currentReview: service });
    },
}));

export default useReviewsStore;
