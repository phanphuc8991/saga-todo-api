const express = require("express");
const router = express.Router();
const ProjectController = require("../src/app/controllers/ProjectController");
const authController = require("../src/app/controllers/AuthController");

// create.
router.post("/", authController.verifyToken, ProjectController.create);

// get.
router.get("/:id", authController.verifyToken, ProjectController.get);

// get all.
router.get("/", authController.verifyToken, ProjectController.getAll);

// update.
router.put("/:id", authController.verifyToken, ProjectController.update);

// delete.
router.delete("/:id", authController.verifyToken, ProjectController.delete);

module.exports = router;
