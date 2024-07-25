const stuff = document.getElementById("stuff");
const input = document.getElementById("input");

const search = () => {
	const buttons = document.querySelectorAll(".b2");
	const inputValue = document.getElementById("input").value.toLowerCase();
	buttons.forEach(button =>{
		if (button.textContent. toLowerCase().includes(inputValue)){
			button.style.display = "inline-block";
		} else{
			button.style.display = "none";
		}
	})
}

input.addEventListener("input",search)