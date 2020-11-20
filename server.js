require("colors");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router");
const authenticate = require("./auth/restricted-middleware");
const usersRouter = require("./routers/users/users-router");
const companiesRouter = require("./routers/companies/companies-router");
const jobsRouter = require("./routers/jobs/jobs-router");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/companies", companiesRouter);
server.use("/api/jobs", jobsRouter);

server.get("/", (req, res) => {
  res.json({ api: "It's alive!" });
});

module.exports = server;
