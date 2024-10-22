// /src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import DashboardMain from './components/Dashboard/DashboardMain';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {user ? (
          <Route path="/" element={<DashboardMain />} />
        ) : (
          <Route path="/login" element={<LoginPage />} />
        )}
        <Route path="*" element={<Navigate to={user ? '/' : '/login'} />} />
      </Routes>
    </Router>
  );
};

export default App;
