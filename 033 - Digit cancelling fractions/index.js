/*
	The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

	We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

	There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

	If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
*/

function gcd(a, b) {
	if (b === 0) return a;
	return gcd(b, a % b);
}

function lcm(a, b) {
	return Math.abs(a * b) / gcd(a, b);
}

function digitCancellingFractions() {
	// 1. Determine non-trivial digit cancelling fractions
	const nonTrivialFractions = [];
	for (let n = 11; n <= 98; n += 1) {
		for (let d = n + 1; d <= 99; d += 1) {
			const [n1, n2] = [...String(n)];
			// e.g. for 16/64 --> if 64 contains 6
			// but it should not work for 50/70, as it contains a 0
			if (String(d).includes(n2) && n2 !== '0') {
				// This never happens for n1, so I removed the other scenario.
				const trimmedFraction =
					n1 /
					String(d)
						.split('')
						.find(s => s !== n2);
				if (trimmedFraction === n / d) {
					nonTrivialFractions.push([n, d]);
				}
			}
		}
	}
	// 2. Find the denominator of the product of these fractions.
	const [num, denom] = nonTrivialFractions.reduce(
		(prev, next) => {
			const [nextNum, nextDenom] = next;
			const [prevNum, prevDenom] = prev;
			return [nextNum * prevNum, nextDenom * prevDenom];
		},
		[1, 1]
	);

	// 3. return the denominator when the the fraction is in its lowest common terms
	return lcm(denom, num) / num;
}

console.log(digitCancellingFractions());
