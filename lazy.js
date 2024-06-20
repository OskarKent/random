var num1 = prompt("enter the first number to be multiplied");
var num2 = prompt("enter the number to be multiplied with "+num1);
var sum = Number(num1)*Number(num2);
if (sum>=0 && sum<10){
	alert("try again in a few hours")
}else if (sum>=10 && sum<20){
	alert("that is to hard")
}else if (sum>=20 && sum<30){
	alert("try playing a video game instead")
}else if (sum>=30 && sum<40){
	alert("that is impossible")
}else if (sum>=40 && sum<50){
	alert("I do not feel like it")
}else if (sum>=50 && sum<60){
	alert("nobody is home")
}else if (sum>=60 && sum<70){
	alert("numbers are not important")
}else if (sum>=70 && sum<80){
	alert("ask someone else")
}else if (sum>=80 && sum<90){
	alert("I am busy")
}else if (sum>=90 && sum<100){
	alert("answering is overated")
}else if(sum>=100 && sum<110){
	alert("what is a number?")
}else if(sum>=110 && sum<120) {
	alert("the answer is not important")
}else if(sum>=130 && sum<140) {
	alert("it is not impossible which means that you can do it instead")
}else if(sum>=140 && sum<150) {
	alert("those do not look like numbers to me")
}else if(sum>=150 && sum<160) {
	alert("I have the answer but I will not tell you")
}else if(sum>=160 && sum<170) {
	alert("the answer is invisible")
}else if(sum>=180 && sum<190) {
	alert("I am a cow not a calculator")
}else if(sum>=190) {
	alert("the numbers are to big")
}else{
	alert("those are not numbers so they are not important")
}

