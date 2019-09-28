import { test } from "../test-framework/test.mjs";
import { gcd } from "./gcd.mjs";

test('Get the greatest common divisor', (assert) => {
  assert(1 === gcd(3, 5), 'gcd(3, 5) should return 1');
  assert(1 === gcd(5, 8), 'gcd(5, 8) should return 1');
  assert(3 === gcd(3, 12), 'gcd(3, 12) should return 3');
});
