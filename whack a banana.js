var banana = document.getElementById("banana");
var num = 0;
var h1 = document.getElementById("h1");
var plus = function plus() {
  var ran1 = Math.floor(Math.random() * 500);
  var ran2 = Math.floor(Math.random() * 500);
  var ran3 = Math.floor(Math.random() * 500);
  var ran4 = Math.floor(Math.random() * 500);
  num++;
  h1.textContent = num;
  banana.style.position = "absolute";
  banana.style.right = ran1 + "%";
  banana.style.left = ran2 + "%";
  banana.style.top = ran3 + "%";
  banana.style.bottom = ran4 + "%";
};
banana.addEventListener("click", plus);