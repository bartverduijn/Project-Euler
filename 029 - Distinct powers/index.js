/*
	Consider all integer combinations of ab for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:
	2^2=4, 2^3=8, 2^4=16, 2^5=32
	3^2=9, 3^3=27, 3^4=81, 3^5=243
	4^2=16, 4^3=64, 4^4=256, 4^5=1024
	5^2=25, 5^3=125, 5^4=625, 5^5=3125

	If they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms:
	4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125

	How many distinct terms are in the sequence generated by ab for 2 ≤ a ≤ n and 2 ≤ b ≤ n?
*/

function distinctPowers(n) {
	const powers = [];
	for (let i = 2; i <= n; i += 1) {
		for (let j = 2; j <= n; j += 1) {
			powers.push(i ** j);
		}
	}
	// IndexOf returns the index of the first value. Only keep the value if it's the first appearance in the array.
	// Then sort it (not necessary for the end result though), and determine its length
	return powers
		.filter((val, i, arr) => arr.indexOf(val) === i)
		.sort((a, b) => a - b).length;
}

console.log(distinctPowers(15));
console.log(distinctPowers(20));
console.log(distinctPowers(25));
console.log(distinctPowers(30));