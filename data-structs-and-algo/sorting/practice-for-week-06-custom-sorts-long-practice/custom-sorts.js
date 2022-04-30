function ageSort(users) {
  users.sort((user1, user2) => {
    return user1.age - user2.age;
  })

  return users;
}

function oddEvenSort(arr) {
  arr.sort((n1, n2) => {
    if (n1 % 2 === 0 && n2 % 2 === 1) return 1;
    if (n1 % 2 === 1 && n2 % 2 === 0) return -1;
    return n1 - n2;
  })

  return arr;
}

function validAnagrams(s, t) {
  const newS = s.split('').sort().join('');
  const newT = t.split('').sort().join('');

  return newS === newT;
}

function reverseBaseSort(arr) {
  arr.sort((a, b) => {
    if (String(a).length > String(b).length) return -1;
    if (String(a).length < String(b).length) return 1;

    return a - b;
  })

  return arr;
}

function frequencySort(arr) {
  const numCounts = arr.reduce((counts, num) => {
    if (num in counts) {
      counts[num] += 1;
    } else {
      counts[num] = 1;
    }

    return counts;
  }, {});

  arr.sort((a, b) => {
    if (numCounts[a] < numCounts[b]) return -1;
    if (numCounts[a] > numCounts[b]) return 1;

    return b - a;
  })

  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
