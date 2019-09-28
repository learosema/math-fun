import { test } from '../test-framework/test.mjs';
import { ComplexNumber } from './complex-number.mjs';

function isCloseTo(a, b) {
  return Math.abs(b - a) < .001;
}

test('Real part of a purely real number', (assert) => {
  const actual = new ComplexNumber(1, 0);
  assert(actual.equals(1), '1+0i should equal 1');
});

test('Real part of a purely imaginary number', (assert) => {
  const actual = new ComplexNumber(0, 1);
  assert(actual.real === 0, 'real part of a purely imaginary number should equal 0');
  assert(actual.imag === 1, 'imag part of a purely imaginary number should equal 1');
});

test('Real part of a number with real and imaginary part', (assert) => {    
  const actual = new ComplexNumber(1, 2);
  assert(actual.real === 1, 'real part of 1+2i equals 1');
  assert(actual.imag === 2, 'imag part of 1+2i equals 2');
});

test('Add purely real numbers', (assert) => {
  const expected = new ComplexNumber(3, 0);
  const actual = new ComplexNumber(1, 0).add(new ComplexNumber(2, 0));
  assert(actual.equals(expected), 'Adding 1+0i and 2+0i equals 3+0i');
});

test('Add purely imaginary numbers', (assert) => {
  const expected = new ComplexNumber(0, 3);
  const actual = new ComplexNumber(0, 1).add(new ComplexNumber(0, 2));
  assert(actual.equals(expected), 'Adding 0+1i and 0+2i equals 0+3i');
});

test('Add numbers with real and imaginary part', (assert) => {
  const expected = new ComplexNumber(4, 6);
  const actual = new ComplexNumber(1, 2).add(new ComplexNumber(3, 4));
  assert(actual.equals(expected), 'Adding 1+2i and 3+4i equals 4+6i');
});

test('Subtract purely real numbers', (assert) => {
  const expected = new ComplexNumber(-1, 0);
  const actual = new ComplexNumber(1, 0).sub(new ComplexNumber(2, 0));
  assert(actual.equals(expected), 'Subtracting 1+0i and 2+0i equals -1+0i');
});

test('Subtract purely imaginary numbers', (assert) => {
  const expected = new ComplexNumber(0, -1);
  const actual = new ComplexNumber(0, 1).sub(new ComplexNumber(0, 2));
  assert(actual.equals(expected), 'Subtract 0+1i and 0+2i equals 0-1i');
});

test('Subtract numbers with real and imaginary part', (assert) => {
  const expected = new ComplexNumber(-2, -2);
  const actual = new ComplexNumber(1, 2).sub(new ComplexNumber(3, 4));
  assert(actual.equals(expected), '1+2i minus 3+4i equals -2-2i');
});

test('Multiply purely real numbers', (assert) => {
  const expected = new ComplexNumber(2, 0);
  const actual = new ComplexNumber(1, 0).mul(new ComplexNumber(2, 0));
  assert(actual.equals(expected), '1+0i multiplied by 2+0i equals 2+0i');
});

test('Multiply imaginary unit', (assert) => {
  const expected = new ComplexNumber(-1, 0);
  const actual = new ComplexNumber(0, 1).mul(new ComplexNumber(0, 1));
  assert(actual.equals(expected), '0+1i multiplied by 0+1i equals -1+0i');
});

test('Multiply purely imaginary numbers', (assert) => {
  const expected = new ComplexNumber(-2, 0);
  const actual = new ComplexNumber(0, 1).mul(new ComplexNumber(0, 2));

  assert(actual.equals(expected), '1i multiplied by 2i equals -2.');
});

test('Multiply numbers with real and imaginary part', (assert) => {
  const expected = new ComplexNumber(-5, 10);
  const actual = new ComplexNumber(1, 2).mul(new ComplexNumber(3, 4));

  assert(actual.equals(expected), '1+2i multiplied 3+4i equals 3+4i');
});

test('Divide purely real numbers', (assert) => {
  const expected = new ComplexNumber(0.5, 0);
  const actual = new ComplexNumber(1, 0).div(new ComplexNumber(2, 0));
  assert(actual.equals(expected), '1 divided by 2 equals 0.5');
});

