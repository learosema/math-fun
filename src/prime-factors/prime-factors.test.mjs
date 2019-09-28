import { test } from "../test-framework/test.mjs";
import { arrayEquals } from "../test-framework/array-utils.mjs";
import { primeFactors } from "./prime-factors.mjs";

test('Test prime factorization', (assert) => {
  assert(arrayEquals([], primeFactors(1)), 'primeFactors(1) should return an empty array.');
  assert(arrayEquals([2], primeFactors(2)), 'The prime factor of 2 is 2.');
  assert(arrayEquals([3], primeFactors(3)), 'The prime factor of 3 is 3.');
  assert(arrayEquals([2, 2], primeFactors(4)), 'The prime factors of 4 are 2*2.');
  assert(arrayEquals([2, 2, 2, 5, 5], primeFactors(200)), 'The prime factors of 200 are 2³*5².');
  assert(arrayEquals([3, 5, 823], primeFactors(12345)), 'The prime factors of 12345 are 3, 5, 823.');
});