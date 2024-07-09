const img = document.getElementById("img");

const makeBig = () =>{
const h1 = document.getElementById("h1");
let vwidth = img.clientWidth;
let vheight = img.clientHeight;
img.style.width = vwidth + 5 +'px';
img.style.height = vheight + 5 +'px';
h1.textContent = `your pizza is ${vheight} pixels heigh and ${vwidth} pixels wide`
}

img.addEventListener("click",makeBig)