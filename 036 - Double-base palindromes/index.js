/*
	The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

	Find the sum of all numbers, less than n, whereas 1000 ≤ n ≤ 1000000, which are palindromic in base 10 and base 2.

	(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

function doubleBasePalindromes(n) {
	let sum = 0;
	// No leading zeroes means no zeroes at the end, thus only odd numbers
	for (let i = 1; i < n; i += 2) {
		if (
			String(i) === String(i).split('').reverse().join('') &&
			i.toString(2) === i.toString(2).split('').reverse().join('')
		)
			sum += i;
	}
	return sum;
}

console.log(doubleBasePalindromes(1000));
console.log(doubleBasePalindromes(50000));
console.log(doubleBasePalindromes(500000));
console.log(doubleBasePalindromes(1000000));
