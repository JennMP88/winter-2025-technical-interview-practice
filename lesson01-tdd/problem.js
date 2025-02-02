/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  // your code here
  str = str.toLowerCase(); 
  let left = 0, right = str.length - 1;
  const numLetters = /[a-z0-9]/; 

  while (left < right) {
      // move left pointer forward
      while (left < right && !str[left].match(numLetters)) left++;
      // move right pointer to prev
      while (left < right && !str[right].match(numLetters)) right--;

     //if not matching no bueno  
      if (str[left] !== str[right]) {
          return false;
      }

      left++;
      right--;
  }
  return true;
}

module.exports = isPalindrome;
