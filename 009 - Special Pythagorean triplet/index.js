/*
	A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
	a2 + b2 = c2

	For example, 32 + 42 = 9 + 16 = 25 = 52.

	There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
*/

function specialPythagoreanTriplet(n) {
	const sumOfabc = n;
	let product = null;

	for (let a = 1; a < n; a += 1) {
		// a < b, so loop can start on b = a
		for (let b = a; b < n; b += 1) {
			if (a + b + Math.sqrt(a ** 2 + b ** 2) === sumOfabc) {
				product = a * b * (n - a - b);
			}
		}
	}
	return product;
}

console.log(specialPythagoreanTriplet(24));
console.log(specialPythagoreanTriplet(120));
console.log(specialPythagoreanTriplet(1000));
