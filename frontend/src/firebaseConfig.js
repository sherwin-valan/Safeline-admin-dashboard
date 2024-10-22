// /src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAgPaLx5dVKUCEDCfjJlWYRa1uc53ljBys",
    authDomain: "safeline-8e5ee.firebaseapp.com",
    projectId: "safeline-8e5ee",
    storageBucket: "safeline-8e5ee.appspot.com",
    messagingSenderId: "876446768457",
    appId: "1:876446768457:web:c19b32511f2e416ac7ce98",
    measurementId: "G-E8PF06KCQP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);

// Logout function
export const logout = async () => {
  try {
    await signOut(auth);
    window.location.href = '/login'; // Redirect to login page
  } catch (error) {
    console.error('Error logging out:', error);
  }
};