function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Pick the first value as the pivot

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  // Recursively sort the right

  // Return the left, pivot and right in sorted order

  if (arr.length <= 1) {
    return arr;
  }

  const pivot = 0;
  const [left, right] = [[], []];

  for (let i = pivot + 1; i < arr.length; i++) {
    const currNum = arr[i];

    if (currNum < arr[pivot]) {
      left.push(currNum);
    } else {
      right.push(currNum);
    }
  }

  const sortedLeft = quicksort(left);
  const sortedRight = quicksort(right);

  return [...sortedLeft, arr[pivot], ...sortedRight]
}


module.exports = [quicksort];
