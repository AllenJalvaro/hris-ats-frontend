export const hasServiceAccess = (serviceName, allowedServices) =>
  allowedServices.includes(serviceName);

export const hasFeatureAccess = (featureName, allowedFeatures) =>
  allowedFeatures.includes(featureName);
