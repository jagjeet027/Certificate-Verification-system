// Sidebar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, Award, User, Settings, Menu, X,
  BookOpen, Briefcase, Bell, ChevronRight, BarChart2
} from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(prev => !prev);
    if (onToggle) onToggle(!isOpen);
  };

  const menuItems = [
    { path: '/', icon: Home, label: 'Dashboard', badge: null },
    { path: '/courses', icon: BookOpen, label: 'Courses', badge: '12' },
    { path: '/certificates', icon: Award, label: 'Certificates', badge: null },
    { path: '/career', icon: Briefcase, label: 'Career Path', badge: 'New' },
    { path: '/notifications', icon: Bell, label: 'Notifications', badge: 3 },
    { path: '/analytics', icon: BarChart2, label: 'Analytics', badge: null },
    { path: '/profile', icon: User, label: 'Profile', badge: null },
  ];

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Award className={styles.headerIcon} />
          <span className={`${styles.brandName} ${!isOpen && styles.hidden}`}>CareerBridge</span>
        </div>
        <button onClick={handleToggle} className={styles.toggleButton}>
          {isOpen ? <X className={styles.toggleIcon} /> : <Menu className={styles.toggleIcon} />}
        </button>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} className={styles.navLink}>
            <div className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}>
              <item.icon className={styles.navIcon} />
              {isOpen && <span className={styles.navLabel}>{item.label}</span>}
              {item.badge && (
                <span className={`${styles.badge} ${!isOpen && styles.smallBadge}`}>
                  {item.badge}
                </span>
              )}
            </div>
          </Link>
        ))}
      </nav>

      <div className={styles.profileSection}>
        <div className={styles.profileContainer}>
          <img src="/api/placeholder/40/40" alt="User" className={styles.profileImage} />
          {isOpen && (
            <div className={styles.profileInfo}>
              <h4 className={styles.profileName}>John Doe</h4>
              <p className={styles.profileRole}>Administrator</p>
            </div>
          )}
          {isOpen && <button className={styles.chevronButton}><ChevronRight className={styles.chevronIcon} /></button>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

