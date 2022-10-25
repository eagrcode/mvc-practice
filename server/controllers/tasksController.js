const TaskModel = require("../models/TaskModel");

function index(req, res) {
  res.send(TaskModel.getAll());
}

// note to self - when exporting a function that grabs an object, use curly brackets!
module.exports = { index };
