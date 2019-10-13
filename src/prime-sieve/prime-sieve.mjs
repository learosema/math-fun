import { test } from "../test-framework/test.mjs";
import { arrayEquals } from '../test-framework/array-utils.mjs';

export function primeSieve(N = 100) {
  const result = Array(N + 1).fill(0).map((_, i) => i);
  result[0] = result[1] = false;
  for (let i = 2; i <= (Math.sqrt(N)|0); i++) {
    if (!result[i]) {
      continue;
    }
    for (let j = 2 * i; j <= N; j += i) {
      result[j] = false;
    }
  }
  return result.filter(x => typeof x === "number");
}