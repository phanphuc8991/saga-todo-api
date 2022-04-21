const express = require("express");

const router = express.Router();
const authController = require("../src/app/controllers/AuthController");

router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
