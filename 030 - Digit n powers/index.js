/* eslint-disable radix */
/*
	Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
	1634 = 1^4 + 6^4 + 3^4 + 4^4
	8208 = 8^4 + 2^4 + 0^4 + 8^4
	9474 = 9^4 + 4^4 + 7^4 + 4^4
	As 1 = 1^4 is not a sum it is not included.

	The sum of these numbers is 1634 + 8208 + 9474 = 19316.
	Find the sum of all the numbers that can be written as the sum of n powers of their digits.
*/

function digitnPowers(n) {
	let sum = 0;
	// very naive assumption, but seems to work
	for (let i = 2; i < n * 9 ** n; i += 1) {
		const powSum = String(i)
			.split('')
			.map(d => parseInt(d) ** n)
			.reduce((prev, next) => prev + next, 0);
		if (powSum === i) {
			sum += i;
		}
	}
	return sum;
}

console.log(digitnPowers(2));
console.log(digitnPowers(3));
console.log(digitnPowers(4));
console.log(digitnPowers(5));
