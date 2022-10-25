const express = require("express");
const tasksController = require("../controllers/tasksController");

// initialise file with express router
const tasksRouter = express.Router();

// GET all tasks - /tasks
tasksRouter.get("/", tasksController.index);
tasksRouter.post("/", tasksController.create);
tasksRouter.get("/:id", tasksController.showById);
tasksRouter.delete("/:id", tasksController.remove);
tasksRouter.patch("/:id", tasksController.update);

module.exports = tasksRouter;
