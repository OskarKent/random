var code = "cat";
var input = prompt("guess the code:");
var h1 = document.getElementById("h1");
var guess = function guess() {
  if (input === code) {
    alert("you won!");
    h1.textContent = "you won! the code is " + code + ". click this";
  } else {
    alert("wrong code");
  }
};
guess();
