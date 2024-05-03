import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

function Home() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(formData);
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Welcome to JobFit</h1>
      <div className="row">
        <div className="col-md-6">
          <Card title="Looking for a job?" content="Sign up to find the perfect job for you.">
            <Link to="/register"><Button variant="primary" text="Register" /></Link>
          </Card>
        </div>
        <div className="col-md-6">
          <Card title="Already have an account?" content="Log in to access your dashboard.">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" variant="secondary" text="Login" />
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
