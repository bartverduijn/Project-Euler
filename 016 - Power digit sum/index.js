/* eslint-disable radix */
/*
	2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
	What is the sum of the digits of the number 2^exponent?
*/

function powerDigitSum(exponent) {
	return String(BigInt(2 ** exponent))
		.split('')
		.reduce((prev, next) => prev + parseInt(next), 0);
}

console.log(powerDigitSum(15));
console.log(powerDigitSum(128));
console.log(powerDigitSum(1000));
