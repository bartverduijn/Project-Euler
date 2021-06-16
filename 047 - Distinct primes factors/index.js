/*
	The first two consecutive numbers to have two distinct prime factors are:
	14 = 2 × 7
	15 = 3 × 5

	The first three consecutive numbers to have three distinct prime factors are:
	644 = 22 × 7 × 23
	645 = 3 × 5 × 43
	646 = 2 × 17 × 19

	Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?
	*/

function factorSieve(max) {
	const numbers = [null, null]; // 0 and 1
	for (let i = 2; i <= max; i += 1) {
		numbers.push(0);
	}

	for (let i = 2; i < Math.sqrt(max); i += 1) {
		if (numbers[i] === 0) {
			for (let j = i; j <= max; j += i) {
				// Count the number of factors
				numbers[j] += 1;
			}
		}
	}

	return numbers;
}

function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
	let counter = 0;
	const factors = factorSieve(999999);
	for (let i = 0; i < factors.length; i += 1) {
		if (factors[i] === targetNumPrimes) {
			counter += 1;
		} else {
			counter = 0;
		}

		if (counter === targetConsecutive) return i - targetConsecutive + 1;
	}
	return null;
}

console.log(distinctPrimeFactors(2, 2));
console.log(distinctPrimeFactors(3, 3));
console.log(distinctPrimeFactors(4, 4));
