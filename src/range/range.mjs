/**
 * return a range of numbers. Like python range()
 * 
 * @param {Number} a integer
 * @param {Number} b integer > a
 * @param step = 1
 */
export function range(a, b, step = 1) {
  if (step === 0 || (b < a && step > 0) || (b > a && step < 0)) {
    return [];
  }
  const steps = (((b|0) - (a|0)) / step)|0;
  return Array(steps).fill(0).map((_, i) => a + i * step);
}
