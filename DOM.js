
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