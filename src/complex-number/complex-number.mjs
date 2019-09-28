export class ComplexNumber {
  constructor(real, imag = 0) {
    this.real = real;
    this.imag = imag;
  }

  get abs() {
    const { real, imag } = this;
    return Math.sqrt(real * real + imag * imag);
  }

  get exp() {
    const { real, imag } = this
    const { E, cos, sin } = Math
    return new ComplexNumber(E ** real).mul(new ComplexNumber(cos(imag), sin(imag)));
  }

  get conj() {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
  }

  add(b) {
    const { real, imag } = this;
    return new ComplexNumber(real + b.real, imag + b.imag);
  }

  sub(b) {
    const { real, imag } = this;
    return new ComplexNumber(real - b.real, imag - b.imag);
  }

  mul(b) {
    const { real, imag } = this;
    return new ComplexNumber(real * b.real - imag * b.imag, imag * b.real + real * b.imag);
  }

  div(b) {
    const { real, imag } = this;
    return new ComplexNumber(
      (real * b.real + imag * b.imag) / (b.real ** 2 + b.imag ** 2),
      (imag * b.real - real * b.imag) / (b.real ** 2 + b.imag ** 2));
  }

  equals(other) {
    const { real, imag } = this;
    if (typeof other === 'number') {
      return (imag === 0 && real === other)
    }
    if (typeof other === 'object' && other !== null && other instanceof ComplexNumber) {
      return (real === other.real && imag === other.imag);
    }
    return false;
  }


  toJS() {
    const { real, imag } = this;
    return { real, imag };
  }
}