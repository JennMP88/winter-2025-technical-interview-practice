/*
Problem:

You are given a text string and a pattern string. Your task is to implement a string matching algorithm that finds all occurrences of the pattern in the text.

Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array of indices where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10, 13]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

*/

function stringMatching(text, pattern) {
  // TODO: Implement the string matching algorithm
  // Return an array of indices where the pattern is found in the text
  // If the pattern is not found, return an empty array
  // Input:
  // text = "ababcababcabc"
  // pattern = "abc"
  
  // Output:
  // [2, 7, 10, 13]

  // create an empty array 
  // push the indexOf where the slice(text[i], (length of pattern+1)) === pattern  
  // let patternLength = pattern.length
  // loop through the text
  // console.log(patternLength,"length")

  
    let arr = [];
    let patternLength = pattern.length;
  
    if (!text.length || !patternLength) return arr; //empty string
  
    for (let i = 0; i < text.length; i++) {
      let subString = text.slice(i,i+patternLength);
       
      if (subString === pattern) {
        arr.push(i);
      }
    }
  
    return arr;
  }
console.log(stringMatching("ababcababcabc", "abc"));
module.exports = stringMatching;
