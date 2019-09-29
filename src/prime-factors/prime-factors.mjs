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
  const factors = [2, ...range(3, (Math.sqrt(num)|0) + 1, 2)];
  for (let i = 0; i < factors.length; i++) {
    const factor = factors[i];
    while ((num % factor) === 0) {
      num = (num / factor)|0;
      result.push(factor);
    }
    if (factor > num) {
      break;
    }
  }
  if (num > 1) {
    result.push(num);
  }
  return result;
}


/**
 * Get the biggest prime factor
 * @param {Number} num positive integer > 0 
 */
export function gpf(num) {
  num = Math.abs(num | 0);
  let result = 1;
  for (let i = -2; i < (Math.sqrt(num)|0) + 1; i += 2) {
    const factor = i < 0 ? 2 : 3 + i;
    while ((num % factor) === 0) {
      num = (num / factor)|0;
      result = factor;
    }
    if (factor > num) {
      break;
    }
  }
  if (num > 1) {
    result = num;
  }
  return result;
}