const express = require("express");
const router = express.Router();
const TodoController = require("../src/app/controllers/TodoController");
const authController = require("../src/app/controllers/AuthController");

// create.
router.post("/", authController.verifyToken, TodoController.create);

// get.
router.get("/:id", authController.verifyToken, TodoController.get);

// get all.
router.get("/", authController.verifyToken, TodoController.getAll);

// update.
router.put("/:id", authController.verifyToken, TodoController.update);

// delete.
router.delete("/:id", authController.verifyToken, TodoController.delete);

module.exports = router;
