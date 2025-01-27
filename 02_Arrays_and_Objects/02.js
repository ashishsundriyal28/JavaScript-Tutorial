// Array methods
// push and pop
// shift and unshift

let fruits = ['apple', 'mango', 'grapes'];
console.log(fruits);

// push
fruits.push('banana');
console.log(fruits);

// pop
// fruits.pop();
// also returns values
let poppedFruit = fruits.pop();
console.log(poppedFruit);
console.log(fruits);


// unshift
// add element in start
fruits.unshift("banana");
fruits.unshift("myFruit");
console.log(fruits);

// shift
// remove element from start
fruits.shift();
console.log(fruits);

// push and pop are faster than shift and unshift

