const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

let SECRET = process.env.SECRET;

function verifyUser(req, res, next) {
  const token = req.cookies.user;
  if (token) {
    const user = jwt.verify(token, SECRET);
    req.user = user;
  }
  next();
}
module.exports = { verifyUser, SECRET };
