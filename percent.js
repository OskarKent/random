const rangebar = document.getElementById("rangebar");
const textpercent = document.getElementById("textpercent");
const percentbar = document.getElementById("percentbar");

const change = () => {
	textpercent.textContent = rangebar.value+" percent";
	percentbar.value = rangebar.value;
}

rangebar.addEventListener("input",change)