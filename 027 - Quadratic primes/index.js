/*
	Euler discovered the remarkable quadratic formula: n2+n+41

	It turns out that the formula will produce 40 primes for the consecutive integer values 0 ≤ n ≤ 39. However, when n=40,402+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,412+41+41 is clearly divisible by 41.

	The incredible formula n2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0 ≤ n ≤ 79. The product of the coefficients, −79 and 1601, is −126479.

	Considering quadratics of the form:
	* n2+an+b
	* where |a| < range and |b| ≤ range
	* where |n| is the modulus/absolute value of n (e.g. |11|=11 and |−4|=4)

	Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.
*/

function isPrime(n) {
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

	return numbers[n];
}

function quadraticPrimes(range) {
	let numOfPrimes = 0;
	let bestA = 0;
	let bestB = 0;
	for (let a = -range; a < range; a += 1) {
		for (let b = -range; b <= range; b += 1) {
			let n = 0;
			while (isPrime(Math.abs(n ** 2 + a * n + b))) {
				n += 1;
			}
			if (n > numOfPrimes) {
				numOfPrimes = n;
				bestA = a;
				bestB = b;
			}
		}
	}
	return bestA * bestB;
}

console.log(quadraticPrimes(200));
console.log(quadraticPrimes(500));
console.log(quadraticPrimes(800));
console.log(quadraticPrimes(1000));
