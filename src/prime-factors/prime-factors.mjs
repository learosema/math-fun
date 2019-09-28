import { range } from "../range/range.mjs";

/**
 * Calculate the prime factors of a positive integer number
 * 
 * @param {Number} num a positive integer number
 * @returns {Array} array of prime factors.
 */
export function primeFactors(num) {
  num = num | 0;
  const result = [];
  const factors = [2, ...range(3, ((num / 2)|0) + 1, 2)];
  for (let i = 0; i < factors.length; i++) {
    const factor = factors[i];
    while ((num % factor) === 0) {
      num = (num / factor)|0;
      result.push(factor);
    }
    if (i > num) {
      break;
    }
  }
  return result;
}