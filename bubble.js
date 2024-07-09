const img = document.getElementById("bubble");
const wp = document.getElementById("wp");

const choose1 = () =>{
	if (event.key === 'Enter') {
		makeBig1()
	}
}

const choose2 = () =>{
	if (event.key === 'Enter') {
		makeBig2()
	}
}

const makeBig1 = () =>{
	let vwidth = img.clientWidth;
	img.style.width = vwidth + 5 +'px';
}

const makeBig2 = () =>{
	let vwidth = img.clientHeight;
	img.style.height = vwidth + 5 +'px';
}

wp.addEventListener("keydown",choose1)

wp.addEventListener("click",makeBig1)

hp.addEventListener("keydown",choose2)

hp.addEventListener("click",makeBig2)

