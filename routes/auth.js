// File: routes/auth.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User'); // Assuming you have a User model

// Registration route
router.post('/register', (req, res, next) => {
  const { email, password } = req.body;

  // Create a new user instance
  const newUser = new User({ email, password });

  // Save the user to the database
  newUser.save((err, user) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Failed to register user' });
    }
    return res.json({ success: true, message: 'User registered successfully', user });
  });
});

// Login route
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.json({ success: true, message: 'Login successful', user });
    });
  })(req, res, next);
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ success: true, message: 'Logout successful' });
});

module.exports = router;
