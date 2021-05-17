/*
	Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

	If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

	For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

	Evaluate the sum of all the amicable numbers under n.
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

function sumAmicableNum(n) {
	// add value for 0 and 1, so that 2 has space 2 in array.
	const sumsOfDivisors = [null, null];
	const amicableNums = [];
	for (let i = 2; i < n; i += 1) {
		const div = checkDivisors(i);
		sumsOfDivisors.push(div);
	}

	for (let i = 2; i < sumsOfDivisors.length; i += 1) {
		for (let j = 2; j < sumsOfDivisors.length; j += 1) {
			if (
				sumsOfDivisors[i] === j &&
				sumsOfDivisors[j] === i &&
				i !== j &&
				!amicableNums.includes(i) &&
				!amicableNums.includes(j)
			) {
				amicableNums.push(i, j);
			}
		}
	}

	return amicableNums.reduce((prev, next) => prev + next, 0);
}

console.log(sumAmicableNum(1000));
console.log(sumAmicableNum(2000));
console.log(sumAmicableNum(5000));
console.log(sumAmicableNum(10000));
