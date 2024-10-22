// /components/Dashboard/DashboardSidebar.js

import React from 'react';
import './DashboardMain.css'; // Reuse the same CSS for consistency

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>Dashboard</li>
        <li>Students</li>
        <li>Parents</li>
        <li>Guests</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
