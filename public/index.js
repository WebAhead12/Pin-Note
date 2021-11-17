const form = document.querySelector(".signInContainer");
const username = document.getElementById("username");
const password = document.getElementById("password");
const par = document.getElementById("errPar");

const errObj = {
  username: "Please enter a username",
  password: "Please enter your password",
};

const checkUser = function () {
  if (!username.value) {
    errPar.textContent = errObj.username;
    return true;
  }
  if (!password.value) {
    errPar.textContent = errObj.password;
    return true;
  }

  return false;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (checkUser()) return;
  else {
    errPar.textContent = "";
    fetch("/log-in", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.response == "success") {
          window.location.href = "/notes";
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong while trying to log-in");
      });
  }
});
