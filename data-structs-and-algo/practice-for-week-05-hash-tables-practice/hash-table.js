const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    const shaValue = sha256(key);
    const firstEightChars = shaValue.slice(0, 8);
    const hexValue = '0x' + firstEightChars;
    const decimalValue = parseInt(hexValue);

    return decimalValue;
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    const index = this.hashMod(key);

    if (this.data[index]) {
      throw new Error('hash collision or same key/value pair already exists!');
    }

    this.data[index] = new KeyValuePair(key, value);
    this.count += 1;
  }

  insertWithHashCollisions(key, value) {
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    if (this.data[index]) {
      newPair.next = this.data[index]
    }

    this.data[index] = newPair;
    this.count += 1;
  }

  insert(key, value) {
    // Your code here
  }



}


module.exports = HashTable;
