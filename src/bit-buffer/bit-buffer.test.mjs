import { test } from '../test-framework/test.mjs';
import { arrayEquals } from '../test-framework/array-utils.mjs';

import { BitBuffer } from './bit-buffer.mjs';

test('Bitbuffer structure', (assert) => {
  const bb = new BitBuffer(20);
  bb.setBit(0, true);
  bb.setBit(2, true);
  bb.setBit(19, true);
  assert(bb.getBit(0) === true, 'bit 0 is set, getBit(0) should equal true');
  assert(bb.getBit(2) === true, 'bit 2 is set, getBit(2) should equal true');
  assert(bb.getBit(1) === false, 'bit 1 is not set, getBit(1) should equal false');
  assert(bb.getBit(19) === true, 'bit 19 is set, getBit(19) should equal true')
});


test('Initialize a BitBuffer via Bitbuffer.fill function', (assert) => {
  const bb = new BitBuffer(16).fill(true);
  assert(arrayEquals(Array.from(bb.buffer), [255, 255]), 'fill(true) sets every bit.')
  bb.fill(false);
  assert(arrayEquals(Array.from(bb.buffer), [0, 0]), 'fill(false) unsets every bit.');
});

test('Test BitBuffer.getOffsets() method', (assert) => {
  const bb = new BitBuffer(12);
  bb.setBit(2, true).setBit(3, true).setBit(5, true).setBit(7, true).setBit(11, true);
  assert(arrayEquals(bb.getOffsets(), [2, 3, 5, 7, 11]), 'bb.getOffsets() should return an array containing the first 5 primes.');
});