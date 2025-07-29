import api from "@/config/api";

export const fetchLoggedInUserDetails = async ({ user_id }) => {
  try {
    // console.log("Fetching user details for user_id:", user_id);
    const response = await api.get(`/api/hris-user-accounts/${user_id}`);
    // console.log("User details fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user details:", error);
    return null;
  }
};

export default fetchLoggedInUserDetails;
