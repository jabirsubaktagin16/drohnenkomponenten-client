import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./../../firebase.init";
import Loading from "./../Shared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  const location = useLocation();

  const errorMessage = () => toast(error?.message);

  if (error) errorMessage();

  if (loading) return <Loading />;

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
