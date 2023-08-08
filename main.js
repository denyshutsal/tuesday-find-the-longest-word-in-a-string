"use srtict";

// Tuesday: Find the longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number. For these algorithms you are allowed to use the split() method.

// findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
// findLongestWord("May the force be with you") should return 5.

function findLongestWord(str) {
  const splited = str.split(" ");
  const result = [];

  for (let i = 0; i < splited.length; i++) {
    const element = splited[i];

    result.push(element.length);
  }

  return Math.max.apply(null, result);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWord("May the force be with you")); // 5
