import React from "react";
import Loader from "../Loader";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

const Redirection = ({ localMode }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  if (loading === false) {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return <Dashboard localMode={localMode} />;
  } else {
    return <Loader />;
  }
};

export default Redirection;
