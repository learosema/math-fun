export class BitBuffer {

  /**
   * Create a bitwise buffer
   * 
   * @param {Number} length number of bits
   */
  constructor(length) {
    this.length = length;
    this.byteLength = ((length / 8)|0) + ((length % 8) > 0 ? 1 : 0);
    this.buffer = new Uint8Array(this.byteLength);
  }

  /**
   * Get the n-th bit of the buffer.
   * 
   * @param {Number} n bit offset 
   * @returns {Boolean} true/false if the bit is set/unset
   */
  getBit(n) {
    if (n < 0 || n >= this.length) {
      return false;
    }
    return !!(this.buffer[(n / 8)|0] & (1 << (n % 8)));
  }

  /**
   * Set the n-th bit of the buffer.
   * 
   * @param {Number} n bit offset
   * @param {Boolean} value true or false to set/unset the bit values 
   */
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

  /**
   * Fill all bits of the buffer
   * 
   * @param {Boolean} value true or false to set/unset the bit values 
   */
  fill(value) {
    const fillValue = !!value ? 255 : 0;
    for (let i = 0; i < this.byteLength; i++) {
      this.buffer[i] = fillValue;
    }
    return this;
  }

  /**
   * Get all offsets of set bits of the buffer
   * 
   * @returns {Array} array of bit offsets
   */
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