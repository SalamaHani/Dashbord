import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Model from "../../components/Model";

function ProtectedRout({ children }) {
  const user = useSelector((store) => store.userState);
  if (user.user == null) {
    return <Navigate to="/Landeing" />;
  }
  return children;
}

export default ProtectedRout;
