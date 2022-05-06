/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

// your code here
const removeLastVowel = word => {
    const vowels = 'aeiou';

    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }

    return word;
}

const hipsterfy = sentence => {
    const words = sentence.split(' ');
    const newWords = words.map(word => removeLastVowel(word));

    return newWords.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
