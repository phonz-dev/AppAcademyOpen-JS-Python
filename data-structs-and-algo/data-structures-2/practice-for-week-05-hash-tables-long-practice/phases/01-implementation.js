class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    const bucketIndex = this.hashMod(key);
    const bucket = this.data[bucketIndex];
    const newPair = new KeyValuePair(key, value);

    if (!bucket) {
      this.data[bucketIndex] = newPair;
      this.count += 1;
      return;
    }

    let currPair = bucket;
    while (currPair) {
      if (currPair.key === key) {
        currPair.value = value;
        return;
      }

      currPair = currPair.next;
    }

    newPair.next = bucket;
    this.data[bucketIndex] = newPair;
    this.count += 1;
  }


  read(key) {
    const bucketIndex = this.hashMod(key);
    let bucket = this.data[bucketIndex];

    if (bucket.key === key) {
      return bucket.value;
    }

    let currPair = bucket;
    while (currPair) {
      if (currPair.key === key) {
        return currPair.value;
      }

      currPair = currPair.next;
    }
  }


  resize() {
    const oldData = this.data;

    this.capacity *= 2;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;

    oldData.forEach(datum => {
      let currPair = datum;

      while (currPair) {
        this.insert(currPair.key, currPair.value);
        currPair = currPair.next;
      }
    })

  }

  delete(key) {
    // code here
  }
}


const hashTable = new HashTable(4)

console.log(hashTable.hashMod('key1'), hashTable.hashMod('key5'));

module.exports = HashTable;
