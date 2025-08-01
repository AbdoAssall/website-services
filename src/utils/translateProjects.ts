interface Project {
  [key: string]: {
    name: string;
    category: string;
    description: string;
    client: string;
  };
}

export const translateProjects = (projects: Project[], language: string) => {
  return projects.map((project: Project) => ({
    ...project,
    name: project[language]?.name || project.ar.name,
    category: project[language]?.category || project.ar.category,
    description: project[language]?.description || project.ar.description,
    client: project[language]?.client || project.ar.client,
  }));
};
