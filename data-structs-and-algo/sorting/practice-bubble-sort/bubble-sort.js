function bubbleSort(arr) {
  let notSorted = true;

  while (notSorted) {
    notSorted = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        console.log(arr.join(","));
        notSorted = true;
      }
    }
  }

}

module.exports = bubbleSort;
