const express = require("express");
const router = express.Router();
const path = require("path");
// const handlers = require("./Handler");

router.get("/", (req, res) => {
  res.sendfile(path.join(__dirname, "public", "index.html"));
});

router.post("/log-in", (req, res) => {
  res.redirect("/notes");
});

router.get("/notes", (req, res) => {
  res.sendfile(path.join(__dirname, "public", "notes.html"));
});
router.use(express.static(path.join(__dirname, "public")));

module.exports = router;
