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

function rotatePrimes(primes) {
	const rotations = {};
	for (let i = 0; i < primes.length; i += 1) {
		rotations[primes[i]] = [primes[i]];
		let rotation = String(primes[i]);
		for (let j = 1; j < rotation.length; j += 1) {
			rotation =
				rotation.slice(-1) + rotation.slice(0, rotation.length - 1);
			// If the number is a palindrome, only count it once (e.g. 11)
			if (!rotations[primes[i]].includes(parseInt(rotation)))
				rotations[primes[i]].push(parseInt(rotation));
		}
	}
	return rotations;
}

function circularPrimes(n) {
	let count = 0;
	// 1. Find primes between 0 and n
	const primes = sieve(n);
	// 2. Rotate the found primes to determine the largest number
	// So we can sieve once instead of every number.
	const rotations = rotatePrimes(primes);

	let largestRotation = 0;
	const flattenedRotations = Object.values(rotations).flat();
	for (let i = 0; i < flattenedRotations.length; i += 1) {
		if (flattenedRotations[i] > largestRotation)
			largestRotation = flattenedRotations[i];
	}
	const rotatedPrimes = sieve(largestRotation);
	// 3. Check for each prime if all its rotations are primes as well.
	// If so, count the prime as one.
	for (let i = 0; i < Object.keys(rotations).length; i += 1) {
		let isPrime = true;
		Object.values(rotations)[i].forEach(r => {
			if (!rotatedPrimes.includes(r)) isPrime = false;
		});
		if (isPrime) count += 1;
	}

	return count;
}

console.log(circularPrimes(100));
console.log(circularPrimes(100000));
console.log(circularPrimes(250000));
console.log(circularPrimes(500000));
console.log(circularPrimes(750000));
console.log(circularPrimes(1000000));
