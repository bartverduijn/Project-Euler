/* eslint-disable radix */
/*
	A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

	Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
	let lpp = null;
	const max = parseInt('9'.repeat(n));
	const min = (max + 1) / 10;

	for (let i = max; i >= min; i -= 1) {
		for (let j = max; j >= min; j -= 1) {
			const prd = i * j;
			// not interested if the product is smaller than the llpp
			if (prd < lpp) break;
			// if the product is the same as the reverse, it's a palindrome
			if (prd === parseInt(prd.toString().split('').reverse().join(''))) {
				if (prd > lpp) lpp = prd;
				// no need to continue, as every product after this will me smaller.
				break;
			}
		}
	}

	return lpp;
}

console.log(largestPalindromeProduct(2));
console.log(largestPalindromeProduct(3));
console.log(largestPalindromeProduct(4));
console.log(largestPalindromeProduct(5));
