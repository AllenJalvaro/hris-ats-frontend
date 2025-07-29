import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuthStore } from "@/stores/useAuthStore";

import { useNavigate } from "react-router-dom";

export default function AuthInitializer({ children }) {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const logout = useAuthStore((state) => state.logout);
  const servicePermissions = useAuthStore((state) => state.servicePermissions);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && servicePermissions.length === 0) {
      try {
        const decoded = jwtDecode(token);

        // ⏳ Check if token is expired
        const currentTime = Date.now() / 1000; // in seconds
        if (decoded.exp && decoded.exp < currentTime) {
          console.warn("Token expired");
          localStorage.removeItem("token");
          logout();
          navigate("/login", { replace: true });
          return;
        }

        const servicePermissionNames = decoded.servicePermissions.map(
          (p) => p.service_name
        );
        const accessPermissionNames = decoded.accessPermissions.map(
          (p) => p.feature_name
        );

        setAuth({
          systemUserId: decoded.system_user_id,
          systemUserEmail: decoded.system_user_email,
          servicePermissions: servicePermissionNames,
          accessPermissions: accessPermissionNames,
        });
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
        logout();
        navigate("/login", { replace: true });
      }
    }
  }, []);

  return children;
}
