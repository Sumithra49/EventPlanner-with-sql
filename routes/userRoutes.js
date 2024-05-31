const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Login route
router.post("/login", userController.login);

// Logout route
router.post("/logout", userController.logout);

// Register route
router.post("/register", userController.register);

module.exports = router;
