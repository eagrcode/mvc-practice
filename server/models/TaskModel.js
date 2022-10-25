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

  static getOneById(idx) {
    const match = data.filter((d) => d.id == idx);

    // check to see if only 1 match is returned
    if (match.length === 1) {
      return new TaskModel(data[idx], idx);
    } else {
      throw new Error("Task not found");
    }
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

  remove() {
    data = data.filter((d) => d.id != this.id);
  }

  update() {
    const updated = {
      id: this.id,
      title: this.title,
      description: this.description,
      completed: !this.completed,
    };

    data = data.map((t) => (t.id == this.id ? updated : t));
    return new TaskModel(updated);
  }
}

module.exports = TaskModel;
