const sound = document.getElementById("squeezeSound");
const squeezer = document.getElementById("squeezeMe");

const squeeze = () => {
	sound.play();
	squeezer.style.height = 125+'px';
	squeezer.style.width = 170+'px';
	setTimeout(() => {
		squeezer.style.height = 150+'px';
		squeezer.style.width = 150+'px';
	},1000)
}

squeezer.addEventListener("click",squeeze)