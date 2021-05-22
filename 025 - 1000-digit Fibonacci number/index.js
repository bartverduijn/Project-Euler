/*
	The Fibonacci sequence is defined by the recurrence relation:
	Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.

	The 12th term, F12, is the first term to contain three digits.

	What is the index of the first term in the Fibonacci sequence to contain n digits?
*/

function digitFibonacci(n) {
	if (n <= 1) return 0;

	const fibo = [1, 2];
	while (String(fibo[fibo.length - 1]).length < n) {
		fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
	}

	return fibo.length + 1;
}

console.log(digitFibonacci(5));
console.log(digitFibonacci(10));
console.log(digitFibonacci(15));
console.log(digitFibonacci(20));
