var hiThere=0;
var button=document.getElementById("banana");
var ul = document.querySelector("ul");

function maketext() {
	hiThere++;
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("hi there!"));
	ul.appendChild(li);
	if (hiThere===101) {
	li.appendChild(document.createTextNode("\n you made a hi there more than 100 times"));
	ul.appendChild(li);
}
	if (hiThere===1001) {
	li.appendChild(document.createTextNode("\n you made a hi there more than 1000 times"));
	ul.appendChild(li);
}
	if (hiThere===10001) {
	li.appendChild(document.createTextNode("\n you made a hi there more than 10000 times"));
	ul.appendChild(li);
}
	if (hiThere===100001) {
	li.appendChild(document.createTextNode("\n you made a hi there more than 100000 times"));
	ul.appendChild(li);
}
}

banana.addEventListener("click",maketext)
