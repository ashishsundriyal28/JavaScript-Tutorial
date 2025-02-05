// Intorduction to Functions 

// function Declaration

function helloWorld() {
    console.log("Hello World !!!!");
}

function sumThreeNumbers(number1, number2, number3) {
    return number1 + number2 + number3;
}

const returnedValue = sumThreeNumbers(4, 5, 6);
console.log(returnedValue);


// isEven
// input : 1 number
// output : true , false

function isEven(number) {
    // if (number % 2 === 0) {
    //     return true;
    // }
    // return false;
    return number % 2 === 0;
}

console.log(isEven(23));


// function
// input : string
// output: firstCharacter

function firstChar(anyString) {
    return anyString[0];
}
console.log(firstChar("zbc"));


// function
// input : array, target (number)
// output: index of target if target present in array

function findTarget(array, target){
    for(let i=0; i<array.length ; i++){
        if(array[i]===target){
            return i ;
        }
    }
    return -1;
}
console.log(findTarget([1,2,3,4,5,6,7,8,9], 5));