import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Split out detailed categories
  const [personalInfo, setPersonalInfo] = useState(null);
  const [designations, setDesignations] = useState([]);
  const [employmentInfo, setEmploymentInfo] = useState(null);
  const [salaryInfo, setSalaryInfo] = useState(null);
  const [hr201, setHr201] = useState(null);
  const [governmentIds, setGovernmentIds] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [emergencyContacts, setEmergencyContacts] = useState([]);

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    personalInfo,
    setPersonalInfo,
    designations,
    setDesignations,
    employmentInfo,
    setEmploymentInfo,
    salaryInfo,
    setSalaryInfo,
    hr201,
    setHr201,
    governmentIds,
    setGovernmentIds,
    addresses,
    setAddresses,
    emergencyContacts,
    setEmergencyContacts,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
