const passport = require("passport");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const log = require("../utils/logging");

/* bcrypt variables */
const saltRounds = 10;

const User = mongoose.model("User");

module.exports = (app) => {
  app.post(
    "/api/login",
    passport.authenticate("local", {
      failureFlash: true,
    }),
    (req, res) => {
      console.log(req.user);
      res.send("logged in!");
    }
  );

  app.post("/api/signup", (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      log("sign up: user didn't provide username or password");
      return res
        .status(422)
        .send("Please provide both user name and password.");
    }

    User.findOne({ username: username }, (err, existingUser) => {
      if (err) return next(err);
      if (existingUser) return res.status(422).send("User name already exists");

      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) return console.error(err);

        const newUser = new User({ username, hash });
        newUser.save((err, user) => {
          if (err) return console.error(err);
          log("new user signed up");
          res.send("sign up successful.");
        });
      });
    });
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    req.session = null;
    res.send("logged out successful!");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
