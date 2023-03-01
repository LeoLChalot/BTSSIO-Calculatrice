const calculator = document.getElementById("calculator");
const output = document.getElementById("output");
const submit = document.getElementById("submit");
const dev = document.getElementById("dev");

calculator.addEventListener("click", (event) => {
	console.log(event.target);
	if (event.target.id == "ac") {
		clear();
	} else if (event.target.id == "submit") {
		output.innerHTML = `${eval(output.textContent)}`;
	} else if (event.target.textContent == ",") {
		output.innerHTML += `.`;
	} else if (
		(event.target.textContent >= "0" && event.target.textContent <= "9") ||
		event.target.textContent == "/" ||
		event.target.textContent == "-" ||
		event.target.textContent == "+" ||
		event.target.textContent == "*"
	) {
		output.innerHTML += `${event.target.textContent}`;
	} else if ((event.target.textContent == "+ / -")) {
		if (output.textContent[0] != "-") {
			output.textContent = "-" + output.textContent;
		} else {
			output.textContent = output.textContent.substring(1);
		}
	} else if ((event.target.textContent == "%")) {
		output.textContent = eval(output.textContent * 0.01); 
	}
});

function clear() {
	output.textContent = "";
}
