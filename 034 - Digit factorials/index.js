/*
	145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

	Find the numbers and the sum of the numbers which are equal to the sum of the factorial of their digits.

	Note: as 1! = 1 and 2! = 2 are not sums they are not included.
*/

function digitFactorial() {
	let sum = 0;
	const numbers = [];

	// Seems reasonable to calculate this once with a little helper function
	const factorial = n => (n === 1 || n === 0 ? 1 : factorial(n - 1) * n);
	const factorials = [];
	for (let i = 0; i < 10; i += 1) {
		factorials.push(factorial(i));
	}

	for (let i = 10; i < factorials[factorials.length - 1] * 7; i += 1) {
		const factSum = String(i)
			.split('')
			.map(num => factorials[num])
			.reduce((prev, next) => prev + next, 0);
		if (i === factSum) {
			numbers.push(i);
			sum += i;
		}
	}

	return { sum, numbers };
}

console.log(digitFactorial());
