/*
	The following iterative sequence is defined for the set of positive integers:
	n → n/2 (n is even)
	n → 3n + 1 (n is odd)

	Using the rule above and starting with 13, we generate the following sequence:
	13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

	It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

	Which starting number, under the given limit, produces the longest chain?

	Note: Once the chain starts the terms are allowed to go above one million.
*/

function longestCollatzSequence(limit) {
	let longestCollatz = 1;
	let num = 2;

	for (let i = Math.floor(limit / 2); i < limit; i += 1) {
		let count = 0;
		let next = 1;
		while (next !== 1) {
			// Probably overkill, but it felt smart, so I'll keep it 😋
			if (Math.ceil(Math.log2(next)) === Math.floor(Math.log2(next))) {
				count += Math.log2(next);
				break;
			}

			if (next % 2 === 0) {
				next /= 2;
				count += 1;
			} else {
				next = 3 * next + 1;
				count += 1;
			}
		}

		if (count > longestCollatz) {
			longestCollatz = count;
			num = i;
		}
	}
	return num;
}

console.log(longestCollatzSequence(14));
console.log(longestCollatzSequence(5847));
console.log(longestCollatzSequence(46500));
console.log(longestCollatzSequence(54512));
console.log(longestCollatzSequence(100000));
// console.log(longestCollatzSequence(1000000))
