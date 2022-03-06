function register(e) {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (
    !checkPass(
      document.getElementById("Pass").value,
      document.getElementById("confirmPass").value
    )
  ) {
    alert("Password and Confirm Password don't match!\nPlease try Again!");
  } else {
    let user = new User(
      btoa(document.getElementById("Username").value),
      btoa(document.getElementById("Email").value),
      btoa(document.getElementById("Pass").value)
    );

    if (availableUsername(user.Username) && availableEmail(user.Email)) {
      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));
      alert("Successfully registered!");
      window.location = "login.html";
    } else if (availableUsername(user.Username) == false) {
      alert("An account with that username already exists!");
    } else if (availableEmail(user.Email) == false) {
      alert("An account with that Email already exists!");
    }
  }
}

function availableUsername(nameToCheck) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  for (var i = 0; i < users.length; i++) {
    if (nameToCheck == atob(users[i].Username)) {
      return false;
    }
  }
  return true;
}

function availableEmail(emailToCheck) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  for (var i = 0; i < users.length; i++) {
    if (emailToCheck == atob(users[i].Email)) {
      return false;
    }
  }
  return true;
}

function checkPass(pass, confirmPass) {
  return pass == confirmPass;
}

var registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", register);
