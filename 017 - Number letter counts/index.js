/*
	If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

	If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

	Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

function checkLetters(num) {
	const dict = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
		100: 'hundred',
	};

	if (num <= 20) return dict[num];

	if (num > 20 && num < 100) {
		if (num % 10 === 0) return dict[num];

		const [ten, one] = String(num).split('');
		return dict[ten * 10] + dict[one];
	}

	if (num > 99 && num < 1000) {
		if (num % 100 === 0) {
			return dict[num / 100] + dict[100];
		}

		const [hundred, ten, one] = String(num).split('');
		return `${checkLetters(hundred * 100)}and${checkLetters(ten + one)}`;
	}

	// method only works for numbers > 0 and <= 1000
	return 'onethousand';
}

function numberLetterCounts(limit) {
	const numbers = [];
	for (let i = 1; i <= limit; i += 1) {
		numbers.push(i);
	}

	return numbers.reduce(
		(prev, next) => prev + checkLetters(next).split('').length,
		0
	);
}

console.log(numberLetterCounts(5));
console.log(numberLetterCounts(30));
console.log(numberLetterCounts(150));
console.log(numberLetterCounts(1000));
