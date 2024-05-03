const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('./config/passport'); // Correct the path as needed
const bodyParser = require('body-parser');
const authRoutes = require('../Jobfit/api/auth/authRoutes'); // Import authentication routes

const app = express();

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST'], // Allow only GET and POST requests
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specific headers
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: '542c97872cf61725699bd8671fea51de70b8145c27add4f2829559c595e90c78', // Replace with your session secret
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/jobfit')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Use authentication routes
app.use('/api/auth', authRoutes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
