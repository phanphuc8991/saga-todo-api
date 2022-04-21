const userModel = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();

const User = {
  // get
  get: async (req, res) => {
    try {
      const originalUser = await userModel.findById(req.params.id);
      const { password, ...user } = originalUser._doc;
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // get all.
  getAll: async (req, res) => {
    try {
      const query = req.query.new;
      const originalUsers = query
        ? await userModel.find({}).sort({ _id: -1 }).limit(1)
        : await userModel.find({});

      const newUsers = originalUsers.map((user) => {
        const { password, ...originalUser } = user._doc;
        return originalUser;
      });

      res.status(200).json(newUsers);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // update.
  update: async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString();
    }

    try {
      const updateUser = await userModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // delete.
  delete: async (req, res) => {
    try {
      await userModel.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = User;
