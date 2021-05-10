/*
	Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
	a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner

	How many such routes are there through a given gridSize?
*/

function factorial(n) {
	if (n <= 1) return 1;

	return n * factorial(n - 1);
}

function latticePaths(gridSize) {
	// Source: https://www.robertdickau.com/manhattan.html
	return factorial(2 * gridSize) / factorial(gridSize) ** 2;
}

console.log(latticePaths(4));
console.log(latticePaths(9));
console.log(latticePaths(20));
