import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore";

const RedirectHome = () => {
  const { servicePermissions } = useAuthStore();

  const lowered = servicePermissions.map((s) => s.toLowerCase());

  if (lowered.includes("hris")) return <Navigate to="/hris" replace />;
  if (lowered.includes("ats")) return <Navigate to="/ats" replace />;

  return <Navigate to="/not-found" replace />;
};

export default RedirectHome;
