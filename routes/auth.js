const express = require('express');
const router = express.Router();
const passport = require('passport');

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ success: false, message: info.message });
    req.logIn(user, err => {
      if (err) return next(err);
      return res.json({ success: true, message: 'Login successful', user });
    });
  })(req, res, next);
});

// @route   POST /api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res, next) => {
  passport.authenticate('local-register', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ success: false, message: info.message });
    req.logIn(user, err => {
      if (err) return next(err);
      return res.json({ success: true, message: 'Registration successful', user });
    });
  })(req, res, next);
});

// @route   GET /api/auth/logout
// @desc    Logout user
// @access  Private
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ success: true, message: 'Logout successful' });
});

module.exports = router;
