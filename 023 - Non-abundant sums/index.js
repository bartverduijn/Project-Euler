/*
	A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

	A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

	As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

	Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers.
 */

function checkDivisors(limit) {
	// limit does not count, but 1 does.
	let sum = 0;
	// See challenge 12 for explanation.
	for (let i = 1; i <= Math.sqrt(limit); i += 1) {
		if (limit % i === 0) {
			// count squares only once and do not count the number itself.
			if (limit / i === i || limit / i === limit) {
				sum += i;
			} else {
				// otherwise add both
				sum += i + limit / i;
			}
		}
	}
	return sum;
}

function sumOfNonAbundantNumbers(n) {
	const abundantNums = [];
	let sum = 0;
	for (let i = 0; i <= n; i += 1) {
		// abundant number
		if (i < checkDivisors(i)) {
			abundantNums.push(i);
		}

		let nonabundant = true;
		for (let j = 0; j < abundantNums.length; j += 1) {
			if (abundantNums.includes(i - abundantNums[j])) {
				nonabundant = false;
				break;
			}
		}

		if (nonabundant) sum += i;
	}

	return sum;
}

console.log(sumOfNonAbundantNumbers(10000));
console.log(sumOfNonAbundantNumbers(15000));
console.log(sumOfNonAbundantNumbers(20000));
console.log(sumOfNonAbundantNumbers(28123));
