// create a new express app
// adding passport with google oauth strategy
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// function call to create a new instance of the strategy
// use keys for google api in strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
    }
  )
);

// route handler for google ouath process in passport
app.get(
  '/auth/google',
  passport.authenticate('google', {
  scope: ['profile', 'email']
  })
);

// second route handler for exchange for user profile
app.get('/auth/google/callback', passport.authenticate('google'));

// dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
