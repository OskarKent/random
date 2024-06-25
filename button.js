const button = document.getElementById("button");
let num = 0;

const alerter = () => {
	num = Math.floor(Math.random() * 100)
	if (num>=0 && num<5) {
		alert("why did you click me?")
	}else if(num>=5 && num<10){
		alert("stop clicking me")
	}else if(num>=10 && num<15){
		alert("1+1=3")
	}else if(num>=15 && num<20){
		alert("cow go mooooooooooo")
	}else if(num>=20 && num<25){
		alert("I like axolotls")
	}else if(num>=25 && num<30){
		alert("go try the calculator")
	}else if(num>=30 && num<35){
		alert("do I look like a button?")
	}else if(num>=35 && num<40){
		alert("have a cake")
	}else if(num>=45 && num<50){
		alert("have a coffee")
	}else if(num>=50 && num<55){
		alert("click sound")
	}else if(num>=55 && num<60){
		alert("I can read your mind")
	}else if(num>=60 && num<65){
		alert("never say no")
	}else if(num>=65 && num<70){
		alert("never say yes")
	}else if(num>=70 && num<75){
		alert("potatos grow in the clouds")
	}else if(num>=75 && num<80){
		alert("this is the bes activity in the world")
	}else if(num>=80 && num<85){
		alert("you click me too much")
	}else if(num>=85 && num<90){
		alert("bananas are good for you")
	}else if(num>=90 && num<95){
		alert("the world is full of bananas")
	}else{
		alert("do not click on your overlord")
	}
}

button.addEventListener("click",alerter)