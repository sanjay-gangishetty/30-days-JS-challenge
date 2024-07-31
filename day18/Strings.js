// Activity 3 - String Algorithms
// Task 6 - Count the occurences of each character in a string and log occurances
function countOccurances(str) {
  let charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (let char in charCount) {
    console.log(`${char}: ${charCount[char]}`);
  }
}

const str = "hello world";
countOccurances(str);

// Task 7 - find longest substring without repeating characters in a string, log length of the substring
function lengthOfLongestSubstring(str) {
  let charMap = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    if (charMap.has(str[end])) {
      start = Math.max(charMap.get(str[end]) + 1, start);
    }
    charMap.set(str[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

const str2 = "abcabcbb";
const length = lengthOfLongestSubstring(str2);
console.log(`Length of the longest substring without repeating characters: ${length}`);

/* Output ----------------
h: 1
e: 1
l: 3
o: 2
 : 1
w: 1
r: 1
d: 1
Length of the longest substring without repeating characters: 3
*/
