/*
	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
 */

// Reference: https://en.wikipedia.org/wiki/Euclidean_algorithm
function gcd(a, b) {
	if (b === 0) return a;

	return gcd(b, a % b);
}

// Reference: https://en.wikipedia.org/wiki/Least_common_multiple
function lcm(a, b) {
	return Math.abs(a * b) / gcd(a, b);
}

function smallestMult(n) {
	// 0 cannot be divided by 0
	if (n === 0) return null;

	let mult = 1;
	for (let i = 1; i <= n; i += 1) {
		mult = lcm(mult, i);
	}
	return mult;
}

console.log(smallestMult(0));
console.log(smallestMult(1));
console.log(smallestMult(5));
console.log(smallestMult(7));
console.log(smallestMult(10));
console.log(smallestMult(13));
console.log(smallestMult(20));
