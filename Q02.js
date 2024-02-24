/**
 * Coding Interview Question 02
 * Best time to buy and sell a stock
 */

const arr = [7, 1, 5, 3, 6, 4, 8, 2];

function solution(stocks) {
  let profit = 0;
  let min = stocks[0];

  for (let i = 1; i < stocks.length; i++) {
    min = Math.min(min, stocks[i]);
    profit = Math.max(profit, stocks[i] - min);
  }

  return profit;
}

// output: 7
