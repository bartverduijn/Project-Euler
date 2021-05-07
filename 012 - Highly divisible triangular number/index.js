/*
	The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
	1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

	Let us list the factors of the first seven triangle numbers:
	1: 1
	3: 1, 3
	6: 1, 2, 3, 6
	10: 1, 2, 5, 10
	15: 1, 3, 5, 15
	21: 1, 3, 7, 21
	28: 1, 2, 4, 7, 14, 28

	We can see that 28 is the first triangle number to have over five divisors.

	What is the value of the first triangle number to have over n divisors?
*/

function divisibleTriangleNumber(n) {
	let current = 1;
	let next = 2;
	let factors = 0;

	while (factors <= n) {
		factors = 0;

		// Factors come in pairs, e.g. 100 / 50 = 2, and 100 / 2 = 50. Thus we only need to search until the sqrt
		for (let i = 1; i <= Math.sqrt(current); i += 1) {
			if (current % i === 0) {
				// Basically checking if we reached the sqrt. For example: 4 / 2 = 2. Don't count 2 twice.
				if (current / i === i) {
					factors += 1;
				}
				// Otherwise, count it as a pair
				factors += 2;
			}
		}
		// Don't add next when we found our number
		if (factors <= n) {
			current += next;
			next += 1;
		}
	}

	return current;
}

console.log(divisibleTriangleNumber(5));
console.log(divisibleTriangleNumber(23));
console.log(divisibleTriangleNumber(167));
console.log(divisibleTriangleNumber(374));
console.log(divisibleTriangleNumber(500));
