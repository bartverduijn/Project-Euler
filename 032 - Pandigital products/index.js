/*
	We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

	The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

	Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

	Hint: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/

function isPandigital(i, j, prod) {
	return (
		[...String(i), ...String(j), ...String(prod)]
			.sort((a, b) => a - b)
			.join('') === '123456789'
	);
}

function pandigitalProducts() {
	const products = [];
	for (let i = 1; i < 1234; i += 1) {
		for (let j = 1; j < 9876; j += 1) {
			const prod = i * j;
			if (isPandigital(i, j, prod)) {
				if (!products.includes(prod)) products.push(prod);
			}
		}
	}
	return products.reduce((prev, next) => prev + next, 0);
}

console.log(pandigitalProducts());
