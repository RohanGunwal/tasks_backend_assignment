const taskModel = require("../model/taskModel");

const getAllTasks = (req, res) => {
  try {
    taskModel
      .find({})
      .sort({ createdAt: -1 })
      .then((result) => res.status(200).json(result));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTaskById = (req, res) => {
  const id = req.params.id;
  try {
    taskModel.findById(id).then((result) => res.status(200).json(result));
  } catch (error) {
    res.status(404).json({ error: `There is no task at that id` });
  }
};

const createTask = (req, res) => {
  try {
    if (req.body.tasks) {
      let tasks = [];
      req.body.tasks.forEach((e) => {
        const newTask = new taskModel(e);
        newTask.save().then((result) => res.status(201).json());
      });
    } else {
      const newTask = new taskModel(req.body);
      newTask.save().then((result) => res.status(201).json(result._id));
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const editTask = (req, res) => {
  const id = req.params.id;
  try {
    taskModel
      .findByIdAndUpdate(id, req.body)
      .then(() => res.status(204).json({}));
  } catch (error) {
    res.status(404).json({ error: `There is no task at that id` });
  }
};
const deleteTask = (req, res) => {
  const id = req.params.id;
  try {
    taskModel.findByIdAndDelete(id).then(() => res.status(204).json({}));
  } catch (error) {
    res.status(204).json({});
  }
};

const deleteBulk = (req, res) => {
  try {
    req.body.tasks.forEach((e) => {
      taskModel.findByIdAndDelete(e.id).then(() => res.json());
    });
  } catch (error) {
    res.status(204).json({});
  }
};

module.exports = {
  getAllTasks,
  createTask,
  editTask,
  deleteTask,
  getTaskById,
  deleteBulk,
};
