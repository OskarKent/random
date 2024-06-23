alert("this may not work on some devices");

var num = 1;
var enter = prompt("to confirm please type in CRASH");
var crashing = true;

var crash=function() {
	alert("starting...")
	setTimeout(5000)
	if (enter==="CRASH" && crashing===true) {
		while (num>0 && crashing===true){
			console.log(num);
			num++;
		}
	}else{
		alert("crash failed");
	}
}

crash();
