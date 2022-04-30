// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return

  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array

  const merged = [];
  let [pointer1, pointer2] = [0, 0];

  while (arrA[pointer1] || arrB[pointer2]) {
    if (arrA[pointer1] < arrB[pointer2] || !arrB[pointer2]) {
      merged.push(arrA[pointer1]);
      pointer1++;
    } else {
      merged.push(arrB[pointer2]);
      pointer2++;
    }
  }

  return merged;
}

module.exports = [merge, mergeSort];
