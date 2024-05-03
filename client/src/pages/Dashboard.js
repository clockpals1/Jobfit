import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    // Check if the user is authenticated
    if (!accessToken) {
      // If not authenticated, redirect to the login page
      navigate('/login');
    }
  }, [navigate]);

  const handleSignOut = () => {
    // Perform sign-out logic (clear authentication token, etc.)
    // For now, simply remove the authentication token from localStorage
    localStorage.removeItem('accessToken');
    // Redirect to the login page after sign out
    navigate('/login');
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="mb-4">User Dashboard</h2>
        <p>Welcome to your dashboard!</p>
        <button className="btn btn-danger" onClick={handleSignOut}>Sign Out</button>
        <h3>Profile Editing</h3>
        {/* Add profile editing components here */}
        <h3>Account Settings</h3>
        {/* Add account settings components here */}
        <h3>Subscription</h3>
        {/* Add subscription components here */}
        <h3>Resume/Cover Letter Checker</h3>
        {/* Add resume/cover letter checker components here */}
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
