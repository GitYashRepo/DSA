# Concept:-

# 1. Strings as Arrays of Characters
- Strings in JavaScript are immutable, meaning individual characters cannot be changed.
However, strings can be accessed like arrays (string[index]).

```
let str = "hello";
console.log(str[1]); // "e"
```

# 2. Common String Operations
- Here are some operations frequently used in string-related DSA problems:
### Concatenation
- Combining strings using + or concat().
```
let s1 = "hello";
let s2 = "world";
console.log(s1 + " " + s2); // "hello world"
```
### Substring Extraction
- slice(start, end)
- substring(start, end)
- substr(start, length) (deprecated, avoid using it)
```
let str = "JavaScript";
console.log(str.slice(0, 4)); // "Java"
console.log(str.substring(4, 10)); // "Script"
```
### Length of a String
- Get the number of characters in a string.
```
let str = "DSA";
console.log(str.length); // 3
```



# 3. Searching in Strings
- Efficient search is crucial in DSA.
### Index-based Search
- indexOf(substr) and lastIndexOf(substr)
```
let str = "hello world";
console.log(str.indexOf("world")); // 6
console.log(str.lastIndexOf("o")); // 7
```
### Includes
- Checks for substring presence.
```
let str = "hello";
console.log(str.includes("ell")); // true
```
### StartsWith and EndsWith
- Useful in prefix and suffix problems.
```
let str = "JavaScript";
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true
```



# 4. String Manipulation
- These methods are used for solving problems like anagrams, palindromes, etc.
### Splitting Strings
Split strings into arrays using split().
```
let str = "a,b,c,d";
let arr = str.split(",");
console.log(arr); // ["a", "b", "c", "d"]
```
### Joining Strings
-Convert arrays to strings with join().
```
let arr = ["a", "b", "c"];
console.log(arr.join("-")); // "a-b-c"
```
### Replacing Characters
- Use replace() or replaceAll().
```
let str = "hello world";
console.log(str.replace("world", "JavaScript")); // "hello JavaScript"
```
### Reversing Strings
- Reverse by converting to an array.
```
let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed); // "olleh"
```



# 5. Advanced Techniques in String DSA Problems
- String-based problems often require clever algorithms and optimizations.
### Palindrome Check
- A common string DSA problem.
```
function isPalindrome(s) {
  let reversed = s.split("").reverse().join("");
  return s === reversed;
}
console.log(isPalindrome("madam")); // true
```
### Anagram Check
- Verify if two strings are anagrams.
```
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  let sorted1 = s1.split("").sort().join("");
  let sorted2 = s2.split("").sort().join("");
  return sorted1 === sorted2;
}
console.log(isAnagram("listen", "silent")); // true
```
### Sliding Window Technique
- Efficient for substring problems like finding the longest substring.
```
function longestUniqueSubstring(s) {
  let set = new Set();
  let left = 0, maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
console.log(longestUniqueSubstring("abcabcbb")); // 3 ("abc")
```
### Frequency Count
- Used in problems involving counting characters.
```
function characterFrequency(s) {
  let freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
console.log(characterFrequency("aabccc")); // { a: 2, b: 1, c: 3 }
```


# 6. Regular Expressions
- Powerful for pattern matching and search operations.
### Matching Patterns
- Use test() or match().
```
let str = "hello123";
let regex = /\d+/;
console.log(regex.test(str)); // true
```
### Replacing Patterns
- Use replace().
```
let str = "a1b2c3";
console.log(str.replace(/\d/g, "")); // "abc"
```


# 7. Practice Problems
- Check if a string is a palindrome.
- Longest common prefix.
- Longest substring without repeating characters.
- Group anagrams.
- Implement strStr() or substring search.
- Count and remove duplicate characters.
