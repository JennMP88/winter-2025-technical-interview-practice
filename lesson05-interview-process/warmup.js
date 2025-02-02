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

function countVowels(str) {}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
