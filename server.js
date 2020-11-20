require("colors");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("./routers/users/users-router");
const authRouter = require("./auth/auth-router");
const authenticate = require("./auth/restricted-middleware");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "It's alive!" });
});

module.exports = server;
