// File: config/passport.js

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User'); // Assuming you have a User model

module.exports = function(passport) {
  passport.use(new LocalStrategy((email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'User not found' });
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          return done(err);
        }
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect password' });
        }
        return done(null, user);
      });
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
