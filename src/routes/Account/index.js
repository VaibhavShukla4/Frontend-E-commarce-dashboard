import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Account = () => {
  const auth = localStorage.getItem("accesToken");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default Account;
