// 1. Given two strings, return true if the strings are anagrams and false if not. Ignore spaces.
// An Anagram: a word formed by rearranging the letters 

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

function isAnagram(str1,str2){
  // if ignore spaces use join method
  
  str1=str1.replace(/\s/g, '') //regx to ignore spaces
  str2=str2.replace(/\s/g, '') 
  
  let obj1={}
  let obj2={}

  let i=0
  let j=0
  while(i!=str1.length){
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1
    i++
  }

  while(j!=str2.length){
    obj2[str2[j]] = (obj2[str2[j]] || 0) + 1
    j++
  }
  
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}
console.log(isAnagram("aba", "baa")) //true
console.log(isAnagram("hub", "huc")) //false
console.log(isAnagram("ABA", "aba")) //false
console.log(isAnagram("aa bb","a b a b")) //true

// 2. Solve the same problem as above but do not sort the strings. What is the difference in time complexity when we don't sort the strings?

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

// 3. Given two strings, how many characters would need to be added or replacedin order to make them anagrams

// "abad", "abcd" => 1
//  "aabb", "baba" => 0
// "aaaazzzz", "bbbbwwww" => 8
