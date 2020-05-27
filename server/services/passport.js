const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  console.log(`[LOG] [deserialize] ${id}`);
  User.findById(id, (err, user) => {
    if (err) console.error(err);
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
        console.log(`[LOG] [passport-local] username doesn't exist`);
        return done(null, false);
      }
      if (!user.verifyPassword(password)) {
        console.log(`[LOG] [passport-local] wrong password`);
        return done(null, false);
      }
      console.log(`[LOG] [passport-local] username and password correct!`);
      return done(null, user);
    });
  })
);
