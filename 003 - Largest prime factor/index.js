/*
	The prime factors of 13195 are 5, 7, 13 and 29.
	What is the largest prime factor of the given number?
*/

function largestPrimeFactor(number) {
	let lpf = 2;
	const primes = [2];

	// Start at 3, no need to loop over the evens
	for (let i = 3; i <= number; i += 2) {
		let isPrime = true;
		for (let j = 0; j < primes.length; j += 1) {
			// if the number can divided by one of the previous primes, the i is definitely not a prime, thus no need to continue the loop.
			if (i % primes[j] === 0) {
				isPrime = false;
				break;
			}
		}
		// if it is a prime, add it to the primes array and check if it's the largest factor yet.
		if (isPrime) {
			primes.push(i);
			if (number % i === 0) lpf = i;
		}
	}
	return lpf;
}

console.log(largestPrimeFactor(2));
console.log(largestPrimeFactor(3));
console.log(largestPrimeFactor(5));
console.log(largestPrimeFactor(7));
console.log(largestPrimeFactor(8));
console.log(largestPrimeFactor(13195));
// console.log(largestPrimeFactor(600851475143));
