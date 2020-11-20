require("colors");
const express = require("express");
const helmet = require("helmet");
//const ProjectsRouter = require("./routers/projects-router"); - this will need to change

const server = express();

server.use(helmet());
server.use(express.json());
//server.use("/projects", ProjectsRouter); - this will need to change

module.exports = server;
