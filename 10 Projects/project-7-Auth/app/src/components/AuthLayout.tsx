import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../authContext/AuthContextProvider";

function AuthLayout() {
  const { token } = useAuthContext();
  console.log(token);

  return <div>{token ? <Navigate to="/" /> : <Outlet />}</div>;
}

export default AuthLayout;
