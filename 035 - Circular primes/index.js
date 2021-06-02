/* eslint-disable radix */
/*
	The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

	There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

	How many circular primes are there below n, whereas 100 ≤ n ≤ 1000000?

	Note: Circular primes individual rotation can exceed n.
*/

function sieve(n) {
	const numbers = [false, false]; // 0 and 1
	for (let i = 2; i <= n; i += 1) {
		numbers.push(true);
	}

	// Sieve of Eratosthenes
	for (let i = 2; i < Math.sqrt(n); i += 1) {
		if (numbers[i]) {
			for (let j = i ** 2; j <= n; j += i) {
				numbers[j] = false;
			}
		}
	}

	const primes = [];
	numbers.forEach((num, i) => {
		if (num === true) {
			primes.push(i);
		}
	});

	return primes;
}

function rotatePrimes(n) {
	let num = String(n);
	let isPrime = true;
	for (let i = 1; i < String(num).length; i += 1) {
		num = num.slice(-1) + num.slice(0, num.length - 1);
		const primes = sieve(num);
		// eslint-disable-next-line eqeqeq
		if (primes[primes.length - 1] != num) {
			isPrime = false;
			break;
		}
	}
	return isPrime;
}

function circularPrimes(n) {
	const primes = sieve(n);
	return primes.filter(p => rotatePrimes(p)).length;
}

console.log(circularPrimes(100));
console.log(circularPrimes(100000));
console.log(circularPrimes(250000));
console.log(circularPrimes(500000));
console.log(circularPrimes(750000));
console.log(circularPrimes(1000000));
