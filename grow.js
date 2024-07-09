var img = document.getElementById("img");
var makeBig = function makeBig() {
  var h1 = document.getElementById("h1");
  var vwidth = img.clientWidth;
  var vheight = img.clientHeight;
  img.style.width = vwidth + 5 + 'px';
  img.style.height = vheight + 5 + 'px';
  h1.textContent = "your pizza is ".concat(vheight, " pixels heigh and ").concat(vwidth, " pixels wide");
};
img.addEventListener("click", makeBig);
