// /components/Dashboard/DashboardStats.js

import React from 'react';
import './DashboardMain.css';

const DashboardStats = () => {
  return (
    <div className="dashboard-content">
      <div className="stat-box" style={{ backgroundColor: '#f05a25' }}>
        <h3>Students</h3>
        <p>123</p>
      </div>
      <div className="stat-box" style={{ backgroundColor: '#fff', color: '#000' }}>
        <h3>Parents</h3>
        <p>87</p>
      </div>
      <div className="stat-box" style={{ backgroundColor: '#000', color: '#fff' }}>
        <h3>Guests</h3>
        <p>45</p>
      </div>
    </div>
  );
};

export default DashboardStats;
