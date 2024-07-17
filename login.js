const username = document.getElementById("username");
const password = document.getElementById("password");
const realusername = localStorage.getItem('realusername');
const realpassword = localStorage.getItem("realpassword");
const h1 = document.getElementById('h1');
const link = document.getElementById('link');
const button = document.getElementById('button')

const check1 = () => {
	if(username.value === realusername && password.value===realpassword){
		h1.textContent=`welcome ${realusername}`
	} else {
		h1.textContent="incorrect username or password"
	}
}

const make = () => {
	const realusername = prompt("what do you want your username to be?");
	const realpassword = prompt("what do you want your password to be?")
	localStorage.setItem('realusername',realusername);
	localStorage.setItem('realpassword',realpassword);
}

button.addEventListener("click",check1)
link.addEventListener("click",make)

