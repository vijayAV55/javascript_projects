import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log(loggedInUser);
  return loggedInUser !== null ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
