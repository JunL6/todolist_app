const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cors = require("cors");
const flash = require("connect-flash");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const { PORT = 4000 } = process.env;

const app = express();

/* mongoose */
mongoose
  // .connect("mongodb://localhost/todolist")
  .connect(keys.mongoURI)
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

/* flash */
// app.use(express.cookieParser("keyboard cat"));
// app.use(express.session({ cookie: { maxAge: 60000 } }));
app.use(flash());

// app.use(
//   require("express-session")({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

/* body parser */
app.use(bodyParser.json({ type: "*/*" }));

/* passport */
app.use(passport.initialize());
app.use(passport.session());

/* cors */
// app.use(cors({ credentials: true, origin: `http://localhost:3001` }));

/* route handling */
require("./routes/authRoutes")(app);

app.listen(PORT);
