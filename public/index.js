const username = document.getElementById("username");
const form = document.querySelector(".signInContainer");
const password = document.getElementById("password");
const errPar = document.getElementById("errPar");

const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
const errObj = {
  username: "Please enter a username",
  password: "Please enter your password",
  passLength: "Password must be more than 6 digits",
  wrongPassword: "Password is incorrect",
  noUser: "You need to make a user before you sign-in",
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
  if (password.value.length < 6) {
    errPar.textContent = errObj.passLength;
    return true;
  }
  return false;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(username.value, password.value);
  if (checkUser()) return;
  else {
    fetch("/log-in", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username: username.value, password: password.value }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.response[0] == "Has User") {
          if (response.response[1] == password.value) {
            window.location.href = "/notes";
          } else {
            errPar.textContent = wrongPassword;
          }
        } else {
          errPar.textContent = noUser;
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong while trying to log-in");
      });
  }
});
