const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
let wins = 0;
const num2 = document.getElementById("wins")

const choose1 = ()=>{
	let num = Math.floor(Math.random() * 100);
	if (num >0 && num<33) {
		var what = "rock";
	}
	if (num >33 && num<66) {
		var what = "paper";
	}else if (num >66 && num<99) {
		var what = "scissors";
	}
	
	if (what === "scissors") {
		alert("you win");
		wins++;
	}else if (what === "rock") {
		alert("we both did rock");
	}else if (what === "paper") {
		alert("I win");
	}
	num2.textContent = wins;
}

const choose2 = ()=>{
	let num = Math.floor(Math.random() * 100);

	if (num >0 && num<33) {
		var what = "rock";
	}
	if (num >33 && num<66) {
		var what = "paper";
	}else if (num >66 && num<99) {
		var what = "scissors";
	}
	
	if (what === "scissors") {
		alert("I win");
	}else if (what === "rock") {
		alert("you win");
		wins++;
	}else if (what === "paper") {
		alert("we both did paper");
	}
	num2.textContent = wins;
}

const choose3 = ()=>{
	let num = Math.floor(Math.random() * 100);
	if (num >0 && num<33) {
		var what = "rock";
	}
	if (num >33 && num<66) {
		var what = "paper";
	}else if (num >66 && num<99) {
		var what = "scissors";
	}
	
	if (what === "scissors") {
		alert("we both did scissors");
	}else if (what === "rock") {
		alert("I win");
	}else if (what === "paper") {
		alert("you win");
		wins++;
	}
	num2.textContent = wins;
}

b1.addEventListener("click",choose1)
b2.addEventListener("click",choose2)
b3.addEventListener("click",choose3)