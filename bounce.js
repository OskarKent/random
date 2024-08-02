const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

let x = 250;
let y = 250;

let speedx = 5;
let speedy = 4;

const ball = () => {
	ctx.fillStyle = 'white'
	ctx.fillRect(x,y,10,10)
	y+=speedy;
	x+=speedx;
	if (x>=490) {
		let ranx = Math.random()
		speedx=-ranx*10;
	} else if (y>=490) {
		let rany = Math.random()
		speedy=-rany*10
	} else if (x<=10) {
		let ranx = Math.random()
		speedx=ranx*10;
	} else if (y<=10) {
		let rany = Math.random()
		speedy=rany*10
	}
}

setInterval(ball,100)