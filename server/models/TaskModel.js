let { data, nextId } = require("../data/data");

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

  static create(newData) {
    if (newData.hasOwnProperty("title", "description")) {
      newData["id"] = nextId;
      nextId += 1;
      data.push(newData);
    } else {
      throw new Error("Invalid data.");
    }
  }
}

module.exports = TaskModel;
