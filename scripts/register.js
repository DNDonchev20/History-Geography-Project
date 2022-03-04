var userCount = 0;

function register() {
  userCount = Number(localStorage.getItem("Users Count"));
  localStorage.setItem("Users Count", userCount);

  if (
    !checkPass(
      document.getElementById("Pass").value,
      document.getElementById("confirmPass").value
    )
  ) {
    alert("Password and Confirm Password don't match!\nPlease try Again!");
    return false;
  }

  let user = new User(
    document.getElementById("Username").value,
    document.getElementById("Email").value,
    document.getElementById("Pass").value
  );

  if (availableUsername(user.Username) && availableEmail(user.Email)) {
    let user_stringified = JSON.stringify(user);
    localStorage.setItem("#" + userCount + "User", user_stringified);

    ++userCount;
    localStorage.setItem("Users Count", userCount);
    return true;
  } else if (availableUsername(user.Username) == false) {
    alert("An account with that username already exists!");
    return false;
  } else if (availableEmail(user.Email) == false) {
    alert("An account with that Email already exists!");
    return false;
  }
}

function availableUsername(nameToCheck) {
  let user;
  for (var i = 0; i < userCount; i++) {
    user = JSON.parse(localStorage.getItem("#" + i + "User"));
    if (nameToCheck == user.Username) {
      return false;
    }
  }
  return true;
}

function availableEmail(emailToCheck) {
  let user;
  for (var i = 0; i < userCount; i++) {
    user = JSON.parse(localStorage.getItem("#" + i + "User"));
    if (emailToCheck == user.Email) {
      return false;
    }
  }
  return true;
}

function checkPass(pass, confirmPass) {
  return pass == confirmPass;
}
