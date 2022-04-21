const express = require("express");
const router = express.Router();
const userController = require("../src/app/controllers/UserController");
const authController = require("../src/app/controllers/AuthController");

// get.
router.get("/find/:id", userController.get);

// get all.
router.get("/", userController.getAll);

// update.
router.put("/:id", userController.update);

// delete.
router.delete("/:id", userController.delete);

module.exports = router;
