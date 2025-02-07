// 1. given a string with three characters, return the second character
function threeChar(str){
  return str.slice(0,2)
}
console.log(threeChar('cha')) //ch
// 2. get the second and third char from a string. the string will always have atleast three characters

// 'cat' => 'at'
// 'robbed' => 'ob'
function char2_3(str){
  return str.slice(1)
}
console.log(char2_3('cha')) //ha
// 3. Given a word with 5 letters, return the second through 5th letter

function getSecondThroughFifthLetter (word){
  return word.slice(1,word.length);
}
console.log(getSecondThroughFifthLetter("butter")) //utter

// 4. given a string and a number called N, return the second through the Nth character

// 'schoolbus', 5 => 'choo'
// 'telephone', 6 => 'eleph

// slice is a ?? method: array and also a string method
// splice is a array method
function stringCut(str,n){
  return str.slice(1,n)
}
console.log(stringCut("schoolbus",5)) //choo
console.log(stringCut("telephone",6)) //eleph

// 5. Given an array of booleans, return an arrray of only false elements

// [true, true, false, true , false] => [false, false]
function checkFalse(arr){
  let falseArr=[]
  for(let i=0;i<arr.length;i++){
    if(!arr[i]){
      falseArr.push(arr[i])
    }
  }
  return falseArr
}
console.log(checkFalse([true, true, false, true , false])) // [false, false]

// 6. given a string with two words, put ' the ' between the words and return the string

// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'
function insertThe(str){
  str=str.split(" ")
  str.splice(1,0,"the")  
  return str.join(" ")
}
console.log(insertThe("to beach"))
console.log(insertThe("for real"))
// 7.  given two numbers, price and discount, return the price after the discount is applied

// price is 100 and discount is 15

// 100, 15 => 85

// 70, 3 => 67.9

// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.
