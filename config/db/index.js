const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
function connect() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => {
      console.log("DB connection successfully");
    })
    .catch((err) => {
      console.log("connect to failed");
    });
}

module.exports = { connect };
