const express = require("express");
const router = express.Router();
const path = require("path");
// const handlers = require("./Handler");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

router.post("/log-in", (req, res) => {
  console.log(2);
  res.send({ response: "success" });
});

router.get("/notes", (req, res) => {
  console.log(1);
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});
router.use(express.static(path.join(__dirname, "public")));

router.use((req, res) => {
  res.redirect("/");
});

module.exports = router;
