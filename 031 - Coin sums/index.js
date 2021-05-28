/*
	In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
	1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

	It is possible to make £2 in the following way:
	1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

	How many different ways can n pence be made using any number of coins?
*/

// Wasn't able to solve it, so I copied this reference: https://www.geeksforgeeks.org/coin-change-dp-7/
function countCoinCombinations(coinsArray, length, target) {
	// Not returning coins if there is no amount is a solution.
	if (target === 0) return 1;
	if (target < 0 || (length <= 0 && target > 0)) return 0;

	return (
		countCoinCombinations(coinsArray, length - 1, target) +
		countCoinCombinations(
			coinsArray,
			length,
			target - coinsArray[length - 1]
		)
	);
}

function coinSums(amount) {
	const coins = [1, 2, 5, 10, 20, 50, 100, 200];
	return countCoinCombinations(coins, coins.length, amount);
}

console.log(coinSums(50));
console.log(coinSums(100));
console.log(coinSums(150));
console.log(coinSums(200));
