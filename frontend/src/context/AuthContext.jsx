// AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // Replace with your logic

  useEffect(() => {
    // Logic to check if the user is logged in, like from localStorage or Firebase Auth
    const user = JSON.parse(localStorage.getItem('user')); // Example: get user from localStorage
    setCurrentUser(user); // Set the authenticated user
  }, []);

  const login = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Persist user data
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
