/*
	It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

	9  = 7  + 2×1^2
	15 = 7  + 2×2^2
	21 = 3  + 2×3^2
	25 = 7  + 2×3^2
	27 = 19 + 2×2^2
	33 = 31 + 2×1^2

	It turns out that the conjecture was false.

	What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
*/

function isConjectureException(number, primes) {
	for (let i = 0; i < primes.length; i += 1) {
		const rest = number - primes[i];
		// Check if the square root of (number - primes / 2) is whole number. This means the conjecture applies.
		if (Math.sqrt(rest / 2) % 1 === 0) return null;
	}
	// If it doesn't apply, we have our exception.
	return number;
}

function goldbachsOtherConjecture() {
	const primes = [2];
	let exception = null;
	let index = 3;

	// Standard situation is that there is no exception.
	while (!exception) {
		let isPrime = true;
		for (let i = 0; i < primes.length; i += 1) {
			// If the number can be divided by a prime, it's an odd composite number
			if (index % primes[i] === 0) {
				isPrime = false;
				// Check if the conjecture applies. If it does, function returns null. Otherwise, it returns the number.
				exception = isConjectureException(index, primes);
				break;
			}
		}
		if (isPrime) primes.push(index);
		index += 2;
	}
	return exception;
}

console.log(goldbachsOtherConjecture());
