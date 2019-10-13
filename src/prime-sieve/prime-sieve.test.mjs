import { test } from '../test-framework/test.mjs';
import { arrayEquals } from '../test-framework/array-utils.mjs';
import { primeSieve } from './prime-sieve.mjs';

test('Prime sieve function returns prime numbers from 2..N', (assert) => {
  assert(arrayEquals([], primeSieve(-1)), 'primeSieve(-1) returns empty array.');
  assert(arrayEquals([2], primeSieve(2)), 'primeSieve(-1) returns [2].');
  assert(arrayEquals([2, 3, 5, 7, 11], primeSieve(11)), 'primeSieve(11) returns 2, 3, 5, 7, 11');
  assert(arrayEquals([2, 3, 5, 7, 11, 13, 17, 19], primeSieve(20)), 'primeSieve(20) returns 2, 3, 5, 7, 11, 13, 17, 19')
});