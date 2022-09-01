var mysql = require("mysql");
const express = require("express");
const app = express();
const keys = require("./keys/keys");
const passport = require("passport");
require("./config/passport");
const port = 4000;
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const cookieSession = require("cookie-session");
const authRoutes = require("./routes/authroutes");
const cookieParser = require("cookie-parser");
mongoose.connect(keys.MONGODB_URI, () => {
  console.log("connected to mongo db");
});

app.use(
  cookieSession({
    name: "session",
    keys: [keys.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(
  session({ secret: "keyboard cat", key: "sid", cookie: { secure: false } })
);

app.use(cookieParser());


app.use(passport.initialize());

app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, 
  })
);
app.use("/auth", authRoutes);
const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated",
    });
  } else {
    next();
  }
};

app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies,
  });
});
app.listen(port, () =>
  console.log(`Server is up and running on port ${port}!`)
);
