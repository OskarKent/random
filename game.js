const input = document.getElementById("input");
const enter = document.getElementById("enter");
let num = Math.floor(Math.random() * 100)

const game = () =>{
	if (Number(input.value) === Number(num)) {
		alert("you win!");
		input.value = "";
	}else{
		alert("wrong number");
		input.value = "";
	}
}

enter.addEventListener("click",game)