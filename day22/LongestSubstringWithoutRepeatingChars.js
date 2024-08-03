// Activity 2: Longest Substring Without Repeating Characters
// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.

// - Write a function that takes a string and returns the length of the longest substring without repeating characters.
// - Log the length for a few test cases, including edge cases.

function lengthOfLongestSubstring(s) {
  let n = s.length;
  let map = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left);
    }
    map.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 (abc)
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 (b)
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 (wke)
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("a")); // Output: 1
console.log(lengthOfLongestSubstring("au")); // Output: 2
console.log(lengthOfLongestSubstring("dvdf")); // Output: 3 (vdf)
