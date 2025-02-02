function reverseString(str) {
  newstring=""
  for(let i=str.length-1;i>=0;i--){
    newstring+=str[i]
  }
  return newstring
}
console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
  let myStr=str[0].toUpperCase()
  for(let i=1;i<str.length-1;i++){
    if(str[i-1]==" "){
      myStr+=str[i].toUpperCase()
    }
    else myStr+=str[i]
  }
  return myStr
}
console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'
console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'


function countVowels(str) {
  let counter=0
  // look through each individual character
    // if a e i o u increase counter 1
      // else continue
  str.toLowerCase()
  let vowels= /[aeiou]/

  for(let i=0;i<str.length;i++){
    if(str[i].match(vowels)){
      counter++
    }
  }
  return counter
}
console.log(countVowels("hello"));
// Expected Output: 2
console.log(countVowels("programming"));
// Expected Output: 3
