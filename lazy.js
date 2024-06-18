var num1 = prompt("enter a number to be multiplied");
var num2 = prompt("enter another number to be multiplied");
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
}else if(sum>=100){
	alert("the numbers are to big")
}else{
	alert("those are not numbers")
};