const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cors = require("cors");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const { PORT = 4000 } = process.env;

const app = express();

/* mongoose */
mongoose
  .connect("mongodb://localhost/todolist")
  .then(() => console.log("[LOG] mongoDB connected!"))
  .catch((err) => console.error(err));

/**** middlewares that will be called on every request */
/**** cookie-session */
app.use(
  cookieSession({
    name: "login-session",
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: keys.cookieKeys,
  })
);
/* passport */
app.use(passport.initialize());
app.use(passport.session());

/* body parser */
app.use(bodyParser.json({ type: "*/*" }));

/* cors */
app.use(cors());

/* route handling */
require("./routes/authRoutes")(app);

app.listen(PORT);
