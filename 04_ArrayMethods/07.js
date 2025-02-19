// every method

const numbers = [2,4,6,8,10];

// const ans = numbers.every((number)=>number%2===0)


function isEven(number){
    return number%2===0;
}
const ans = numbers.every(isEven)

// callback function --- > true / false (boolean)
// every method ---- > true / false (boolean)

console.log(ans);





