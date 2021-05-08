/*
	Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
*/

function largeSum(arr) {
	return Number(
		arr
			.reduce((prev, next) => prev + BigInt(next), 0n)
			.toString()
			.slice(0, 10)
	);
}

// Only change code above this line

const testNums = [
	'37107287533902102798797998220837590246510135740250',
	'46376937677490009712648124896970078050417018260538',
];

console.log(largeSum(testNums));
