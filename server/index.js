const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./models/User");

const { PORT = 4000 } = process.env;

const app = express();

/* mongoose */
mongoose
  .connect("mongodb://localhost/todolist")
  .then(() => console.log("[LOG] mongoDB connected!"))
  .catch((err) => console.error(err));

/* passport */
app.use(passport.initialize());

/* body parser */
app.use(bodyParser.json({ type: "*/*" }));

/* route handling */
require("./routes/authRoutes")(app);

app.listen(PORT);
