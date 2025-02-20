// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

// initialization
// const numbers = new Set([1,2,3]);
// console.log(numbers);


const numbers = new Set();
const items = ['item1','item2','item3','item4','item5']

// adding numbers
numbers.add(1);
numbers.add(2);
numbers.add(2);
numbers.add(items);
// this will be stored
numbers.add(['item1','item2']);
numbers.add(['item1','item2']);
console.log(numbers);
console.log(numbers.has(1));

if(numbers.has(1)){
    console.log("1 is present");
}
else{
    console.log("not present");
}

for (const number of numbers) {
    console.log(number);
}
console.log("--------------------------------------------");
console.log("--------------------------------------------");

// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements);


// how to find length of a set
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);

let length=0;
for (const element of uniqueElements) {
    length++;
}
console.log(length);












