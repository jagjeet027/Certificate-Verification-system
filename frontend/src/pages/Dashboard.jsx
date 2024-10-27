// Dashboard.js
import React, { useState, useEffect } from 'react';
import {
  TrendingUp, Users, Award, BookOpen, Target, Activity, BarChart2
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from '../components/Sidebar';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chartData, setChartData] = useState([]);

  const handleToggleSidebar = (isOpen) => {
    setSidebarOpen(isOpen);
  };

  const statsList = [
    { label: 'Total Students', value: '1,234', trend: '+20%', color: styles.greenBlue, icon: Users },
    { label: 'Courses Completed', value: '456', trend: '+15%', color: styles.purplePink, icon: Award },
    { label: 'Certificates Issued', value: '789', trend: '+5%', color: styles.yellowRed, icon: BookOpen },
    { label: 'Total Revenue', value: '$12,345', trend: '+30%', color: styles.tealCyan, icon: Target },
  ];

  const recentActivities = [
    { user: 'Jane Doe', action: 'completed the course', time: '2 hours ago' },
    { user: 'John Smith', action: 'issued a certificate', time: '3 hours ago' },
    { user: 'Mary Johnson', action: 'joined the platform', time: '5 hours ago' },
  ];

  useEffect(() => {
    // Simulating API call to fetch chart data
    const generateChartData = () => {
      return Array.from({ length: 7 }, (_, i) => ({
        day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
        students: Math.floor(Math.random() * 100) + 50,
        revenue: Math.floor(Math.random() * 1000) + 500,
      }));
    };

    setChartData(generateChartData());
  }, []);

  return (
    <div className={`${styles.dashboardContainer} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
      <Sidebar onToggle={handleToggleSidebar} />
      <div className={styles.mainContent}>
        <h1 className={styles.welcomeHeader}>Welcome to the Dashboard</h1>
        
        <div className={styles.statsGrid}>
          {statsList.map((stat, index) => (
            <div key={index} className={`${styles.statCard} ${stat.color}`}>
              <div className={styles.statContent}>
                <div>
                  <p className={styles.statLabel}>{stat.label}</p>
                  <h3 className={styles.statValue}>{stat.value}</h3>
                  <span className={styles.statTrend}>
                    <TrendingUp size={16} />
                    {stat.trend}
                  </span>
                </div>
                <div className={styles.statIcon}>
                  <stat.icon size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dashboardGrid}>
          <div className={styles.chartSection}>
            <div className={styles.chartHeader}>
              <h2>Performance Overview</h2>
              <select className={styles.chartSelect}>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className={styles.chartContainer}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="students" fill="#8884d8" name="Students" />
                  <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue ($)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={styles.activitySection}>
            <h2>Recent Activity</h2>
            <div className={styles.activityList}>
              {recentActivities.map((activity, index) => (
                <div key={index} className={styles.activityItem}>
                  <div className={styles.activityDot}></div>
                  <div className={styles.activityContent}>
                    <p className={styles.activityUser}>{activity.user}</p>
                    <p className={styles.activityAction}>{activity.action}</p>
                    <p className={styles.activityTime}>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.quickActions}>
          {[
            { icon: Award, label: 'Issue Certificate', color: styles.pinkRose },
            { icon: Users, label: 'Manage Students', color: styles.cyanBlue },
            { icon: Activity, label: 'View Analytics', color: styles.violetPurple }
          ].map((action, index) => (
            <button key={index} className={`${styles.quickActionButton} ${action.color}`}>
              <action.icon size={20} />
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;