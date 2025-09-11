export const teamMembers = (teamMembers: any[], language: string) => {
  if (!teamMembers || !Array.isArray(teamMembers)) {
    return [];
  }

  return teamMembers.map((team) => {
    const langData = team[language] || team.ar;
    return {
      ...team,
      ...langData,
    };
  });
};
