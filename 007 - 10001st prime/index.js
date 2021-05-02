/*
	By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
	What is the nth prime number?
*/

function nthPrime(n) {
	const primes = [2];
	let current = 3;

	while (primes.length < n) {
		let isPrime = true;
		for (let j = 0; j < primes.length; j += 1) {
			// if the number can divided by one of the previous primes, the i is definitely not a prime, thus no need to continue the loop.
			if (current % primes[j] === 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			primes.push(current);
		}
		// As we started with 3, we'll only have to loop over the odds
		current += 2;
	}

	return primes[primes.length - 1];
}

console.log(nthPrime(6));
console.log(nthPrime(10));
console.log(nthPrime(100));
console.log(nthPrime(1000));
console.log(nthPrime(10001));
