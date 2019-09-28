/**
 * Get the greatest common divisor of 2 integer numbers
 * 
 * @param {Number} a positive integer
 * @param {Number} b positive integer
 * @returns {Number} greatest common divisor, or NaN
 */
export function gcd(a, b) {
  a = Math.abs(a|0);
  b = Math.abs(b|0);
  while (b !== 0) {
    let h = a % b;
    a = b;
    b = h;
  }
  return a;
}