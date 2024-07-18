var username = document.getElementById("username");
var password = document.getElementById("password");
var realusername = localStorage.getItem('realusername');
var realpassword = localStorage.getItem("realpassword");
var h1 = document.getElementById('h1');
var link = document.getElementById('link');
var button = document.getElementById('button');
var logout = document.getElementById("logout");
var check1 = function check1() {
  if (username.value === realusername && password.value === realpassword) {
    h1.textContent = "welcome ".concat(realusername);
    var or = "true";
    localStorage.setItem('or', or);
  } else {
    h1.textContent = "incorrect username or password";
  }
};
var make = function make() {
  var realusername = prompt("what do you want your username to be?");
  var realpassword = prompt("what do you want your password to be?");
  localStorage.setItem('realusername', realusername);
  localStorage.setItem('realpassword', realpassword);
  alert("account created");
};
var out = function out() {
  var or = "false";
  localStorage.setItem('or', or);
  alert("logged out");
};
logout.addEventListener("click", out);
button.addEventListener("click", check1);
link.addEventListener("click", make);