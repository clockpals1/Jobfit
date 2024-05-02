import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="mb-4">User Dashboard</h2>
        <p>Welcome to your dashboard!</p>
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
