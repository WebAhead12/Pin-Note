const express = require("express");
const router = express.Router();
const path = require("path");
const cookieparser = require("cookie-parser");
const verifyUser = require("./middleware/verifyUser.js");
const loginHandler = require("./handlers/login.js");
const getAuth = require("./middleware/getAuth.js");
const notesHandler = require("./handlers/notes.js");
const jwt = require("jsonwebtoken");
const server = express();
let SECRET = verifyUser.SECRET;

server.use(cookieparser());
server.use(express.urlencoded());
server.use(express.json());

server.use(verifyUser.verifyUser);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
console.log(getAuth);
router.post("/log-in", (req, res) => {
  const user = req.body.username;
  console.log(req.body);
  console.log(user);
  const token = jwt.sign(user, SECRET);
  res.cookie("user", token);
  const response = loginHandler.checkUser(user);
  res.send({ response: response });
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});
router.use(express.static(path.join(__dirname, "public")));

// router.get("/notes/data", notesHandler());

router.get("/log-out", (req, res) => {
  res.clearCookie("user");
  res.send({ response: "success" });
});
module.exports = router;
