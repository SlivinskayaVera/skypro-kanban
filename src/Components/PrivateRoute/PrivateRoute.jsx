// import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes } from '../../pages/appRoutes';

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to={AppRoutes.SIGNIN} />;
}


export default PrivateRoute;