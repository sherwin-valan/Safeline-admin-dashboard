// /components/Dashboard/DashboardHeader.js

import React from 'react';
import { logout } from '../../firebaseConfig';
import './DashboardMain.css';

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <h1>Welcome to the Admin Dashboard</h1>
      <p>Manage all your data in one place</p>
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default DashboardHeader;
