const express = require("express");
const router = express.Router();
const path = require("path");
const cookieparser = require("cookie-parser");
const verifyUser = require("./middleware/verifyUser.js");
const loginHandler = require("./handlers/login.js");
const getAuth = require("./middleware/getAuth.js");
const notesHandler = require("./handlers/notes.js");
const jwt = require("jsonwebtoken");
let SECRET = verifyUser.SECRET;

router.use(cookieparser());

router.use(verifyUser.verifyUser);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

router.post("/log-in", (req, res) => {
  const user = req.body;
  console.log(req.body);
  console.log(user);
  const token = jwt.sign(user.username, SECRET);
  res.cookie("user", token);

  loginHandler.checkUser(user).then((data) => {
    res.send({ response: data });
  });
});

router.get("/notes", getAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});
router.use(express.static(path.join(__dirname, "public")));

// router.get("/notes/data", notesHandler());

router.get("/log-out", (req, res) => {
  res.clearCookie("user");
  res.send({ response: "success" });
});

router.get("/test", (req, res) => {
  res.send({ name: req.user });
});

module.exports = router;
