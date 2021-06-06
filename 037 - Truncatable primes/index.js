/* eslint-disable radix */
/*
	The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

	Find the sum of the only n (8 ≤ n ≤ 11) primes that are both truncatable from left to right and right to left.

	NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

// From challenge 27
function isPrime(n) {
	const numbers = [false, false]; // 0 and 1
	for (let i = 2; i <= n; i += 1) {
		numbers.push(true);
	}

	// Sieve of Eratosthenes
	for (let i = 2; i <= Math.sqrt(n); i += 1) {
		if (numbers[i]) {
			for (let j = i ** 2; j <= n; j += i) {
				numbers[j] = false;
			}
		}
	}
	return numbers[n];
}

function isTruncatable(p) {
	const prime = String(p);
	for (let i = 1; i < prime.length; i += 1) {
		if (
			!isPrime(parseInt(prime.slice(0 - i))) ||
			!isPrime(parseInt(prime.slice(0, i)))
		)
			return false;
	}
	return true;
}

function truncatablePrimes(n) {
	let amount = 0;
	let sum = 0;
	// 23 is the first truncatable prime
	for (let i = 23; amount < n; i += 2) {
		if (isPrime(i) && isTruncatable(i)) {
			amount += 1;
			sum += i;
		}
	}
	return sum;
}

console.log(truncatablePrimes(8));
console.log(truncatablePrimes(9));
console.log(truncatablePrimes(10));
console.log(truncatablePrimes(11));
