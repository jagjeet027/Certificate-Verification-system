// components/Layout/Layout.jsx
import React from 'react';
import Navigation from '../navigation/Navigation';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;