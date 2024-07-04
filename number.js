var num = 0;
var h1 = document.getElementById("number");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var cps = 1;
var price = 100;
var plus = function plus() {
  num += cps;
  h1.textContent = "$" + num;
};
var up = function up() {
  if (num >= price) {
    cps++;
    num -= price;
    price *= 2;
    btn1.textContent = "+$" + cps;
    btn2.textContent = "upgrade button for $" + price;
    btn3.textContent = "mega upgrade button for $" + price * 5;
  }
};
var megaup = function megaup() {
  if (num >= price * 5) {
    cps += 25;
    num -= price * 5;
    price *= 2;
    btn1.textContent = "+$" + cps;
    btn2.textContent = "upgrade button for $" + price;
    btn3.textContent = "mega upgrade button for $" + price * 5;
  }
};
btn1.addEventListener("click", plus);
btn2.addEventListener("click", up);
btn3.addEventListener("click", megaup);
