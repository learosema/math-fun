import { test } from "../test-framework/test.mjs";
import { arrayEquals } from '../test-framework/array-utils.mjs';
import { range } from "./range.mjs";

test('Test range function', (assert) => {
  assert(arrayEquals([2, 3, 4, 5], range(2, 6)), 'Range from 2 to 6 is [2, 3, 4, 5]');
  assert(arrayEquals([2, 4], range(2, 6, 2)), 'Range from 2 to 6 with step 2 is [2, 4]');
  assert(arrayEquals([], range(2, 6, -1)), 'Range from 2 to 6 with negative step -1 is []');
  assert(arrayEquals([6, 5, 4, 3], range(6, 2, -1)), 'Range from 2 to 6 with step 2 is [6, 5, 4, 3]');
});