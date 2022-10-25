const TaskModel = require("../models/TaskModel");

function index(req, res) {
  res.send(TaskModel.getAll());
}

function create(req, res) {
  try {
    // grab data from body of request
    const data = req.body;
    // variable with create function taking data as argument
    const createNew = TaskModel.create(data);
    // send new data to model
    res.status(201).send(createNew);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// note to self - when exporting a function that grabs an object, use curly brackets!
module.exports = { index, create };
