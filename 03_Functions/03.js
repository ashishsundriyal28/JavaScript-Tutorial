// JavaScript Arrow Functions

// ************** Anonymous Functions ****************************
// const singHappyBirthday = function(){
//     console.log("Happy birthday!!");
// }
// *************** Arrow Functions *******************************
const singHappyBirthday = () => {
    console.log("Happy birthday!!");
}
singHappyBirthday();

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// *************** Anonymous Functions *******************************
// const sumThreeNumbers = function(number1, number2, number3) {
//     return number1 + number2 + number3;
// }
// const ans = sumThreeNumbers(2,5,8);
// console.log(ans);
// *************** Arrow Functions *******************************
const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,5,8);
console.log("Arraow => ans => ", ans);

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// *************** Anonymous Functions *******************************
// const isEven = function(number) {
//     return number % 2 === 0;
// }
// console.log(isEven(23));
// *************** Arrow Functions *******************************
const isEven = (number) => {
    return number%2===0;
}

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







