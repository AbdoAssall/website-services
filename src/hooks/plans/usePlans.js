// @ts-nocheck
import { useEffect, useMemo } from "react";
import { useLanguage } from "@store/LanguageContext";
import usePlansStore from "@store/plans/plansStore";
import { translatePlans } from "@utils/translation/translatePlans";

const usePlans = () => {
    const { language } = useLanguage();
    const {
        plans,
        fetchPlans,
        loading,
        error,
        filters,
        setFilters,
        resetFilters,
        setCurrentPlan,
    } = usePlansStore();

    useEffect(() => {
        if (!plans || plans.length === 0) {
            fetchPlans();
        }
    }, [plans, fetchPlans]);

    const translatedPlans = useMemo(() => {
        if (!plans) return [];
        return translatePlans(plans, language);
    }, [plans, language]);

    // Step 3: Memoize filtered plans based on the current filters in the store
    const filteredPlans = useMemo(() => {
        return translatedPlans.filter(plan => {
            // Search query filter logic
            const matchesSearch = filters.searchQuery
                ? plan.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
                : true;

            return matchesSearch;
        });
    }, [translatedPlans, filters]);

    const getPlanById = (id) => {
        return translatedPlans.find(p => String(p.id) === String(id)) || null;
    };

    return {
        plans: translatedPlans, // All translated plans
        filteredPlans, // All filtered plans
        loading,
        error,
        // Actions from the store to be used by components
        setFilters,
        resetFilters,
        setCurrentPlan,
        getPlanById
    };
};

export default usePlans;
