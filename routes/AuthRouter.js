// Import the required modules
const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
  changePassword,
} = require("../controllers/Auth");
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/resetPassword");

const { auth } = require("../middleware/auth")
const welcome = require("../controllers/welcome.js");

// Routes for Login, Signup, and Authentication
router.post("/login", login);
router.post("/signup", signup);
router.post("/sendotp", sendotp);
router.post("/changepassword", auth, changePassword);
router.post("/reset-password-token", resetPasswordToken);
router.post("/reset-password", resetPassword);
router.post("/validate", auth, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});
router.get("/welcome", welcome);

// Export the router for use in the main application
module.exports = router;
