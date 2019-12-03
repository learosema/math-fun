export class Mat {

  constructor(...values) {
    const MxN = (typeof values[0] === "string" && /^\d+x\d+$/.test(values[0])) ? 
      values[0].split('x').map(num => parseInt(num, 10)) : null;
    this.values = MxN !== null ? values.slice(1) : values;
    if (MxN !== null && MxN[0] > 0 && MxN[1] > 0) {
      this.numRows = MxN[0];
      this.numCols = MxN[1];  
    } else {
      const dimension = Math.sqrt(values.length);
      if (Number.isInteger(dimension)) {
        this.numCols = this.numRows = dimension; 
        return;
      }
      throw Error('ArgumentError');
    }
  }

  toArray() {
    const { numRows, numCols, values } = this;
    if (numCols !== numRows) {
      return [`${numRows}x${numCols}`, ...values];
    }
    return this.values;
  }

  static fromArray(values) {
    return new Mat(...values);
  }

  valueAt(row, column) {
    return this.values[column * this.numRows + row];
  }
  
  colAt(column) {
    const { numRows } = this;
    return this.values.slice(column * numRows, column * numRows + numRows);
  }

  rowAt(row) {
    const { numRows, numCols } = this;
    return Array(numCols).fill(0).map((_, column) => this.values[column * numRows + row]);
  }

  equals(otherMatrix) {
    if (this.values.length !== otherMatrix.values.length ||
        this.numCols !== otherMatrix.numCols ||
        this.numRows !== otherMatrix.numRows) {
      return false;
    }
    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i] !== otherMatrix.values[i]) {
        return false;
      }
    }
    return true;
  }

  add(otherMatrix) {
    if (this.numCols === otherMatrix.numCols &&
        this.numRows === otherMatrix.numRows &&
        this.values.length === otherMatrix.values.length) {
      const newValues = this.values.map((value, i) => value + otherMatrix.values[i]);
      if (this.numRows !== this.numCols) {
        newValues.unshift(`${this.numRows}x${this.numCols}`);
      }
      return Mat.fromArray(newValues);
    }
    throw Error('ArgumentError');
  }

  sub(otherMatrix) {
    if (this.numCols === otherMatrix.numCols &&
        this.numRows === otherMatrix.numRows &&
        this.values.length === otherMatrix.values.length) {
      const newValues = this.values.map((value, i) => value - otherMatrix.values[i]);
      if (this.numRows !== this.numCols) {
        newValues.unshift(`${this.numRows}x${this.numCols}`);
      }
      return Mat.fromArray(newValues);
    }
    throw Error('ArgumentError');
  }

  mul(param) {
    if (typeof param === "number") {
      const multipliedValues = this.values.map(value => value * param);
      if (this.numRows !== this.numCols) {
        multipliedValues.unshift(`${this.numRows}x${this.numCols}`);
      }
      return Mat.fromArray(multipliedValues);
    }
    if (param instanceof Mat) {
      const mat = param;
      const { numRows } = this;
      const { numCols } = mat;
      const multipliedValues = Array(numRows * numCols).fill(0).map((_, idx) => {
        const y = (idx % numRows);
        const x = (idx / numCols)|0;
        const row = this.rowAt(y);
        const col = mat.colAt(x);
        return row
          .map((value, i) => value * col[i])
          .reduce((a, b) => a + b);
      });
      if (numRows !== numCols) {
        multipliedValues.unshift(`${numRows}x${numCols}`);
      }
      return Mat.fromArray(multipliedValues);
    }
    throw Error('ArgumentError');
  }

  toString() {
    const { numRows, numCols, values } = this;
    return `mat${numRows}x${numCols}(${values.join(', ')})`;
  }
}


export class Mat2 extends Mat {

  constructor(...values) {
    super(...values);
    this.numRows = 2;
    this.numCols = 2;
  }

  toArray() {
    return this.values;
  }

  static fromArray(values) {
    return new Mat2(...values);
  }

  static identity() {
    return new Mat2(
      1, 0,  // column1
      0, 1); // column2
  }

  static rotation(angle) {
    const S = Math.sin(angle);
    const C = Math.cos(angle);
    return new Mat2(
      C, S,
     -S, C
    );
  }

  static scaling(sx, sy) {
    return new Mat2(
      sx, 0,
      0, sy 
    );
  }

  determinant() {
    const { values } = this;
    return values[0] * values[3] - values[1] * values[2];
  }

  toString() {
    return `mat2(${this.values.join(', ')})`;
  }

}

export class Mat4 extends Mat {
  constructor(...values) {
    // input is like in glsl mat4:
    // column0: row 0, row 1, row 2, row 3 
    // column1: row 0, row 1, row 2, row 3
    // column2: row 0, row 1, row 2, row 3
    // column3: row 0, row 1, row 2, row 3
    super(...values);
    this.numCols = 4;
    this.numRows = 4;
  }

  toArray() {
    return this.values;
  }

  static fromArray(values) {
    return new Mat4(...values);
  }

  static identity() {
    return new Mat4(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1);
  }

  static translation(x, y, z) {
    return new Mat4(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      x, y, z, 1
    );
  }

  static scaling(sx, sy, sz) {
    return new Mat4(
      sx,  0,  0, 0,
       0, sy,  0, 0,
       0,  0, sz, 0,
       0,  0,  0, 1
    );
  }



  static rotX(angle) {
    const { sin, cos } = Math;
    const S = sin(angle);
    const C = cos(angle);
    return new Mat4(
      1, 0, 0, 0,
      0, C, S, 0,
      0,-S, C, 0,
      0, 0, 0, 1
    );
  }

  static rotY(angle) {
    const { sin, cos } = Math;
    const S = sin(angle);
    const C = cos(angle);
    return new Mat4(
      C, 0,-S, 0,
      0, 1, 0, 0,
      S, 0, C, 0,
      0, 0, 0, 1);
  }

  static rotZ(angle) {
    const { sin, cos } = Math;
    const S = sin(angle);
    const C = cos(angle);
    return new Mat4(
      C, S, 0, 0,
	   -S, C, 0, 0,
	    0, 0, 1, 0,
	    0, 0, 0, 1
    );
  }
}
