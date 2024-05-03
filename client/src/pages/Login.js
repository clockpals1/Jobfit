import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from '../components/Button';
import InputField from '../components/InputField';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Input validation
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log(response.data);
      // Store authentication token in localStorage
      localStorage.setItem('accessToken', response.data.accessToken);
      // Redirect to dashboard upon successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data.message : error.message);
      setErrorMessage(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="mb-4">Login</h2>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
          />
          <Button type="submit" text="Login" variant="primary" />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
