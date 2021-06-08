/* eslint-disable radix */
/*
	Take the number 192 and multiply it by each of 1, 2, and 3:
	192 × 1 = 192
	192 × 2 = 384
	192 × 3 = 576

	By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1, 2, 3).

	The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1, 2, 3, 4, 5).

	What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1, 2, ... , n) where n > 1?
*/

function containsDoublesOrZero(str) {
	const dict = {};
	const nums = str.split('');
	for (let i = 0; i < nums.length; i += 1) {
		if (nums[i] === '0') return true;
		if (!Object.keys(dict).includes(nums[i])) {
			dict[nums[i]] = 1;
		} else {
			return true;
		}
	}

	return false;
}

function containsAllDigits(str) {
	// we don't care about zero, as it's already caught by containsDoublesOrZero
	const digits = [true];
	for (let i = 1; i < 10; i += 1) {
		digits.push(false);
	}

	str.split('').forEach(char => {
		digits[char] = !digits[char];
	});

	if (digits.includes(false)) return false;

	return true;
}

function pandigitalMultiples() {
	let largestNumber = 0;
	// Largest number can be a 4 digit number
	const limit = 9876;
	let n = 3;
	for (let i = 2; i < limit; i += 1) {
		let concat = String(i);
		for (let j = 2; j < n; j += 1) {
			concat += String(j * i);
			if (containsDoublesOrZero(concat)) break;
			if (containsAllDigits(concat) && parseInt(concat) > largestNumber) {
				largestNumber = parseInt(concat);
				break;
			}
			if (parseInt(concat) < limit) n += 1;
		}
	}

	return largestNumber;
}

console.log(pandigitalMultiples());
