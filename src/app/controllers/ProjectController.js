const ProjectModel = require("../models/Project");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();
const Project = {
  // create.
  create: async (req, res) => {
    const newProject = new ProjectModel(req.body);
    try {
      const savedProject = await newProject.save();
      res.status(201).json(savedProject);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // get. => userId
  get: async (req, res) => {
    try {
      const project = await ProjectModel.findOne({ userId: req.user.id });
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // get all.
  getAll: async (req, res) => {
    try {
      const projects = await ProjectModel.find({});
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // update
  update: async (req, res) => {
    try {
      const updateProject = await ProjectModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updateProject);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // delete.
  delete: async (req, res) => {
    try {
      await ProjectModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Project has been deleted...");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = Project;
