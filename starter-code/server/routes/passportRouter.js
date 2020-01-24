const express        = require("express");
const passportRouter = express.Router();
// Require user model with roles [ Boss, developer, ta]

// Add bcrypt to encrypt passwords

// Add passport 


const ensureLogin = require("connect-ensure-login");


passportRouter.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.json({ user: req.user });
});

module.exports = passportRouter;

/**
 * TODO just to begin 
 * 
 * Create an schema considering the following roles: Boss, Developer, TA.
 * Create a Boss user and give access to the platform to his/her account.
 * Allow only the Boss user to add and remove employees to the platform.
 */