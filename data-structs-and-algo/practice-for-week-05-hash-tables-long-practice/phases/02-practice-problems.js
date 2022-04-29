function anagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1CharsCounts = countChars(str1);
  const str2CharsCounts = countChars(str2);

  for (let char in str1CharsCounts) {
    if (str1CharsCounts[char] !== str2CharsCounts[char]) {
      return false;
    }
  }

  return true;
}

function countChars(str) {
  const counts = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char in counts) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  }

  return counts;
}


function commonElements(arr1, arr2) {
  const hashSet1 = new Set(arr1);
  const hashSet2 = new Set(arr2);
  const common = [];

  hashSet1.forEach(el => {
    if (hashSet2.has(el)) {
      common.push(el)
    }
  })

  return common;
}


function duplicate(arr) {
  const visited = new Set();

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (visited.has(el)) {
      return el;
    }

    visited.add(el);
  }
}


function twoSum(nums, target) {
  const numsSet = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (numsSet.has(diff) && diff !== nums[i]) {
      return true;
    }
  }

  return false;
}


function wordPattern(pattern, strings) {
  const patternSet = new Set(pattern.split(""));
	const stringsSet = new Set(strings);

	return patternSet.size === stringsSet.size;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
