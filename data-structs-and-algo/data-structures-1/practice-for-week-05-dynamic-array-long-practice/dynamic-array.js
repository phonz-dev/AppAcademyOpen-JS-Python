class DynamicArray {

  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    }

    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    this.length--;
    return this.data[this.length];
  }

  shift() {
    const firsEl = this.data[0];

    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }

    this.length--;
    return firsEl;
  }

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize();
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }

    this.data[0] = val;
    this.length++;
  }

  indexOf (val) {
    for (let i = 0; i < this.length; i++) {
      const currEl = this.data[i];

      if (currEl === val) {
        return i;
      }
    }

    return -1;
  }

  resize () {
    this.capacity *= 2;
    const newData = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
  }

}


module.exports = DynamicArray;
