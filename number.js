let num = 0;
const h1 = document.getElementById("number");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
let cps = 1;
let price = 100;

const plus = () =>{
	num+=cps;
	h1.textContent = "$"+num;
}

const up = () =>{
	if (num>=price) {
		cps++;
		num-=price;
		price *= 2;
		btn1.textContent="+$"+cps;
		btn2.textContent="upgrade button for $"+price;
		btn3.textContent="mega upgrade button for $"+price*5;
}
}

const megaup = () =>{
	if (num>=price*5) {
		cps+=25;
		num-=price*5;
		price *= 2;
		btn1.textContent="+$"+cps;
		btn2.textContent="upgrade button for $"+price;
		btn3.textContent="mega upgrade button for $"+price*5;
}
}

btn1.addEventListener("click",plus);

btn2.addEventListener("click",up);

btn3.addEventListener("click",megaup)
