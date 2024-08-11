const h1 = document.getElementById("h1");
const button = document.getElementById("button");

const makeNums = () => {
	let num1 = Math.random()*100;
	h1.textContent = `${num1}`;
}

button.addEventListener("click",makeNums)