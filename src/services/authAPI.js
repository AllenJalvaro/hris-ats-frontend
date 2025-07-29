import api from "@/config/api";

export const loginUser = async ({ email, password }) => {
  const response = await api.post("/api/auth/login", {
    user_email: email,
    password,
  });

  return response.data; 
};

