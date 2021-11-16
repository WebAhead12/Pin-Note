const express = require("express");
const router = require("./router");
const PORT = process.env.PORT || 3000;
const server = express();
server.use(express.urlencoded({ extended: false }));
