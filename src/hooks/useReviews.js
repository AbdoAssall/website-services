// @ts-nocheck
import { useEffect, useMemo } from "react";
import useReviewsStore from "../store/reviewsStore";

const useReviews = () => {
    // 1. Destructure from store
    const {
        reviews,
        fetchReviews,
        loading,
        error,
        filters,
        setFilters, 
        resetFilters,
        setCurrentReview, 
    } = useReviewsStore();

    // 2. Fetch reviews if they don't exist
    useEffect(() => {
        if (!reviews || reviews.length === 0) {
            fetchReviews();
        }
    }, [reviews, fetchReviews]);

    // 3. Filter Logic
    const filteredReviews = useMemo(() => {
        if (!reviews) return [];

        return reviews.filter(review => {
            // Search query filter logic
            const query = filters?.searchQuery?.toLowerCase() || '';
            const matchesSearch = review.name
                ? review.name.toLowerCase().includes(query)
                : true;

            return matchesSearch;
        });
    }, [reviews, filters]);

    return {
        reviews, // Return raw reviews
        filteredReviews, // Return filtered reviews
        loading,
        error,
        setFilters,
        resetFilters,
        setCurrentReview,
    };
};

export default useReviews;