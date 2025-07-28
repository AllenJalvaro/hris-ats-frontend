// export const getInitialPath = (featureAccess = []) => {
//   const preferredOrder = [
//     "/hris", 
//     "/hris-employees",
//     "/hris-configurations",
//     "/ats",
//     "/ats-configurations"
//   ];

//   const firstAvailable = preferredOrder.find((path) =>
//     featureAccess.includes(path)
//   );

//   return firstAvailable || "/unauthorized";
// };

export const getInitialPath = (accessPermissions = []) => {
  const preferredOrder = [
    "Employee Management",
    "Salary Processing",
    "Something Else"
  ];

  const first = preferredOrder.find(feature =>
    accessPermissions.includes(feature)
  );

  return first
    ? `/hris/${first.toLowerCase().replace(/\s+/g, "-")}`
    : "/unauthorized";
};
