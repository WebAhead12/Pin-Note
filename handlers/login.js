const db = require("../database/connection");

function findUser(name) {
  return db.query("SELECT * FROM users ").then((results) => {
    const userObj = results.rows;
    return userObj.find((element) => element["username"] === name);
  });
}

function setUser(username, password) {
  const array = [username, password];
  db.query("INSERT INTO users(username,password) VALUES($1,$2)", array);
}

function checkUser(user) {
  console.log("name:" + user.username);
  return findUser(user.username).then((results) => {
    if (results) {
      return ["Has User", results.password];
    } else {
      setUser(user.username, user.password);
      return ["No User"];
    }
  });
}

module.exports = { setUser, checkUser, findUser };
