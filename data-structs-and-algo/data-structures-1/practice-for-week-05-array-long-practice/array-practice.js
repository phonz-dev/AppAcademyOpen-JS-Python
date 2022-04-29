const findMinimum = arr => {
  let min = undefined;

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    if (min === undefined || currNum < min) {
      min = currNum;
    }
  }

  return min;
};

// Time: O(n)
// Space: O(1)

const runningSum = arr => {
  const newArr = [];
  let runningSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    runningSum += num;

    newArr.push(runningSum);
  }

  return newArr
};

// Time: O(n)
// Space: O(n)

const evenNumOfChars = arr => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let string = arr[i];

    if (string.length % 2 === 0) {
      count++
    }
  }

  return count;
};

// Time: O(n)
// Space: O(1)

const smallerThanCurr = arr => {
  const counts = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    const curr = arr[i];

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < curr) {
        count++;
      }
    }

    counts.push(count);
  }

  return counts;
};

// Time: O(n^2)
// Space: O(n)

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let num2 = arr[j];

      if (num1 + num2 === target) return true;
    }
  }

  return false;
};

// Time: O(n^2)
// Space: O(1)

const secondLargest = arr => {
  const sorted = arr.sort((a, b) => a - b);

  return sorted[sorted.length - 2];
};

// Time: O(logn)
// Space: O(n)

const shuffle = (arr) => {
  const newArr = [];

  while (newArr.length < arr.length) {
    let randIdx = Math.floor(Math.random() * arr.length);
    let el = arr[randIdx];

    if (!newArr.includes(el)) {
      newArr.push(el)
    }
  }

  return newArr;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
