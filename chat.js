const ul = document.getElementById('ul')
const btn = document.getElementById('btn')
const input = document.getElementById('input')
let name = localStorage.getItem("realusername")
const initial = document.getElementById("initial")

const send = () =>{
	if (input.value.length > 0 ){
	var li = document.createElement("li");
    li.appendChild(document.createTextNode("you: "+input.value));
    ul.appendChild(li);
    input.value = "";
    respond();
}
}

if (name === null || name === "") {name="PERSON WHO DID NOT ENTER THEIR NAME!"}

initial.textContent=`how can I help you today mr ${name}?`

const respond = () =>{
	var li = document.createElement("li");
	let num = Math.floor(Math.random() * 100);
	if (num>=0&&num<5) {
		li.appendChild(document.createTextNode(`chatbot: welcome to the website mr ${name}`));
    	ul.appendChild(li);
	}else if (num>=5&&num<10) {
		li.appendChild(document.createTextNode("chatbot: 1+1=57"));
    	ul.appendChild(li);
	}else if (num>=10&&num<15) {
		li.appendChild(document.createTextNode("chatbot: ask me anything"));
    	ul.appendChild(li);
	}else if (num>=15&&num<20) {
		li.appendChild(document.createTextNode("chatbot: bob is a name"));
    	ul.appendChild(li);
	}else if (num>=20&&num<25) {
		li.appendChild(document.createTextNode("chatbot: balloons can grow wiggle giggle bonk fruits"));
    	ul.appendChild(li);
	}else if (num>=25&&num<30) {
		li.appendChild(document.createTextNode("chatbot: eat your vegtables. or not."));
    	ul.appendChild(li);
	}else if (num>=30&&num<35) {
		li.appendChild(document.createTextNode("chatbot: if you like the website then you are the best human to ever live"));
    	ul.appendChild(li);
	}else if (num>=35&&num<40) {
		li.appendChild(document.createTextNode("chatbot: chat chat chat"));
    	ul.appendChild(li);
	}else if (num>=40&&num<45) {
		li.appendChild(document.createTextNode(`chatbot: hi there ${name} are you a cowboy? do you own a race car?`));
    	ul.appendChild(li);
	}else if (num>=45&&num<50) {
		li.appendChild(document.createTextNode("chatbot: have you ever had anyone say bruh to you? it means I likez cheez in britlandia city"));
    	ul.appendChild(li);
	}else if (num>=50&&num<55) {
		li.appendChild(document.createTextNode(`chatbot: speling iz harb`));
    	ul.appendChild(li);
	}else if (num>=55&&num<60) {
		li.appendChild(document.createTextNode(`chatbot: you is coooooooooool`));
    	ul.appendChild(li);
	}else if (num>=60&&num<65) {
		li.appendChild(document.createTextNode(`chatbot: I likes cheeeeeeeeeeeeeeez`));
    	ul.appendChild(li);
	}else if (num>=65&&num<70) {
		li.appendChild(document.createTextNode(`chatbot: watch out for the tap dancing walrus behind you`));
    	ul.appendChild(li);
	}else if (num>=70&&num<75) {
		li.appendChild(document.createTextNode(`chatbot: ${name} is a cool name but UURC is a cooler name`));
    	ul.appendChild(li);
	}else if (num>=75&&num<80) {
		li.appendChild(document.createTextNode(`chatbot: you can buy a cool banana but you cant make it dance`));
    	ul.appendChild(li);
	}else if (num>=80&&num<85) {
		li.appendChild(document.createTextNode(`chatbot: the biggest number is 45`));
    	ul.appendChild(li);
	}else if (num>=85&&num<90) {
		li.appendChild(document.createTextNode(`chatbot: da cow iz riding in a car`));
    	ul.appendChild(li);
	}else if (num>=90&&num<95) {
		li.appendChild(document.createTextNode(`chatbot: is your name realy ${name}?`));
    	ul.appendChild(li);
	}else if (num>=95&&num<100) {
		li.appendChild(document.createTextNode(`"chatbot: ERROR is the best response"`));
    	ul.appendChild(li);
	}else{
		alert("ERROR")
		li.appendChild(document.createTextNode(`ERROR`));
    	ul.appendChild(li);
	}
}



btn.addEventListener("click",send)

