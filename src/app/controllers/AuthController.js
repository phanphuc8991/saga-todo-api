const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();
const Auth = {
  // Register
  register: async (req, res) => {
    // Luu data xuong db.
    const newUser = new User({
      ...req.body,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });

    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Login
  login: async (req, res) => {
    try {
      const originalUser = await User.findOne({
        username: req.body.username,
      });

      // Check user exists
      if (!originalUser) {
        res.status(401).json("Wrong credentials");
      }
      const hashedPassword = CryptoJS.AES.decrypt(
        originalUser.password,
        process.env.PASS_SEC
      );
      var originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      // Check password true.
      if (originalPassword !== req.body.password) {
        res.status(401).json("Wrong credentials");
      }
      const { password, ...user } = originalUser._doc;

      var accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
      );

      res.status(201).json({ ...user, accessToken });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = Auth;
