// requiring original passport npm module
const passport = require('passport');


module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // second route handler for exchange for user profile
  app.get('/auth/google/callback', passport.authenticate('google'));
};
