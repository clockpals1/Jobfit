import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '../components/Button';
import InputField from '../components/InputField';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { username, firstname, lastname, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(response.data);
      setSuccessMessage('Registration successful. You can now login.');
      setErrorMessage(''); // Clear any previous error message
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      setErrorMessage(error.response.data.message); // Set error message
      setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="mb-4">Register</h2>
        {successMessage && <p className="text-success">{successMessage}</p>}
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="username"
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={handleChange}
          />
          <InputField
            type="text"
            name="firstname"
            label="First Name"
            placeholder="Enter your first name"
            value={firstname}
            onChange={handleChange}
          />
          <InputField
            type="text"
            name="lastname"
            label="Last Name"
            placeholder="Enter your last name"
            value={lastname}
            onChange={handleChange}
          />
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
          <Button type="submit" text="Register" variant="primary" />
        </form>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
