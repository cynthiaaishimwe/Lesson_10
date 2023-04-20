// Write a function that takes an array of numbers and returns the highest number in the array.

function highestNumber(numbers) {
    let num = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > num) {
        num = numbers[i];
      }
    }
    return num;
  }
let numbers = [5, 2, 9, 1, 5, 6];
console.log(highestNumber(numbers));

// Write a function that takes an array of strings 
// and returns the longest string in the array.

function arrayStrings(arr){
     student = ""
    for(i =0; i< arr.length; i++){
      if(arr[i].length > student.length){
        student = arr[i];
        
      }
     }
     return student
    }
let arrayOfStrings = ["learning","cleaning","resting","procrastinating"]
console.log(arrayStrings(arrayOfStrings))

// Write a function that takes an array of numbers and returns a new array 
// that contains only the numbers that are divisible by 3.
 
function numDivisible(array){
    
    for(let i = 0 ; i< array.length ;i++){
        if(array[i]%3===0){
           console.log(array[i]);
        }
    }
    return array
}
let array = [3,9,10,34,67,12]
numDivisible(array)