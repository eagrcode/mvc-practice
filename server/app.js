const express = require("express");
const cors = require("cors");
const tasksRouter = require("./routers/tasksRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    title: "Welcome to my App",
    description:
      "This is my attempt at trying to understand all this janky shit!",
  });
});

//router - anything that proceeds /tasks is sent to tasksRouter.js
app.use("/tasks", tasksRouter);

module.exports = app;
