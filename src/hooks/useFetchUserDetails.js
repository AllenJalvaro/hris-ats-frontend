import fetchLoggedInUserDetails from "@/services/fetchLoggedInUserDetailsAPI";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export const useFetchLoggedInUserDetails = (userId) => {
  const {
    setUser,
    setLoading,
    setPersonalInfo,
    setDesignations,
    setEmploymentInfo,
    setSalaryInfo,
    setHr201,
    setGovernmentIds,
    setAddresses,
    setEmergencyContacts,
  } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      setLoading(true);

      try {
        const data = await fetchLoggedInUserDetails({ user_id: userId });
        console.log("Fetched user details:", data);

        if (data?.users) {
          const user = data.users;

          setUser(user);
          setPersonalInfo(user.HrisUserInfo);
          setDesignations(user.HrisUserDesignations);
          setEmploymentInfo(user.HrisUserEmploymentInfo);
          setSalaryInfo(user.HrisUserSalary);
          setHr201(user.HrisUserHr201);
          setGovernmentIds(user.HrisUserGovernmentIds);
          setAddresses(user.HrisUserAddresses);
          setEmergencyContacts(user.HrisUserEmergencyContacts);
        }
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [
    userId,
    setUser,
    setLoading,
    setPersonalInfo,
    setDesignations,
    setEmploymentInfo,
    setSalaryInfo,
    setHr201,
    setGovernmentIds,
    setAddresses,
    setEmergencyContacts,
  ]);
};
export default useFetchLoggedInUserDetails;
