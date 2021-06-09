/*
	An irrational decimal fraction is created by concatenating the positive integers:
	0.123456789101112131415161718192021...

	It can be seen that the 12th digit of the fractional part is 1.

	If dn represents the nth digit of the fractional part, find the value of the following expression.
	d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
 */

function champernownesConstant(n) {
	let product = 1;
	let counter = 0;

	for (let i = 1; i <= n; i += 1) {
		const number = String(i).split('');
		for (let j = 0; j < number.length; j += 1) {
			counter += 1;
			// If the log10(counter) is a whole number, meaning it's 10, 100, 1000 etc.
			if (Math.log10(counter) % 1 === 0) product *= number[j];
		}
	}
	return product;
}

console.log(champernownesConstant(100));
console.log(champernownesConstant(1000));
console.log(champernownesConstant(1000000));
