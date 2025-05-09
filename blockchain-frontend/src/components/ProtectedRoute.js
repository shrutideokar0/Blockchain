import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to={`/${role}/login`} />;
  }

  if (!userRole || userRole !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default ProtectedRoute;
