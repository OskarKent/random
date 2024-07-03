var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var wins = 0;
var num2 = document.getElementById("wins");
var choose1 = function choose1() {
  var num = Math.floor(Math.random() * 100);
  if (num > 0 && num < 33) {
    var what = "rock";
  }
  if (num > 33 && num < 66) {
    var what = "paper";
  } else if (num > 66 && num < 99) {
    var what = "scissors";
  }
  if (what === "scissors") {
    alert("you win");
    wins++;
  } else if (what === "rock") {
    alert("we both did rock");
  } else if (what === "paper") {
    alert("I win");
  }
  num2.textContent = wins;
};
var choose2 = function choose2() {
  var num = Math.floor(Math.random() * 100);
  if (num > 0 && num < 33) {
    var what = "rock";
  }
  if (num > 33 && num < 66) {
    var what = "paper";
  } else if (num > 66 && num < 99) {
    var what = "scissors";
  }
  if (what === "scissors") {
    alert("I win");
  } else if (what === "rock") {
    alert("you win");
    wins++;
  } else if (what === "paper") {
    alert("we both did paper");
  }
  num2.textContent = wins;
};
var choose3 = function choose3() {
  var num = Math.floor(Math.random() * 100);
  if (num > 0 && num < 33) {
    var what = "rock";
  }
  if (num > 33 && num < 66) {
    var what = "paper";
  } else if (num > 66 && num < 99) {
    var what = "scissors";
  }
  if (what === "scissors") {
    alert("we both did scissors");
  } else if (what === "rock") {
    alert("I win");
  } else if (what === "paper") {
    alert("you win");
    wins++;
  }
  num2.textContent = wins;
};
b1.addEventListener("click", choose1);
b2.addEventListener("click", choose2);
b3.addEventListener("click", choose3);
