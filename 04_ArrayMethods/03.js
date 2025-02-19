// filter method

// the callback function passing in the filter method
// should always return a boolean value
const numbers = [1,3,2,6,4,8];

const isEven=function(number) {
    return number%2===0;
}

const isOdd=function(number) {
    return number%2!==0;
}


// const evenNumbers = numbers.filter(isEven);


const evenNumbers = numbers.filter((number) => {
    return number%2===0;
});

console.log(evenNumbers);
