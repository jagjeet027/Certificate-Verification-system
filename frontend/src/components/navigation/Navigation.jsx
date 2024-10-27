// components/Navigation/Navigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/dashboard">Course Platform</Link>
        </div>
        <div className={styles.links}>
          <Link to="/dashboard" className={`${styles.link} ${location.pathname === '/dashboard' ? styles.active : ''}`}>Dashboard</Link>
          <Link 
            to="/courses" 
            className={`${styles.link} ${location.pathname === '/courses' ? styles.active : ''}`}
          >
            Courses
          </Link>
          <Link 
            to="/certificates" 
            className={`${styles.link} ${location.pathname === '/certificates' ? styles.active : ''}`}
          >
            Certificates
          </Link>
        </div>
        <div className={styles.profile}>
          <button className={styles.logoutBtn}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;