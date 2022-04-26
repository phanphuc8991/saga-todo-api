const TodoModel = require("../models/Todo");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();

const Todo = {
  // create.
  create: async (req, res) => {
    const todoModel = new TodoModel(req.body);
    try {
      const savedTodo = await todoModel.save();
      res.status(201).json(savedTodo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // get
  get: async (req, res) => {
    try {
      const originalTodo = await TodoModel.findById(req.params.id);
      res.status(200).json(originalTodo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // get all.
  getAll: async (req, res) => {
    try {
      const todos = await TodoModel.find({});
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // update
  update: async (req, res) => {
    try {
      const updateTodo = await TodoModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updateTodo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // delete.
  delete: async (req, res) => {
    try {
      await TodoModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Todo has been deleted...");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = Todo;
