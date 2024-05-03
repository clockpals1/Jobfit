import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null); // Add state for error message

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log(response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response.data);
      setError(error.response.data.message); // Set error message state
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="mt-5 mb-4">Welcome to JobFit</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <h2>Looking for a job?</h2>
              <p>Sign up to find the perfect job for you.</p>
              <Link to="/register"><Button variant="primary" text="Register" /></Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <h2>Already have an account?</h2>
              <p>Log in to access your dashboard.</p>
              {error && <p className="error">{error}</p>} {/* Display error message */}
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
