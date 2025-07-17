import { Navigate } from "react-router-dom";
import { loggedInUser } from "../mocks/mockAccess";

const ProtectedRoute = ({ path, children }) => {
  const canAccess = loggedInUser.featureAccess.includes(path);
  return canAccess ? children : <Navigate to="/unauthorized" replace />;
};

export default ProtectedRoute;
