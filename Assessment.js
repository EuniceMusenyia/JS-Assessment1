// Write a function that takes in a string and returns it when reversed
// let food = “eating”
function food(str){
    let food = "eating"
    console.log(food.split(", "));
}
food(str);


// Write a function that takes in the following array and 
// consoles the target if it is found else null
// let num = [2,8,0,23,5,45,76]
// Target = 23

function divideNums(nums) {
    if(nums.length<=1){
        return nums
    }
    let middle = Math.floor(nums.length/2);
    let left = nums.slice(0, middle);
    let right = nums.slice(middle);
    return sortedNums(divideNums(left),divideNums(right));
    
}
function sortedNums(left, right){
    let emptyArray = [];
    while(left.length && right.length){
        if (left[0]<right[0]){
            emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())
        }
    }
    return[...emptyArray,...left,...right]
}
let num = [2,8,0,23,5,45,76]
console.log(divideNums(num))

function binaryArray(numbers, target){
    let left = 0;
    let right = numbers.length-1;
    while (left<=right) {
        let middle = Math.floor((left + right)/2);
        if(numbers[middle] ===target){
            return middle;
        }
        else if(numbers[middle]< target){
            left = middle +1;
        }
        else
        right = middle - 1;
    }
    return null
}

let numbers = [0,2,5,8,23,45,76];
let target = 23;
console.log(binaryArray(numbers, target));




// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
function yearsArray (years){

}



// 4. Given a range of numbers from 0 to 100,
//  console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, 
// and “FizzBuzz” if divisible by both 3 and 5.
function numberArray(numbers) {
    while (0,100) {
        
    }
    if (numbers/3===0 && numbers / 5 ===0) {
        return "FizzBuzz"
        
    }
    if else( numbers/3===0){
        return "fizz"
    }
     else( numbers/5===0){

    return 
    
}
}

// 5. Write a function that takes in an array of numbers and 
// returns an array that has all
// elements multiplied by 4.

function multiplication (num){

    let i =0;
let multiply =1
while (i<num.length) {
    multiply *= num[i]
    
    i++;
}
console.log({multiply});
}
multiplication(num);


// 6. Write a function that takes in an array of strings and 
// returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function strArr(nums) {
    let nums = [“10”,”24”,”45”,”56”,”67”]

    
}