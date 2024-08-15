const move = document.getElementById("move");
let X = 0;
let Y = 0;

let isDragging = false;
let offsetX, offsetY;

const startDrag = (event) => {
	isDragging = true;
	offsetX = event.clientX - move.offsetLeft;
    offsetY = event.clientY - move.offsetTop;
}

const drag = () => {
	if (isDragging === true) {
		move.style.left = event.clientX - offsetX + "px";
        move.style.top = event.clientY - offsetY + "px";
	}
}

const stop = () => {
	isDragging = false;
}
move.addEventListener("mousedown",startDrag);
document.addEventListener("mousemove",drag);
document.addEventListener("mouseup",stop);