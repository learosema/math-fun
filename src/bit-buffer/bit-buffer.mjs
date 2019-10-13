export class BitBuffer {
  constructor(length) {
    this.length = length;
    this.byteLength = ((length / 8)|0) + ((length % 8) > 0 ? 1 : 0);
    this.buffer = new Uint8Array(this.byteLength);
  }

  getBit(n) {
    if (n < 0 || n >= this.length) {
      return false;
    }
    return !!(this.buffer[(n / 8)|0] & (1 << (n % 8)));
  }

  setBit(n, value) {
    const offset = (n / 8)|0
    const bit = (n % 8);
    if (!!value) {
      this.buffer[offset] |= 1 << bit;
    } else {
      this.buffer[offset] &= 255 ^ (1 << bit);
    }
    return this;
  }

  fill(value) {
    const fillValue = !!value ? 255 : 0;
    for (let i = 0; i < this.byteLength; i++) {
      this.buffer[i] = fillValue;
    }
    return this;
  }

  getOffsets() {
    const result = []
    for (let i = 0; i < this.length; i++) {
      if (this.getBit(i)) {
        result.push(i);
      }
    }
    return result;
  }
}