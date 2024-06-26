var input = document.getElementById("input");
var enter = document.getElementById("enter");
var num = Math.floor(Math.random() * 100);
var game = function game() {
  if (Number(input.value) === Number(num)) {
    alert("you win!");
    input.value = "";
  } else {
    alert("wrong number");
    input.value = "";
  }
};
enter.addEventListener("click", game);
