/* eslint-disable radix */
/*
	A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

	Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
	let lpp = null;
	const largestNum = parseInt('9'.repeat(n));

	for (let i = largestNum; i > 0; i -= 1) {
		for (let j = largestNum; j > 0; j -= 1) {
			const p = i * j;
			// not interested if the product is smaller than the llpp
			if (p < lpp) break;
			// if the product is the same as the reverse, it's a palindrome
			if (p === parseInt(p.toString().split('').reverse().join(''))) {
				if (p > lpp) lpp = p;
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
