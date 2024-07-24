const buttonstyled = document.getElementById("buttonstyled");
const enter = document.getElementById("enter");
const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const in3 = document.getElementById("in3");
const in4 = document.getElementById("in4");
const in5 = document.getElementById("in5");
const in6 = document.getElementById("in6");

const entering = () => {
	buttonstyled.style.width = in1.value+"px";
	buttonstyled.style.height = in2.value+"px";
	buttonstyled.style.borderRadius = in3.value+"px";
	buttonstyled.style.background = in4.value;
	buttonstyled.style.color = in5.value;
	buttonstyled.textContent = in6.value;
	in1.value = "";
	in2.value = "";
	in3.value = "";
	in6.value = "";
}

enter.addEventListener("click",entering)