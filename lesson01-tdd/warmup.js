// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

// 5 => '*****'
// 12 => '************'
// 3 => "***"
function stars(star){
  let str=""

  for(let i=0;i<star;i++){
    str+="*"
  }
  return str
}
console.log(stars(2))
console.log(stars(8))

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'

 
function spacedLine(n){  
  if (n<3 || n>100) {return "outer limits num must be between 3 and 10"}

  let str = "*"; 
  str += " ".repeat(n - 2); 
  str += "*";
  
  return str
}
console.log(spacedLine(5))
console.log(spacedLine(1))

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
