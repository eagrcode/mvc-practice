const express = require("express");
const tasksController = require("../controllers/tasksController");

// initialise file with express router
const tasksRouter = express.Router();

// GET all tasks - /tasks
tasksRouter.get("/", tasksController.index);

module.exports = tasksRouter;
