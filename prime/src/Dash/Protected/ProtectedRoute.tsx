import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth";

interface ProtectedRouteProps {
  children: ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { session } = useAuth();

  if (!session?.user) {
    // User is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // User is authenticated, render the children components
  return children;
};

export default ProtectedRoute;
