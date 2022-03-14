function register(e) {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if(!checkEmail(document.getElementById("Email").value)){
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
  let format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  if(pass.match(format))
  {
    if(pass != confirmPass){
      alert("Password and Confirm Password don't match!\nPlease try Again!");
      document.getElementById("confirmPass");
      return false;
    }
    else{
      return true;
    }
  }
  document.getElementById("Pass").focus();
  alert("Please make sure your password contains at least:\n"+
  "One uppercase letter\nO"+
  "ne lowercase letter\n"+
  "One number\n"+
  "One special character()\n"+
  "And is at least 8 simbols long");
  return false;
}

function checkEmail(email){
  let format = /\w+@+\w+.+\w+/;
 
  if(email.match(format))
  {
    return true;
  }
  alert("Please make sure your email is spelled correctly:\n");
  return false;
}

var registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", register);
