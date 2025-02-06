// Array Methods

const numbers = [4,2,5,8];

function myFunc(number, index){
    console.log(`index is ${index} and number is ${number}`);
}

// for (let i = 0; i < numbers.length; i++) {
//     myFunc(numbers[i],i);
// }

// forEach method iterates over each element of the array
numbers.forEach(myFunc);

// Explanation of how forEach works:
// The forEach() method calls the provided function (myFunc in this case) once for each element in the array.
// It passes two arguments to the callback function:
// 1. The current element (number)
// 2. The index of the current element in the array
// The function myFunc logs the index and number for each iteration of the array.
// Iterations:
// 1. For index 0: Logs "index is 0 and number is 4"
// 2. For index 1: Logs "index is 1 and number is 2"
// 3. For index 2: Logs "index is 2 and number is 5"
// 4. For index 3: Logs "index is 3 and number is 8"

numbers.forEach(function(element, index, array) {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});




const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20}
]
console.log("--------------------------------------------------");
users.forEach(function(user){
    console.log(user.firstName);
})
console.log("--------------------------------------------------");
users.forEach((user,index) => {
    console.log(user.firstName, index);
})
console.log("--------------------------------------------------");
for(let user of users){
    console.log(user.firstName);
}