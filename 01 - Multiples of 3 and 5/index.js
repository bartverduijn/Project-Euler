/*
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

    Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
 */

function multiplesOf3and5(number) {
	let total = 0;
	for (let i = 0; i < number; i += 1) {
		if (i % 3 === 0 || i % 5 === 0) {
			total += i;
		}
	}
	return total;
}

console.log(multiplesOf3and5(10));
console.log(multiplesOf3and5(49));
console.log(multiplesOf3and5(1000));
console.log(multiplesOf3and5(8456));
console.log(multiplesOf3and5(19564));
