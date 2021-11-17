const express = require("express");
const router = express.Router();
const path = require("path");
const verifyUser = require("./middleware/verifyUser");
// const handlers = require("./handlers");
const jwt = require("jsonwebtoken");
let SECRET = verifyUser.SECRET;

server.use(cookieparser());
server.use(express.urlencoded());
server.use(express.json());
server.use(verifyUser.verifyUser());

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

router.post("/log-in", verifyUser.getAuth, (req, res) => {
  const user = req.body;
  const token = jwt.sign(user.username, SECRET);
  res.cookie("user", token);
  handlers.login.checkUser(user);
  res.send({ response: "success" });
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});
router.use(express.static(path.join(__dirname, "public")));

// router.get("/notes/data", handlers.notes);

router.use((req, res) => {
  res.redirect("/");
});
router.get("/log-out", (req, res) => {
  res.clearCookie("user");
  res.send({ response: "success" });
});
module.exports = router;
