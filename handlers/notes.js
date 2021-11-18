const login = require("./login");
const db = require("../database/connection");

function getUserId(username) {
  return login.findUser(username).then((data) => {
    return data["id"];
  });
}

function setUserNotes(content, title, user_id) {
  const array = [content, title, user_id];
  return db.query(`INSERT INTO sticky_note (content,title, user_id) VALUES($1,$2,$3)`, array);
}

function getUserNotes(username) {
  return getUserId(username)
    .then((data) => {
      return db.query(`SELECT * FROM sticky_note WHERE user_id = ${data}`);
    })
    .then((results) => {
      return results.rows;
    });
}
