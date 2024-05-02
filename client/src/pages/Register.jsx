import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const { username, firstName, lastName, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log(formData);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="username"
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={handleChange}
          />
          <div className="row mb-3">
            <div className="col-md-6">
              <InputField
                type="text"
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
                value={firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <InputField
                type="text"
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                value={lastName}
                onChange={handleChange}
              />
            </div>
          </div>
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
        {/* Login link */}
      <p className="mt-3 text-center">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
