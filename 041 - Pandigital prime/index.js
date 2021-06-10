/*
	We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

	What is the largest n-length digit pandigital prime that exists?
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

// I edited this function used in challenge 024 to sort in descending order. .
function generateNextPermutation(prevPerm, primes) {
	// * if the given permutation is a prima, return it
	if (primes.some(p => parseInt(prevPerm) === p)) return parseInt(prevPerm);

	// * otherwise, find the next permutation and rerun this function recursively;
	const perm = prevPerm.split('');
	// 1. Take the previously printed permutation and find the rightmost character in it, which is larger than its next character. Let us call this character as ‘first character’.
	for (let i = perm.length - 1; i >= 0; i -= 1) {
		if (perm[i] > perm[i + 1]) {
			const first = perm[i];
			// 2. Now find the ceiling of the ‘first character’. Ceiling is the largest character on right of ‘first character’, which is smaller than ‘first character’. Let us call the ceil character as ‘second character’.
			const ceil = String(
				Math.max(...perm.slice(i + 1, 10).filter(p => p < first))
			);
			// 3. Swap the two characters found in above 2 steps.
			perm[perm.findIndex(p => p === ceil)] = first;
			perm[i] = ceil;
			// 4. Sort the substring (in non-decreasing order) after the original index of ‘first character’.
			const sorted = perm.splice(i + 1, 10).sort((a, b) => b - a);
			perm.push(...sorted);
			break;
		}
	}

	const nextPerm = perm.reduce((prev, next) => prev + next, '');
	return generateNextPermutation(nextPerm, primes);
}

function pandigitalPrime(n) {
	let largestPandigitalNumberString = '';
	for (let i = n; i > 0; i -= 1) {
		largestPandigitalNumberString += String(i);
	}

	const primes = sieve(parseInt(largestPandigitalNumberString));
	const largestPandigitalPrime = generateNextPermutation(
		largestPandigitalNumberString,
		primes
	);
	return largestPandigitalPrime;
}

console.log(pandigitalPrime(4));
console.log(pandigitalPrime(7));
