import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./../../firebase.init";
import useAdmin from "./../../hooks/useAdmin";
import Loading from "./../Shared/Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  const errorMessage = () => toast(error?.message);

  if (error) errorMessage();

  if (loading || adminLoading) return <Loading />;

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;
