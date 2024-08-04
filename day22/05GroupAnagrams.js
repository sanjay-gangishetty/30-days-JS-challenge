// Activity 5: Group Anagrams
// Task 5: Solve the "Group Anagrams" problem on LeetCode.

// - Write a function that takes an array of strings and groups anagrams together.
// - Log the grouped anagrams for a few test cases.

function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    // Sort the characters in the string and use it as a key
    const sortedStr = str.split("").sort().join("");

    // If the key does not exist in the map, initialize it with an empty array
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    // Add the original string to the corresponding list in the map
    map.get(sortedStr).push(str);
  }

  // Convert the map values to an array
  return Array.from(map.values());
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

console.log(groupAnagrams([""])); // Output: [['']]
console.log(groupAnagrams(["a"])); // Output: [['a']]
console.log(groupAnagrams(["aab", "aba", "baa"])); // Output: [['aab', 'aba', 'baa']]
console.log(groupAnagrams(["abcd", "bcda", "cdab", "dabc", "efgh"]));
// Output: [['abcd', 'bcda', 'cdab', 'dabc'], ['efgh']]
