var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+color1.value
	+", "
	+color2.value
	+")";

	css.textContent = body.style.background + ";";
}	


color1.addEventListener("input",setGradient)

color2.addEventListener("input",setGradient)













var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

function create() {
	var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "" ;
}

function addList() {
	if(inputLength() > 0) {
create();
	}
}

function addList2(event) {
	if (input.value.length > 0 && event.key === "Enter") {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "" ;
    }
}



button.addEventListener("click",addList)

input.addEventListener("keydown",addList2)