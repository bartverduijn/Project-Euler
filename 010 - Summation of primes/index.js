/*
	The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
	Find the sum of all the primes below n.
*/

function primeSummation(n) {
	const numbers = [false, false]; // 0 and 1
	for (let i = 2; i < n; i += 1) {
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

	return numbers.reduce((prev, next, i) => (next ? prev + i : prev), 0);
}

console.log(primeSummation(17));
console.log(primeSummation(2001));
console.log(primeSummation(140759));
console.log(primeSummation(2000000));
