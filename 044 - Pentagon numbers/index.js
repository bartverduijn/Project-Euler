/*
	Pentagonal numbers are generated by the formula, Pn=n(3n−1)/2. The first ten pentagonal numbers are:

	1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

	It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 − 22 = 48, is not pentagonal.

	Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk − Pj| is minimized; what is the value of D?
*/

function isPentagonNumber(x) {
	return (1 + Math.sqrt(1 + 24 * x)) % 6 === 0;
}

function nextPentagonNumber(n) {
	return (n * (3 * n - 1)) / 2;
}

function pentagonNumbers() {
	const max = 9999;
	const pentagons = [];
	for (let i = 1; i < max; i += 1) {
		pentagons.push(nextPentagonNumber(i));
		for (let j = pentagons.length; j >= 0; j -= 1) {
			const d = pentagons[i - 1] - pentagons[j];
			const sum = pentagons[i - 1] + pentagons[j];
			if (isPentagonNumber(d) && isPentagonNumber(sum)) return d;
		}
	}
	return null;
}

console.log(pentagonNumbers());