const express = require("express");
const passport = require("passport");
const session = require("express-session");
const passportSteam = require("passport-steam");
const SteamStrategy = passportSteam.Strategy;
const app = express();

// app.use("https://gamesothis.web.app/", defaultPage);
// app.use("https://gamesothis.web.app/:id", userPage);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Required to get data from user for sessions
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Let's set a port
var port = 3000;
// Spin up the server
app.listen(port, () => {
  console.log("Listening, port " + port);
});

// Initiate Strategy
passport.use(
  new SteamStrategy(
    {
      returnURL: "http://localhost:" + port + "/api/auth/steam/return",
      realm: "http://localhost:" + port + "/",
      apiKey: "YOUR_API_KEY",
    },
    function (identifier, profile, done) {
      process.nextTick(function () {
        profile.identifier = identifier;
        return done(null, profile);
      });
    }
  )
);
app.use(
  session({
    secret: "Whatever_You_Want",
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 3600000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => {
  res.send(req.user);
});
app.get(
  "/api/auth/steam",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);
app.get(
  "/api/auth/steam/return",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);
