let data = require("../data/data");

class TaskModel {
  constructor({ id, title, description, completed = false }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }

  static getAll() {
    return data.map((d) => new TaskModel(d));
  }
}

module.exports = TaskModel;
