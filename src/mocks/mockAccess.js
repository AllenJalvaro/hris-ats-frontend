export const services = ["HRIS", "ATS"];

export const features = [
  { service: "HRIS", feature: "Dashboard", path: "/hris" },
  { service: "HRIS", feature: "Employees", path: "/hris-employees" },
  { service: "HRIS", feature: "Configurations", path: "/hris-configurations" },
  { service: "ATS", feature: "Dashboard", path: "/ats" },
  { service: "ATS", feature: "Configurations", path: "/ats-configurations" },
];

export const users = [
  {
    id: "u1",
    name: "Benz Atencion",
    email: "benz@example.com",
    role: "SUPERADMIN",
    serviceAccess: ["HRIS", "ATS"],
    featureAccess: features.map((f) => f.path), // Full access
  },
  {
    id: "u2",
    name: "Jane User",
    email: "jane@example.com",
    role: "USER",
    serviceAccess: ["HRIS"],
    featureAccess: ["/hris", "/hris-employees"], // Limited access
  },
];

// simulate current logged-in user
export const loggedInUser = users[1]; // Toggle between users[0] or users[1]
