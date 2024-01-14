// import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../pages/AppRoutes';


function PrivateRoute({ children, isAuth }) {
  return isAuth ? children : <Navigate to={AppRoutes.SIGNIN} />;
}


export default PrivateRoute;