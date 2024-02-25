/**
 * Coding Interview Question #03
 * Reverse an string using Recursion
 */

const str = 'arroz';

function solution(str) {
  // base case
  if (str.length === 0) return '';
  // recursion
  return str[str.length - 1] + solution(str.substr(0, str.length - 1));
}

console.log(solution(str)); // Output: zorra
