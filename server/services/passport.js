const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((id, done) => {
  console.log("here");
  User.findById(id, (err, user) => {
    if (err) console.err(err);
    done(err, user);
  });
});

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!user.verifyPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);
