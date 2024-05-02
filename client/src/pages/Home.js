import React from 'react';
import { Link } from 'react-router-dom';
//import { Button, Card } from '../components'; // Assuming Button and Card components are located in the '../components' directory
import Button from '../components/Button'; // Adjust the import path accordingly
import Card from '../components/Card';
function Home() {
  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Welcome to JobFit</h1>
      <div className="row">
        <div className="col-md-6">
          <Card title="Looking for a job?" content="Sign up to find the perfect job for you.">
            <Link to="/register"><Button variant="primary" text="Register" onClick={() => {}} /></Link>
          </Card>
        </div>
        <div className="col-md-6">
          <Card title="Already have an account?" content="Log in to access your dashboard.">
            <Link to="/login"><Button variant="secondary" text="Login" onClick={() => {}} /></Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;