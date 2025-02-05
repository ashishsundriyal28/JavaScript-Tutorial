// JavaScript Anonymous Functions
// Function expressions

// ******* function declaration *****************
// function singHappyBirthday() {
//     console.log("Happy birthday!!");
// }

// ******* function expression *****************
const singHappyBirthday = function(){
    console.log("Happy birthday!!");
}


// ******* function declaration *****************
// function sumThreeNumbers(number1, number2, number3) {
//     return number1 + number2 + number3;
// }

// ******* function expression *****************
const sumThreeNumbers = function(number1, number2, number3) {
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,5,8);
console.log(ans);




// ******* function declaration *****************
// isEven
// input : 1 number
// output : true , false

// function isEven(number) {
//     // if (number % 2 === 0) {
//     //     return true;
//     // }
//     // return false;
//     return number % 2 === 0;
// }

// ******* function expression *****************
const isEven = function(number) {
    return number % 2 === 0;
}
console.log(isEven(23));

// function
// input : array, target (number)
// output: index of target if target present in array

const findTarget = function (array, target){
    for(let i=0; i<array.length ; i++){
        if(array[i]===target){
            return i ;
        }
    }
    return -1;
}
console.log(findTarget([1,2,3,4,5,6,7,8,9], 5));