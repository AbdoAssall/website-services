export const translateServices = (services: any[], language: string) => {
  if (!services || !Array.isArray(services)) {
    return [];
  }

  return services.map((service) => {
    const langData = service[language] || service.ar;
    return {
      ...service,
      ...langData,
    };
  });
};
