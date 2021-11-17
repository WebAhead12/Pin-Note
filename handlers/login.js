const db = require("../database/connection");

function findUser(name) {
  return db.query("SELECT * FROM users ").then((result) => {
    const userObj = results.rows;
    userObj.find((element) => element["username"] === name);
  });
}
