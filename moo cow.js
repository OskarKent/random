var button = document.getElementById("moo");
var ul = document.querySelector("ul");

function makeMoo(){
	var li = document.createElement("li");
    li.appendChild(document.createTextNode("moo!"));
    ul.appendChild(li);
}

moo.addEventListener("click",makeMoo)

