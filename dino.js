const canvas = document.getElementById('canvas');
let x = 450;
const ctx = canvas.getContext('2d');
const button = document.getElementById("button");
const score = document.getElementById("score");

const Xc = 5;
const Ym = 450;

const makerect = () => {
	let h = Math.random()
	height = h*100;
	ctx.fillStyle = 'red';
	ctx.fillRect(x, Ym,150, height);
}

const forward = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	makerect()
	x-=15;
	if (x<-100) {
		x = 500;
	}
}

makerect()

let y = 450;

let jumping = false;
let maybe = true;

const up = () => {
	if (y>260 && jumping === true && maybe===true) {
		y-=10;
	} else{
		maybe = false;
		jumping=false;
		down()
	}
}

const down = () => {
	if (maybe === false && jumping === false && y<450) {
		y+=10;
	} else{
		maybe = true;
	}
}

setInterval(down,100)

const makejump = () => {
	jumping=true;
	up()
	setInterval(up,150)
}

const Cw = 30;
const Ch = 50;

const character = () => {
	ctx.fillStyle = 'lawngreen'
	ctx.fillRect(Xc,y,Cw,Ch)
}

button.addEventListener("click",makejump);
let num = 0;

const check = () => {
	if (Xc < x + 100 && Xc + Cw-50 > x && y + Ch > Ym) {
		alert("you lose")
		num = 0;
		x = 450;
	}
}

setInterval(forward,100)
setInterval(character,100)
setInterval(check,100)

const plus = () => {
	num++;
	score.textContent = "score: "+num;
}

setInterval(plus,1000)




