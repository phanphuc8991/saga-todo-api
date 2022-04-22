const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema(
  {
    name: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", Project);
