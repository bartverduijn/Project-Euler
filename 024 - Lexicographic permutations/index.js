/* eslint-disable radix */
/*
	A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
	012   021   102   120   201   210

	What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

// Reference: I used the steps as described on https://www.geeksforgeeks.org/lexicographic-permutations-of-string/ (did not look at the code)
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

function lexicographicPermutations(n) {
	// First permutation is already known.
	const permutations = ['0123456789'];
	while (permutations.length <= n) {
		permutations.push(
			generateNextPermutation(permutations[permutations.length - 1])
		);
	}

	return parseInt(permutations.pop());
}

console.log(lexicographicPermutations(699999));
console.log(lexicographicPermutations(899999));
console.log(lexicographicPermutations(900000));
console.log(lexicographicPermutations(999999));
