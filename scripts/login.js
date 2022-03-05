function login(e) {
    e.preventDefault();
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Pass").value;
  
    let currentUser = null;
    for (var i = 0; i < users.length; i++) {
      if (username == users[i].Username && password == users[i].Pass) {
        currentUser = users[i];
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        alert("Login Successfull!");
        window.location = "/index.html";
      }
    }
  
    if(currentUser==null) {
        alert('Wrong username or password!');
    }
  }
  
  var loginForm = document.querySelector("#loginForm");
  
  loginForm.addEventListener("submit", login);