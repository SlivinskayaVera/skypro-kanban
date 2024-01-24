// import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../pages/appRoutes";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function PrivateRoute() {
  const { user } = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to={AppRoutes.SIGNIN} />;
}

export default PrivateRoute;
