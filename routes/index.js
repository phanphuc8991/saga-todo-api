// import router.
const userRouter = require("./user");
const authRouter = require("./auth");
const projectRouter = require("./project");
const todoRouter = require("./todo");

function route(app) {
  app.use("/api/user", userRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/project", projectRouter);
  app.use("/api/todo", todoRouter);
}

module.exports = route;
