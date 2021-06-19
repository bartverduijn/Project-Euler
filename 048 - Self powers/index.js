/*
	The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.
	Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
*/

// Reference: https://en.wikipedia.org/wiki/Modular_arithmetic
function powMod(b, p, mod) {
	let base = b;
	let power = p;
	let remainder = mod === 1 ? 0 : 1;
	while (power > 0) {
		if (power && power % 2) remainder = (remainder * base) % mod;
		base = base ** 2 % mod;
		power = Math.floor(power / 2);
	}
	return remainder;
}

function selfPowers(power, lastDigits) {
	let sum = 0;
	const length = 10 ** lastDigits;
	for (let i = 1; i <= power; i += 1) {
		sum += powMod(i, i, length);
		sum %= length;
	}
	return sum;
}

console.log(selfPowers(10, 3));
console.log(selfPowers(150, 6));
console.log(selfPowers(673, 7));
// console.log(selfPowers(1000, 10)); ← This one doesn't work 😢
