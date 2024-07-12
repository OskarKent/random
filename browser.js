var button = document.getElementById("button");
var input = document.getElementById("input");
var a = document.getElementById("a");
var h1 = document.getElementById("h1");
//document.addEventListener('DOMContentLoaded', () => {
//document.getElementById('myLink').href = 'https://newexample.com';
var go = function go() {
  var num = input.value.length;
  h1.textContent = "go to ".concat(input.value);
  a.href = input.value;
};
var clear = function clear() {
  h1.textContent = "";
};
button.addEventListener("click", go);
a.addEventListener("click", clear);