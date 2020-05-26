const passport = require("passport");
const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = (app) => {
  app.post(
    "/login",
    passport.authenticate("local", {
      failureFlash: true,
    }),
    (req, res) => res.send("logged in!")
  );

  app.post("/signup", (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(422)
        .send("Please provide both user name and password.");
    }

    User.findOne({ username: username }, (err, existingUser) => {
      if (err) return next(err);
      if (existingUser) return res.status(422).send("User name already exists");

      const newUser = new User({ username, password });
      newUser.save((err, user) => {
        if (err) return console.error(err);
        console.log("[Log] new user signed up");
        res.send("sign up successful.");
      });
    });
  });

  app.get("/logout", (req, res) => {
    req.logout();
    req.session = null;
    // res.redirect("/");
  });
};
