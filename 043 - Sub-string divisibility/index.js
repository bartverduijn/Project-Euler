/*
	The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

	Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:
	d2d3d4=406 is divisible by 2
	d3d4d5=063 is divisible by 3
	d4d5d6=635 is divisible by 5
	d5d6d7=357 is divisible by 7
	d6d7d8=572 is divisible by 11
	d7d8d9=728 is divisible by 13
	d8d9d10=289 is divisible by 17

	Find the sum of all 0 to n pandigital numbers with sub-strings fulfilling n - 2 of these divisibility properties.

	Note: Pandigital numbers starting with 0 are to be considered in the result.
*/

// Re-use code from challenge 24
function generateNextPermutation(prevPerm) {
	const perm = prevPerm.split('');
	// 1. Take the previously printed permutation and find the rightmost character in it, which is smaller than its next character. Let us call this character as ‘first character’.
	for (let i = perm.length - 1; i >= 0; i -= 1) {
		if (perm[i] < perm[i + 1]) {
			const first = perm[i];
			// 2. Now find the ceiling of the ‘first character’. Ceiling is the smallest character on right of ‘first character’, which is greater than ‘first character’. Let us call the ceil character as ‘second character’.
			const ceil = String(
				Math.min(...perm.slice(i + 1, 10).filter(p => p > first))
			);
			// 3. Swap the two characters found in above 2 steps.
			perm[perm.findIndex(p => p === ceil)] = first;
			perm[i] = ceil;
			// 4. Sort the substring (in non-decreasing order) after the original index of ‘first character’.
			const sorted = perm.splice(i + 1, 10).sort();
			perm.push(...sorted);
			break;
		}
	}
	return perm.reduce((prev, next) => prev + next, '');
}

function hasDivisibilityProperties(permutation, max) {
	const permNums = permutation.split('');
	for (let j = 0; j <= max; j += 1) {
		const substring = permNums[j] + permNums[j + 1] + permNums[j + 2];
		if (j === 1 && substring % 2 !== 0) return false;
		if (j === 2 && substring % 3 !== 0) return false;
		if (j === 3 && substring % 5 !== 0) return false;
		if (j === 4 && substring % 7 !== 0) return false;
		if (j === 5 && substring % 11 !== 0) return false;
		if (j === 6 && substring % 13 !== 0) return false;
		if (j === 7 && substring % 17 !== 0) return false;
	}
	return true;
}

function substringDivisibility(n) {
	// determine largest and smalles pandigital numbers
	let end = '';
	let start = '';
	for (let i = n; i >= 0; i -= 1) {
		end += String(i);
		start += String(n - i);
	}

	// Create all permutations between start and end
	const permutations = [start];
	while (permutations[permutations.length - 1] !== end) {
		permutations.push(
			generateNextPermutation(permutations[permutations.length - 1])
		);
	}

	// Create array of substring permutations with the same divisibility properties
	const subStringPermutations = [];
	for (let i = 0; i < permutations.length; i += 1) {
		if (hasDivisibilityProperties(permutations[i], n - 2))
			subStringPermutations.push(permutations[i]);
	}

	return subStringPermutations.reduce(
		(prev, next) => prev + parseInt(next),
		0
	);
}

console.log(substringDivisibility(5));
console.log(substringDivisibility(7));
console.log(substringDivisibility(8));
console.log(substringDivisibility(9));
