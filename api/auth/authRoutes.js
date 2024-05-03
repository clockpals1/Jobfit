const express = require('express');
const router = express.Router();
const User = require('../../models/User'); // Import your User model

// Register route
router.post('/register', async (req, res) => {
  try {
    // Extract user data from request body
    const { username, firstname, lastname, email, password } = req.body;

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create a new user record
    const newUser = new User({ username, firstname, lastname, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    // Extract login credentials from request body
    const { email, password } = req.body;

    // Check if user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User with this email does not exist' });
    }

    // Check if password is correct
    const isPasswordValid = await user.isValidPassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
