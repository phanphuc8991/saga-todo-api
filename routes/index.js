// import router.
const userRouter = require("./user");
const authRouter = require("./auth");
const projectRouter = require("./project");

function route(app) {
  app.use("/api/user", userRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/project", projectRouter);
}

module.exports = route;
