export const translateProjects = (projects: any[], language: string) => {
  return projects.map((project) => {
    const langData = project[language] || project.ar;
    return {
      ...project,
      ...langData,
    };
  });
  // return projects.map((project: Project) => {
  //     const fallbackLang = "ar";
  //   const langData = project[language] || project[fallbackLang] || {};

  //   return {
  //     ...project,
  //     name: langData.name || project[fallbackLang]?.name,
  //     category: langData.category || project[fallbackLang]?.category,
  //     description: langData.description || project[fallbackLang]?.description,
  //     client: langData.client || project[fallbackLang]?.client,
  //     challenge: langData.challenge || project[fallbackLang]?.challenge,
  //     solution: langData.solution || project[fallbackLang]?.solution,
  //     result: langData.result || project[fallbackLang]?.result,
  //   };
  // });
};
