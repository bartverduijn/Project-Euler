/* eslint-disable radix */
/*
	n! means n × (n − 1) × ... × 3 × 2 × 1

	For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
	and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

	Find the sum of the digits n!
*/

function factorial(n) {
	const bn = BigInt(n);
	if (bn <= 1) return 1n;
	return bn * factorial(bn - 1n);
}

function sumFactorialDigits(n) {
	const sum = String(factorial(n))
		.split('')
		.reduce((prev, next) => prev + parseInt(next), 0);
	return sum;
}

console.log(sumFactorialDigits(10));
console.log(sumFactorialDigits(25));
console.log(sumFactorialDigits(50));
console.log(sumFactorialDigits(75));
console.log(sumFactorialDigits(100));
