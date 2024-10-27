// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth(); // Access authentication state

  // Redirect to login page if user is not authenticated
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
