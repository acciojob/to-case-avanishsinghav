function toCase(text) {
  // write your code here
	let temp = text.toLowerCase();
	let temp1 = text.toUpperCase();
	return `${temp}-${temp1}`
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
