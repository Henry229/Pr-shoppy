import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, requireAdmin }) => {
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    console.log('===in ProtectedRouter: ', user, '/', requireAdmin);
    return <Navigate to='/' replace />;
  }

  return children;
};

export default ProtectedRoute;
