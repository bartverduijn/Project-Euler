/* eslint-disable radix */
/*
	You are given the following information, but you may prefer to do some research for yourself.

		1 Jan 1900 was a Monday.
		Thirty days has September,
		April, June and November.
		All the rest have thirty-one,
		Saving February alone,
		Which has twenty-eight, rain or shine.
		And on leap years, twenty-nine.
		A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

	How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

function determineFirstDay(year, month) {
	// Determine day of january first of firstYear. Reference: https://cs.uwaterloo.ca/~alopez-o/math-faq/node73.html
	const k = 1;
	const m = month;
	const y = month > 10 ? year - 1 : year;
	const C = parseInt(String(y).slice(0, -2));
	const Y = parseInt(String(y).slice(2, 4));
	// W = weekday, 0 = Sunday, ..., 6 = Saturday
	const W =
		(k +
			Math.floor(2.6 * m - 0.2) -
			2 * C +
			Y +
			Math.floor(Y / 4) +
			Math.floor(C / 4)) %
		7;
	return W;
}

function countingSundays(firstYear, lastYear) {
	let sunday = 0;
	for (let year = 0; year <= lastYear - firstYear; year += 1) {
		for (let month = 1; month <= 12; month += 1) {
			if (determineFirstDay(firstYear + year, month) === 0) sunday += 1;
		}
	}
	return sunday;
}

console.log(countingSundays(1943, 1946));
console.log(countingSundays(1995, 2000));
console.log(countingSundays(1901, 2000));
