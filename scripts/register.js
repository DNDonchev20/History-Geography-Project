var userCount = 0;

function register() {
  userCount = Number(localStorage.getItem("Users Count"));
  localStorage.setItem("Users Count", userCount);

  let user = new User(
    document.getElementById("Username").value,
    document.getElementById("Email").value,
    document.getElementById("Pass").value
  );

  let user_stringified = JSON.stringify(user);
  localStorage.setItem("#" + userCount + "User", user_stringified);

  ++userCount;
  localStorage.setItem("Users Count", userCount);
  return true;
}
