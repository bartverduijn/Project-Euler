/*
	Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

	21 22 23 24 25
	20  7  8  9 10
	19  6  1  2 11
	18  5  4  3 12
	17 16 15 14 13

	It can be verified that the sum of the numbers on the diagonals is 101.
	What is the sum of the numbers on the diagonals in an n by n spiral formed in the same way?
*/

function spiralDiagonals(n) {
	// Spiral ends in right upper corner, which means it ends with n * n.
	let prevCorner = n * n;
	// This also means that the right upper corner is by definition part of the sum.
	let sum = prevCorner;
	// There are always 4 corners that should be part of the sum;
	let cornerIndex = 4;
	// Each corner of the outer circle is on a distonce of n - 1 from each other (25, 21, 17, 13)
	let step = n - 1;
	// Loop over every number from the right upper corner and spiral back to 1
	for (let i = prevCorner; i >= 1; i -= 1) {
		// Sum if it's a corner
		if (i === prevCorner - step) {
			sum += i;
			// Which means there is 1 less left
			cornerIndex -= 1;
			prevCorner = i;
			// If we counted all four corners, it means that the distance changes by 2, and that there are 4 new corners
			if (cornerIndex < 1) {
				step -= 2;
				cornerIndex = 4;
			}
		}
	}
	return sum;
}

console.log(spiralDiagonals(5));
console.log(spiralDiagonals(101));
console.log(spiralDiagonals(303));
console.log(spiralDiagonals(505));
console.log(spiralDiagonals(1001));
