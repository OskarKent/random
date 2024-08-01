let num = 0;
const textnum = document.getElementById("textnum");

const change = () => {
	num++;
	textnum.textContent = num;
}

setInterval(change, 1000);