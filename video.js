let vid = document.getElementById("vid");
const input = document.getElementById("input");
const enter = document.getElementById("enter");

const enter2 = () =>{
	vid.src=input.value;
	vid.style.width = "500px";
	input.value = "";
}

enter.addEventListener("click",enter2)