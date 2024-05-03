const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('./models/User'); // Assuming you have a User model

// Redirect requests to user registration and login routes to /api/auth/authRoutes
router.post('/register', (req, res, next) => {
  res.redirect(307, '/api/auth/authRoutes/register');
});

router.post('/login', (req, res, next) => {
  res.redirect(307, '/api/auth/authRoutes/login');
});

module.exports = router;
