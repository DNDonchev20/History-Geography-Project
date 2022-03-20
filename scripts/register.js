//This function handles alerts
function alertToUser(alertFor) {
  switch (alertFor) {
    case 1:
      alert("Successfully registered!");
      break;
    case 2:
      alert("An account with that username already exists!");
      break;
    case 3:
      alert("An account with that Email already exists!");
      break;
    case 4:
      alert("Password and Confirm Password don't match!\nPlease try Again!");
      break;
    case 5:
      alert(
        "Please make sure your password contains at least:\n" +
          "One uppercase letter\nO" +
          "ne lowercase letter\n" +
          "One number\n" +
          "One special character\n" +
          "And is at least 8 simbols long"
      );
      break;
    case 6:
      alert("Please make sure your email is spelled correctly:\n");
      break;
  }
}
function register(e) {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (!checkEmail(document.getElementById("Email").value)) {
    document.getElementById("Email").focus();
    return;
  }
  if (
    !checkPass(
      document.getElementById("Pass").value,
      document.getElementById("confirmPass").value
    )
  ) {
    return;
  }
  let user = new User(
    document.getElementById("Username").value,
    document.getElementById("Email").value,
    document.getElementById("Pass").value
  );

  if (availableUsername(user.Username) && availableEmail(user.Email)) {
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    alertToUser(1);
    window.location = "login.html";
  } else if (availableUsername(user.Username) == false) {
    alertToUser(2);
  } else if (availableEmail(user.Email) == false) {
    alertToUser(3);
  }
}

function availableUsername(nameToCheck) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  for (var i = 0; i < users.length; i++) {
    if (nameToCheck == users[i].Username) {
      return false;
    }
  }
  return true;
}

function availableEmail(emailToCheck) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  for (var i = 0; i < users.length; i++) {
    if (emailToCheck == users[i].Email) {
      return false;
    }
  }
  return true;
}

function checkPass(pass, confirmPass) {
  let format =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  if (pass.match(format)) {
    if (pass != confirmPass) {
      alertToUser(4);
      document.getElementById("confirmPass");
      return false;
    } else {
      return true;
    }
  }
  document.getElementById("Pass").focus();
  alertToUser(5);
  return false;
}

function checkEmail(email) {
  let format = /\w+@+\w+.+\w+/;

  if (email.match(format)) {
    return true;
  }
  alertToUser(6);
  return false;
}

var registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", register);
