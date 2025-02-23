/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} 
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let seen = {}; // To store the index of characters we've seen
  let maxLength = 0; // Maximum length of substring without repeating characters
  let left = 0; // Left pointer of the sliding window
  
  for (let right = 0; right < s.length; right++) {
    // If the character has been seen and is within the current window
    if (seen[s[right]] >= left) {
      // Move left pointer to the right of the last occurrence
      left = seen[s[right]] + 1;
    }
    
    // Update the last seen index of the current character
    seen[s[right]] = right;
    
    // Update the maxLength if the current window size is larger
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}
module.exports = lengthOfLongestSubstring;


// Mini Practice---------------------------------
// create a function that takes a string and checkes if there are any repeated char
// function hasRepeatedCharacters(s) {
//   for (let charSeen = 0; charSeen < s.length; charSeen++) {
//     for (let i = charSeen + 1; i < s.length; i++) {
//       if (s[charSeen] === s[i]) {
//         return true; 
//       }
//     }
//   }
//   return false; 
// }
// console.log(hasRepeatedCharacters("abc")) //false
// console.log(hasRepeatedCharacters("aa")) //true