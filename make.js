const code_header = document.getElementById("code-header");
const smalltext = document.getElementById("smalltext");
const background_color = document.getElementById("background-color");
const text_color = document.getElementById("text-color");
const code_button_color = document.getElementById("code-button-color");
const code_button_text = document.getElementById("code-button-text");
const code_button_link = document.getElementById("code-button-link");
const enter = document.getElementById("enter");
const result_smalltext = document.getElementById("result-smalltext");
const result_header = document.getElementById("result-header");
const result_button = document.getElementById("result-button");
const code = document.getElementById("code");
const result = document.getElementById("result");
const result_link = document.getElementById("result_link");
const copyButton = document.getElementById("copyButton");

const copy = () =>{
	const textToCopy = code.innerText;
	const tempTextArea = document.createElement("textArea");
	document.body.appendChild(tempTextArea);
	tempTextArea.value = textToCopy;
	tempTextArea.select();
	tempTextArea.setSelectionRange(0, 99999);
	document.execCommand("copy");
	document.body.removeChild(tempTextArea);
	alert("copied");
}

const add = () =>{
	code.textContent = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport&" content="width=device-width, initial-scale=1.0"><title>my website</title><style>body{text-align: center;color: ${text_color.value};background-color: ${background_color.value};}button{background-color: ${code_button_color.value};}</style></head><body><h1>${code_header.value}</h1><p>${smalltext.value}</p><a href="${code_button_link.value}"><button id="result-button">${code_button_text.value}</button></a></body></html>`
	result.style.backgroundColor = background_color.value;
	result_button.style.backgroundColor = code_button_color.value;
	result_button.textContent = code_button_text.value;
	result_header.textContent = code_header.value;
	result_smalltext.textContent = smalltext.value;
	result.style.color = text_color.value;
}

copyButton.addEventListener("click",copy)

enter.addEventListener("click",add)



