import useUserStore from "../stores/userStore";
import useInitializeUser from "../hooks/useInitiliazeUser";
import { Navigate } from "react-router-dom";

const FeatureProtectedRoute = ({ feature, children }) => {
  const hasFeature = useUserStore((state) => state.hasFeature);
  const loading = useInitializeUser();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin h-10 w-10 border-t-4 border-teal-500 rounded-full" />
      </div>
    );
  }

  return hasFeature(feature) ? children : <Navigate to="/unauthorized" />;
};

export default FeatureProtectedRoute;
