let img = document.getElementById("img");
const input = document.getElementById("input");
const enter = document.getElementById("enter");

const enter2 = () =>{
	img.src=input.value;
	img.style.width = "500px";
	input.value = "";
}

enter.addEventListener("click",enter2)