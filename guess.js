const code = "stuff";
const input = prompt("guess the code:");
const h1 = document.getElementById("h1");

const guess = () =>{
	if (input === code) {
		alert("you won!")
		h1.textContent = "you won! the code is "+code+". click this"
	}else{
		alert("wrong code")
	}
}

guess();