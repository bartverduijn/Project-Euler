/*
	If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

	{20,48,52}, {24,45,51}, {30,40,50}

	For which value of p ≤ n, is the number of solutions maximized?
 */

function intRightTriangles(n) {
	const dict = {};
	for (let i = 1; i <= n; i += 1) {
		dict[i] = 0;
		// a <= b, thus to a + b + c = i can result in a + a + c = i. So we can divide the search space by 2
		for (let a = 1; a < i / 2; a += 1) {
			// if a = 30 and b = 40 makes c = 50, than a 40 and b = 30 would also work. No need to check that
			for (let b = a; b < i / 2; b += 1) {
				// a^2 + b^2 = c^2 and a + b + c = n means a + b + Math.sqrt(a**2 + b ** 2) = n
				if (a + b + Math.sqrt(a ** 2 + b ** 2) === i) {
					dict[i] += 1;
				}
			}
		}
	}
	let highestValue = 0;
	const values = Object.values(dict);
	for (let i = 0; i < values.length; i += 1) {
		if (values[i] > highestValue) highestValue = values[i];
	}
	const index = values.findIndex(val => val === highestValue);
	const key = Object.keys(dict)[index];
	// eslint-disable-next-line radix
	return parseInt(key);
}

console.log(intRightTriangles(500));
console.log(intRightTriangles(800));
console.log(intRightTriangles(900));
console.log(intRightTriangles(1000));
