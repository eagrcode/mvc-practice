const TaskModel = require("../models/TaskModel");

function index(req, res) {
  res.send(TaskModel.getAll());
}

function showById(req, res) {
  const idx = parseInt(req.params.id);

  try {
    const task = TaskModel.getOneById(idx);
    res.status(201).send(task);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
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

function remove(req, res) {
  try {
    // get id of request
    const id = req.params.id;
    // get task by id
    const item = TaskModel.getOneById(id);
    item.remove();
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

function update(req, res) {
  try {
    const id = req.params.id;
    const item = TaskModel.getOneById(id);
    const updated = item.update();
    res.json(updated);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

// note to self - when exporting a function that grabs an object, use curly brackets!
module.exports = { index, showById, create, remove, update };
