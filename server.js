const express = require("express");
const router = require("./router");
const PORT = process.env.PORT || 5000;
const server = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(router);
server.listen(PORT, () => console.log(`listening on http://localhost:${PORT}....`));
