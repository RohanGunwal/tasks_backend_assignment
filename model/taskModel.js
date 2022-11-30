const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    is_completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const taskModel = new mongoose.model("tasks", taskSchema);

module.exports = taskModel;
