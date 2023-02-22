import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../../services/auth";
/**
 * Will be used as en element for a Route to protect a route
 */
export const ProtectedRoute = ({redirectPath = "/login"}) => {
  const {error, loading, user} = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!user) {
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;
};
