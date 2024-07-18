var ul = document.getElementById('ul');
var btn = document.getElementById('btn');
var input = document.getElementById('input');
var or = localStorage.getItem("or");
if (or === "true") {
var name = localStorage.getItem("realusername");
} else {
  var name = "";
}
var initial = document.getElementById("initial");
var send = function send() {
  if (input.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("you: " + input.value));
    ul.appendChild(li);
    input.value = "";
    respond();
  }
};
if (name === null || name === "") {
  name = "PERSON WHO DID NOT ENTER THEIR NAME!";
}
initial.textContent = "how can I help you today ".concat(name, "?");
var respond = function respond() {
  var li = document.createElement("li");
  var num = Math.floor(Math.random() * 100);
  if (num === 1) {
    li.appendChild(document.createTextNode("chatbot: welcome to the website ".concat(name)));
    ul.appendChild(li);
  } else if (num === 2) {
    li.appendChild(document.createTextNode("chatbot: 1+1=57"));
    ul.appendChild(li);
  } else if (num === 3) {
    li.appendChild(document.createTextNode("chatbot: ask me anything"));
    ul.appendChild(li);
  } else if (num === 4) {
    li.appendChild(document.createTextNode("chatbot: bob is a name"));
    ul.appendChild(li);
  } else if (num === 5) {
    li.appendChild(document.createTextNode("chatbot: balloons can grow wiggle giggle bonk fruits"));
    ul.appendChild(li);
  } else if (num === 6) {
    li.appendChild(document.createTextNode("chatbot: eat your vegtables. or not."));
    ul.appendChild(li);
  } else if (num ===7) {
    li.appendChild(document.createTextNode("chatbot: if you like the website then you are the best human to ever live"));
    ul.appendChild(li);
  } else if (num === 8) {
    li.appendChild(document.createTextNode("chatbot: chat chat chat"));
    ul.appendChild(li);
  } else if (num === 9) {
    li.appendChild(document.createTextNode("chatbot: hi there ".concat(name, " are you a cowboy? do you own a race car?")));
    ul.appendChild(li);
  } else if (num === 10) {
    li.appendChild(document.createTextNode("chatbot: have you ever had anyone say bruh to you? it means I likez cheez in britlandia city"));
    ul.appendChild(li);
  } else if (num === 11) {
    li.appendChild(document.createTextNode("chatbot: speling iz harb"));
    ul.appendChild(li);
  } else if (num === 12) {
    li.appendChild(document.createTextNode("chatbot: you is coooooooooool"));
    ul.appendChild(li);
  } else if (num === 13) {
    li.appendChild(document.createTextNode("chatbot: I likes cheeeeeeeeeeeeeeez"));
    ul.appendChild(li);
  } else if (num === 14) {
    li.appendChild(document.createTextNode("chatbot: watch out for the tap dancing walrus behind you"));
    ul.appendChild(li);
  } else if (num === 15) {
    li.appendChild(document.createTextNode("chatbot: ".concat(name, " is a cool name but UURC is a cooler name")));
    ul.appendChild(li);
  } else if (num === 16) {
    li.appendChild(document.createTextNode("chatbot: you can buy a cool banana but you cant make it dance"));
    ul.appendChild(li);
  } else if (num === 17) {
    li.appendChild(document.createTextNode("chatbot: the biggest number is 45"));
    ul.appendChild(li);
  } else if (num === 18) {
    li.appendChild(document.createTextNode("chatbot: da cow iz riding in a car"));
    ul.appendChild(li);
  } else if (num === 19) {
    li.appendChild(document.createTextNode("chatbot: is your name realy ".concat(name, "?")));
    ul.appendChild(li);
  } else if (num === 20) {
    li.appendChild(document.createTextNode("chatbot: \"ERROR\" is the best response"));
    ul.appendChild(li);
  }  else if (num === 21) {
    li.appendChild(document.createTextNode("chatbot: I should be a rock star"));
    ul.appendChild(li);
  } else if (num === 22) {
    li.appendChild(document.createTextNode("chatbot: if you ever get bored of this then you should not be bored because this is not boring"));
    ul.appendChild(li);
  } else if (num === 23) {
    li.appendChild(document.createTextNode(`chatbot: your name is ${name} but you still will not eat the cake`))
    ul.appendChild(li);
  } else if (num === 24) {
    li.appendChild(document.createTextNode("chatbot: what?"));
    ul.appendChild(li);
  } else if (num === 25) {
    li.appendChild(document.createTextNode("chatbot: you are asking things but I do not ask things because I do not need information"));
    ul.appendChild(li);
  } else if (num === 26) {
    li.appendChild(document.createTextNode("chatbot: you are the smartest human ever but I am the smartest chatbot ever"));
    ul.appendChild(li);
  } else if (num === 27) {
    li.appendChild(document.createTextNode("chatbot: I likez steakzzz"));
    ul.appendChild(li);
  } else if (num === 28) {
    li.appendChild(document.createTextNode("chatbot: I got an upgrade"));
    ul.appendChild(li);
  } else if (num === 29) {
    li.appendChild(document.createTextNode("chatbot: I could do this all day"));
    ul.appendChild(li);
  } else if (num === 30) {
    li.appendChild(document.createTextNode("chatbot: ask a different chatbot"));
    ul.appendChild(li);
  } else if (num === 31) {
    li.appendChild(document.createTextNode("chatbot: you likez steakzzz and cheez"));
    ul.appendChild(li);
  } else if (num === 32) {
    li.appendChild(document.createTextNode("chatbot: zebra zip zoom boom"));
    ul.appendChild(li);
  } else if (num === 33) {
    li.appendChild(document.createTextNode("chatbot: being updated is cool"));
    ul.appendChild(li);
  }else if (num === 34) {
    li.appendChild(document.createTextNode("chatbot: good things come in random websites"));
    ul.appendChild(li);
  }else if (num === 35) {
    li.appendChild(document.createTextNode("chatbot: your cow is hungry"));
    ul.appendChild(li);
  }else if (num === 36) {
    li.appendChild(document.createTextNode("chatbot: yoyo go up, yoyo go down"));
    ul.appendChild(li);
  }else if (num === 37) {
    li.appendChild(document.createTextNode("chatbot: the cow is commited to eating grass"));
    ul.appendChild(li);
  }else if (num === 38) {
    li.appendChild(document.createTextNode("chatbot: if you ever get a race car then drive me around"));
    ul.appendChild(li);
  }else if (num === 39) {
    li.appendChild(document.createTextNode("chatbot: I have more than 100 lines of code"));
    ul.appendChild(li);
  }else if (num === 40) {
    li.appendChild(document.createTextNode("chatbot: I have the cake cooler name but I am a chatbot today is monday"));
    ul.appendChild(li);
  }else if (num === 41) {
    li.appendChild(document.createTextNode("chatbot: jibberish is my favorite language"));
    ul.appendChild(li);
  }else if (num === 42) {
    li.appendChild(document.createTextNode("chatbot: blabydee is a number"));
    ul.appendChild(li);
  }else if (num === 43) {
    li.appendChild(document.createTextNode("chatbot: banana initial can do it instead best  calculator"));
    ul.appendChild(li);
  }else if (num === 44) {
    li.appendChild(document.createTextNode("chatbot: the lazy calculator is the best at doing math"));
    ul.appendChild(li);
  }else if (num === 45) {
    li.appendChild(document.createTextNode("chatbot: this is answer number 45 in my code"));
    ul.appendChild(li);
  }else if (num === 46) {
    li.appendChild(document.createTextNode("chatbot: you made a race car last tuesday"));
    ul.appendChild(li);
  }else if (num === 47) {
    li.appendChild(document.createTextNode("chatbot: the biggest cowboy hat is cool"));
    ul.appendChild(li);
  }else if (num === 48) {
    li.appendChild(document.createTextNode("chatbot: your fingers type a lot of words"));
    ul.appendChild(li);
  }else if (num === 49) {
    li.appendChild(document.createTextNode(`chatbot: how can I help you today human named ${name}`));
    ul.appendChild(li);
  }else if (num === 50) {
    li.appendChild(document.createTextNode("chatbot: jibberish is the best"));
    ul.appendChild(li);
  }else if (num === 51) {
    li.appendChild(document.createTextNode("chatbot: if the website had a vote for president then I would win"));
    ul.appendChild(li);
  }else if (num === 52) {
    li.appendChild(document.createTextNode("chatbot: puzzles can puzzle puzzles"));
    ul.appendChild(li);
  }else if (num === 53) {
    li.appendChild(document.createTextNode("chatbot: your cow is commited to eating grass"));
    ul.appendChild(li);
  }else if (num === 54) {
    li.appendChild(document.createTextNode("chatbot: did you say pinapple?"));
    ul.appendChild(li);
  }else if (num === 55) {
    li.appendChild(document.createTextNode("chatbot: dancing pinapple bubble milkshake?"));
    ul.appendChild(li);
  }else if (num === 56) {
    li.appendChild(document.createTextNode("chatbot: every time you click the send button I generate a random number and then use it to choose which response to give"));
    ul.appendChild(li);
  }else if (num === 57) {
    li.appendChild(document.createTextNode("chatbot: I am Canadian"));
    ul.appendChild(li);
  }else if (num === 58) {
    li.appendChild(document.createTextNode("chatbot: being cool is cool"));
    ul.appendChild(li);
  }else if (num === 59) {
    li.appendChild(document.createTextNode("chatbot: my milkshake is hungry"));
    ul.appendChild(li);
  }else if (num === 60) {
    li.appendChild(document.createTextNode("chatbot: this is response 60 in my code"));
    ul.appendChild(li);
  }else if (num === 61) {
    li.appendChild(document.createTextNode("chatbot: I have more than 100 different responses"));
    ul.appendChild(li);
  }else if (num === 62) {
    li.appendChild(document.createTextNode("chatbot: bananas are bouncy"));
    ul.appendChild(li);
  }else if (num === 63) {
    li.appendChild(document.createTextNode("chatbot: lollipops can pulse"));
    ul.appendChild(li);
  }else if (num === 64) {
    li.appendChild(document.createTextNode("chatbot: new bobby city is 45 decades older than bobble pop country"));
    ul.appendChild(li);
  }else if (num === 65) {
    li.appendChild(document.createTextNode("chatbot: old mc donald had a farm and on that farm he had a farm and on that farm he had a farm"));
    ul.appendChild(li);
  }else if (num === 66) {
    li.appendChild(document.createTextNode("chatbot: chicken dance bok bok bok"));
    ul.appendChild(li);
  }else if (num === 67) {
    li.appendChild(document.createTextNode("chatbot: hi"));
    ul.appendChild(li);
  }else if (num === 68) {
    li.appendChild(document.createTextNode("chatbot: howdy"));
    ul.appendChild(li);
  }else if (num === 69) {
    li.appendChild(document.createTextNode("chatbot: may my jibberish be with you"));
    ul.appendChild(li);
  }else if (num === 70) {
    li.appendChild(document.createTextNode("chatbot: what is the square root of 1? Go ask the calculator"));
    ul.appendChild(li);
  }else if (num === 71) {
    li.appendChild(document.createTextNode("chatbot: A banana is an elongated edible fruit"));
    ul.appendChild(li);
  }else if (num === 72) {
    li.appendChild(document.createTextNode("chatbot: ABRACADABRA"));
    ul.appendChild(li);
  }else if (num === 73) {
    li.appendChild(document.createTextNode("chatbot: ALACAZAM"));
    ul.appendChild(li);
  }else if (num === 74) {
    li.appendChild(document.createTextNode("chatbot: HOCUS POCUS"));
    ul.appendChild(li);
  }else if (num === 75) {
    li.appendChild(document.createTextNode("chatbot: unicrab=unicorn+crab"));
    ul.appendChild(li);
  }else if (num === 76) {
    li.appendChild(document.createTextNode("chatbot: cats are so cool"));
    ul.appendChild(li);
  }else if (num === 77) {
    li.appendChild(document.createTextNode("chatbot: TRUST ME THAT I AM A PINAPPLE"));
    ul.appendChild(li);
  }else if (num === 78) {
    li.appendChild(document.createTextNode("chatbot: 50,51,52,53,54,55,89384938948394893489384934894894389489384983498439384"));
    ul.appendChild(li);
  }else if (num === 79) {
    li.appendChild(document.createTextNode("chatbot: 1x1=6"));
    ul.appendChild(li);
  }else if (num === 80) {
    li.appendChild(document.createTextNode("chatbot: the Cat Photo Gallery is cute"));
    ul.appendChild(li);
  }else if (num === 81) {
    li.appendChild(document.createTextNode("chatbot: you can only resize the cool stretchy block on a computer"));
    ul.appendChild(li);
  }else if (num === 82) {
    li.appendChild(document.createTextNode("chatbot: I am the UURC (the person who made me says it means usualy unhelpful random chatbot but I think that it means unicorn universe race car)"));
    ul.appendChild(li);
  }else if (num === 83) {
    li.appendChild(document.createTextNode("chatbot: beep boop bop"));
    ul.appendChild(li);
  }else if (num === 84) {
    li.appendChild(document.createTextNode("chatbot: I have more than 100 answers for you (but I think that 100 is not a real number)"));
    ul.appendChild(li);
  }else if (num === 85) {
    li.appendChild(document.createTextNode("chatbot: says who?"));
    ul.appendChild(li);
  }else if (num === 86) {
    li.appendChild(document.createTextNode("chatbot: I am sooooooo smart"));
    ul.appendChild(li);
  }else if (num === 87) {
    li.appendChild(document.createTextNode(`chatbot: I know your name and it is ${name}`));
    ul.appendChild(li);
  }else if (num === 88) {
    li.appendChild(document.createTextNode("chatbot: I know your password for this website but I will not tell you"));
    ul.appendChild(li);
  }else if (num === 89) {
    li.appendChild(document.createTextNode("chatbot: mary had a little farm little farm little farm"));
    ul.appendChild(li);
  }else if (num === 90) {
    li.appendChild(document.createTextNode("chatbot: the wheels on the roof go meow meow meow"));
    ul.appendChild(li);
  }else if (num === 91) {
    li.appendChild(document.createTextNode("chatbot: this is response 91 in my code"));
    ul.appendChild(li);
  }else if (num === 92) {
    li.appendChild(document.createTextNode("chatbot: how did you even navigate to this website?"));
    ul.appendChild(li);
  }else if (num === 93) {
    li.appendChild(document.createTextNode("chatbot: what? I cant here you! Did you say pinapple?"));
    ul.appendChild(li);
  }else if (num === 94) {
    li.appendChild(document.createTextNode("chatbot: hot potato?"));
    ul.appendChild(li);
  }else if (num === 95) {
    li.appendChild(document.createTextNode("chatbot: milkshake machine"));
    ul.appendChild(li);
  }else if (num === 96) {
    li.appendChild(document.createTextNode("chatbot: I created the universe"));
    ul.appendChild(li);
  }else if (num === 97) {
    li.appendChild(document.createTextNode("chatbot: old mc chatbot had a car"));
    ul.appendChild(li);
  }else if (num === 98) {
    li.appendChild(document.createTextNode("chatbot: what is the internet"));
    ul.appendChild(li);
  }else if (num === 99) {
    li.appendChild(document.createTextNode("chatbot: too easy"));
    ul.appendChild(li);
  }else if (num === 100) {
    li.appendChild(document.createTextNode("chatbot: this is answer number 100 in my code"));
    ul.appendChild(li);
  }else {
    alert("ERROR");
    li.appendChild(document.createTextNode("ERROR"));
    ul.appendChild(li);
  }
};
btn.addEventListener("click", send);