test('Divide purely imaginary numbers', (assert) => {
  const expected = new ComplexNumber(0.5, 0);
  const actual = new ComplexNumber(0, 1).div(new ComplexNumber(0, 2));

  assert(actual.equals(expected), '1i divided by 2i equals .5');
});

test('Divide numbers with real and imaginary part', (assert) => {
  const expected = new ComplexNumber(0.44, 0.08);
  const actual = new ComplexNumber(1, 2).div(new ComplexNumber(3, 4));

  assert(actual.equals(expected), '1+2i / 3+4i equals 0.44+0.08i');
});

test('Absolute value of a positive purely real number', (assert) => {
  const expected = 5;
  const actual = new ComplexNumber(5, 0).abs;

  assert(actual === expected,'(5+0i).abs equals 5') 
});

test('Absolute value of a negative purely real number', (assert) => {
  const expected = 5;
  const actual = new ComplexNumber(-5, 0).abs;

  assert(actual === expected, '(-5+0i).abs equals 5');
});

test('Absolute value of a purely imaginary number with positive imaginary part', (assert) => {
  const expected = 5;
  const actual = new ComplexNumber(0, 5).abs;
  assert(actual === expected, '(0+5i).abs equals 5');
});

test('Absolute value of a purely imaginary number with negative imaginary part', (assert) => {
  const expected = 5;
  const actual = new ComplexNumber(0, -5).abs;

  assert(actual === expected, '(0-5i).abs equals 5');
});

  test('Absolute value of a number with real and imaginary part', (assert) => {
    const expected = 5;
    const actual = new ComplexNumber(3, 4).abs;

    assert(actual === expected, '(3+4i).abs equals 5');
  });

  test('Conjugate a purely real number', (assert) => {
    const expected = new ComplexNumber(5, 0);
    const actual = new ComplexNumber(5, 0).conj;

    assert(actual.equals(expected), '(5+0i).conj equals 5.');
  });

  test('Conjugate a purely imaginary number', (assert) => {
    const expected = new ComplexNumber(0, -5);
    const actual = new ComplexNumber(0, 5).conj;

    assert(actual.equals(expected), '(0+5i).conj equals 0-5i');
  });

  test('Conjugate a number with real and imaginary part', (assert) => {
    const expected = new ComplexNumber(1, -1);
    const actual = new ComplexNumber(1, 1).conj;

    assert(actual.equals(expected), '(1+1i).conj equals (1-1i).');
  });

  test('Euler\'s identity/formula', (assert) => {
    const expected = new ComplexNumber(-1, 0);
    const actual = new ComplexNumber(0, Math.PI).exp;

    assert(isCloseTo(actual.real, expected.real), '0+i*pi is close to -1+0i');
    assert(isCloseTo(actual.imag, expected.imag), '0+i*pi is close to -1+0i');
  });

  test('Exponential of 0', (assert) => {
    const expected = new ComplexNumber(1, 0);
    const actual = new ComplexNumber(0, 0).exp;

    assert(isCloseTo(actual.real, expected.real), '(0).exp is close to 0');
    assert(isCloseTo(actual.imag, expected.imag), '(0).exp is close to 0');
  });

  test('Exponential of a purely real number', (assert) => {
    const expected = new ComplexNumber(Math.E, 0);
    const actual = new ComplexNumber(1, 0).exp;

    assert(isCloseTo(actual.real, expected.real), '(1).exp is close to E');
    assert(isCloseTo(actual.imag, expected.imag), '(1).exp is close to E');
  });

  test('Exponential of a number with real and imaginary part', (assert) => {
    const expected = new ComplexNumber(-2, 0);
    const actual = new ComplexNumber(Math.LN2, Math.PI).exp;

    assert(isCloseTo(actual.real, expected.real), '(ln2+i*pi).exp is close to -2');
    assert(isCloseTo(actual.imag, expected.imag), '(ln2+i*pi).exp is close to -2');
  });
