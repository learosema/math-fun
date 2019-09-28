/**
 * Minimal testing framework
 * 
 * @param {string} description Description of the test 
 * @param {Function} testBody test body function
 */
export function test(description, testBody) {
  const assert = (condition, ...args) => {
    if (! condition) {
      throw new Error();
    }
  };
  console.log('[ TEST ]', description);
  try {
    testBody(assert);
  } catch (ex) {
    // when the test fails somewhere,
    // run the test again with the native console.assert.
    // This way, line numbers are shown on assertion errors.
    const nativeAssert = console.assert.bind();
    testBody(nativeAssert);
    if (typeof process !== 'undefined') {
      // In node.js, exit with code -1
      process.exit(-1);
    }
  }
}
