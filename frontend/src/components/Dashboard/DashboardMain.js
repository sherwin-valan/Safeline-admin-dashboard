// /components/Dashboard/DashboardMain.js

import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import DashboardStats from './DashboardStats';
import './DashboardMain.css';

const DashboardMain = () => {
  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <div className="dashboard-main">
        <DashboardHeader />
        <DashboardStats />
      </div>
    </div>
  );
};

export default DashboardMain;
