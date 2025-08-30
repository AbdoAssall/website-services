// @ts-nocheck
import { useEffect, useMemo } from "react";
import { useLanguage } from "../store/LanguageContext";
import useTeamsStore from "../store/TeamsStore";
import { teamMembers } from "@utils/teamMembers ";

const useTeams = () => {
    const { language } = useLanguage();
    const {
        teams,
        fetchTeams,
        loading,
        error,
        filters,
        setFilters,
        resetFilters,
        setCurrentTeam,
    } = useTeamsStore();

    useEffect(() => {
        if (!teams || teams.length === 0) {
            fetchTeams();
        }
    }, [teams, fetchTeams]);

    const translatedTeams = useMemo(() => {
        if (!teams) return [];
        return teamMembers(teams, language);
    }, [teams, language]);

    // Step 3: Memoize filtered teams based on the current filters in the store
    const filteredTeams = useMemo(() => {
        return translatedTeams.filter(team => {
            // Search query filter logic
            const matchesSearch = filters.searchQuery
                ? team.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
                : true;

            return matchesSearch;
        });
    }, [translatedTeams, filters]);

    return {
        teamMembers: translatedTeams, // All translated teams
        filteredTeams, // All filtered teams
        loading,
        error,
        // Actions from the store to be used by components
        setFilters,
        resetFilters,
        setCurrentTeam,
    };
};

export default useTeams;
