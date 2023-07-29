import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/auth.context';

const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();
  return !user ? <Navigate to='/' /> : children;
};

export default ProtectedRoutes;
