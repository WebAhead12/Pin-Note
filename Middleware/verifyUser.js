const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

let SECRET = process.env.SECRET;

function getAuth(req, res, next) {
  const user = req.user;
  if (!user) {
    res.status(401).send(`
          <h1>Please log in to view this page</h1>
          <a href="/">Log in</a>
        `);
  } else {
    next();
  }
}

function verifyUser(req, res, next) {
  const token = req.cookies.user;
  if (token) {
    const user = jwt.verify(token, SECRET);
    req.user = user;
  }
  next();
}
module.exports = { verifyUser, SECRET, getAuth };
