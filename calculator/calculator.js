function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	let total = 0;
	for (let i = 0; i < array.length; i++) {
		total += array[i];
		
	}
	return total;
}

function multiply (array) {
	let product = 1;
	for (let i = 0; i < array.length; i++) {
		product *= array[i];
		
	}
	return product;
}

function power(a, b) {
	let product = 1;
	for (let i=0; i < b; i++){
		product *= a;
	}
	return product;
}

function factorial(a) {
	let product = 1;
	for (let i=1; i<=a; i++){
		product *= i;
	}
	return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}