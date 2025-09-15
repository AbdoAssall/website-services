export const translatePlans = (translatePlans: any[], language: string) => {
  if (!translatePlans || !Array.isArray(translatePlans)) {
    return [];
  }

  return translatePlans.map((plan) => {
    const langData = plan[language] || plan.ar;
    return {
      ...plan,
      ...langData,
    };
  });
};
