function selectionSort(arr) {
  const arrCopy = arr.slice();

  const sorted = [];

  while (arrCopy.length) {
    console.log(sorted.join(","));

    let minIndex = 0;
    for (let i = 1; i < arrCopy.length; i++) {
      if (arrCopy[i] < arrCopy[minIndex]) {
        minIndex = i;
      }
    }

    const minValue = arrCopy[minIndex];

    arrCopy.splice(minIndex, 1);

    sorted.push(minValue);
  }

  return sorted;
}



function selectionSortInPlace(arr) {
  let divider = 0;

  while (divider < arr.length) {
    console.log(arr.join(","));

    let minIndex = divider;
    for (let i = minIndex + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    const minValue = arr[minIndex];

    for (let i = minIndex; i > divider; i--) {
      arr[i] = arr[i - 1];
    }

    arr[divider] = minValue;
    divider++;
  }
}


module.exports = [selectionSort, selectionSortInPlace];
