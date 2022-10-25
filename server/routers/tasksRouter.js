const express = require("express");
const tasksController = require("../controllers/tasksController");

// initialise file with express router
const tasksRouter = express.Router();

// GET all tasks - /tasks
tasksRouter.get("/", tasksController.index);
tasksRouter.post("/", tasksController.create);

module.exports = tasksRouter;
