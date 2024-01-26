// import React from 'react';
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../pages/appRoutes";
import { UserHook } from "../../hooks/useUserHook";
import { Layout } from "../Layout/Layout";

function PrivateRoute() {
  const { user } = UserHook();
  return user ? <Layout /> : <Navigate to={AppRoutes.SIGNIN} />;
}

export default PrivateRoute;
