// import library express
const express = require("express");
const app = express();
const cors = require("cors");
// file configuration db
const db = require("./config/db");
// file configuration route
const route = require("./routes");

app.use(cors());

// connect to db
db.connect();

app.use(express.json());
route(app);

app.listen(5000, () => {
  console.log("hello express");
});
