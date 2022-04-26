const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = new Schema(
  {
    name: { type: String, required: true },
    projectId: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
    day: { type: String, required: true },
    image: { type: String, required: true },
    finished: false,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", Todo);
