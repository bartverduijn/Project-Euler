/*
	A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:
	1/2 = 0.5
	1/3 = 0.(3)
	1/4 = 0.25
	1/5 = 0.2
	1/6 = 0.1(6)
	1/7 = 0.(142857)
	1/8 = 0.125
	1/9 = 0.(1)
	1/10 = 0.1

	Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

	Find the value of d < n for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

function repeatsElements(arr) {
	for (let i = 0; i < arr.length; i += 1)
		for (let j = i + 1; j < arr.length; j += 1)
			if (arr[i] === arr[j]) return true;
	return false;
}

function findRecurringCycle(denominator) {
	let numerator = 10;
	const quotients = [];
	const remainders = [];
	while (
		remainders[remainders.length - 1] !== 0 &&
		!repeatsElements(remainders)
	) {
		quotients.push(Math.floor(numerator / denominator));
		remainders.push(numerator % denominator);
		numerator = remainders[remainders.length - 1] * 10;
	}
	return quotients;
}

function reciprocalCycles(n) {
	let longestDenom = 1;
	let longestLength = 0;
	let length = 0;
	for (let i = 2; i < n; i += 1) {
		length = findRecurringCycle(i).length;
		if (length > longestLength) {
			longestLength = length;
			longestDenom = i;
		}
	}
	return longestDenom;
}

console.log(reciprocalCycles(700));
console.log(reciprocalCycles(800));
console.log(reciprocalCycles(900));
console.log(reciprocalCycles(1000));
