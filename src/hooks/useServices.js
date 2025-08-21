// @ts-nocheck
import { useEffect, useMemo } from "react";
import { useLanguage } from "../store/LanguageContext";
import useServicesStore from "../store/servicesStore";
import { translateServices } from "@utils/translateServices";

const useServices = () => {
    const { language } = useLanguage();
    const {
        services,
        fetchServices,
        loading,
        error,
        filters,
        setFilters,
        resetFilters,
        setCurrentService,
    } = useServicesStore();

    useEffect(() => {
        if (!services || services.length === 0) {
            fetchServices();
        }
    }, [services, fetchServices]);

    const translatedServices = useMemo(() => {
        if (!services) return [];
        return translateServices(services, language);
    }, [services, language]);

    // Step 3: Memoize filtered services based on the current filters in the store
    const filteredServices = useMemo(() => {
        return translatedServices.filter(service => {
            // Search query filter logic
            const matchesSearch = filters.searchQuery
                ? service.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
                : true;

            return matchesSearch;
        });
    }, [translatedServices, filters]);

    const getServiceBySlug = (slug) => {
        return translatedServices.find(s => s.slug === slug) || null;
    };

    return {
        services: translatedServices, // All translated services
        filteredServices, // All filtered services
        loading,
        error,
        // Actions from the store to be used by components
        setFilters,
        resetFilters,
        setCurrentService,
        getServiceBySlug,
    };
};

export default useServices;
