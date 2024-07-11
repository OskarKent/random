const button = document.getElementById("button");
const input = document.getElementById("input");
const a = document.getElementById("a");
const h1 = document.getElementById("h1");
//document.addEventListener('DOMContentLoaded', () => {
//document.getElementById('myLink').href = 'https://newexample.com';
const go = () =>{
	let num = input.value.length;
	h1.textContent = "go to website"
	a.href = input.value;
}

button.addEventListener("click",go)