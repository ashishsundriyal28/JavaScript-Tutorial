// Array Destructuring

const myArray = ["value1", "value2", "value3", "value4"];

// traditional way
let myVar1 = myArray[0];
let myVar2 = myArray[1];
console.log("myVar1 => ", myVar1);
console.log("myVar2 => ", myVar2);

// destructuring way
let [myVar3, myVar4] = myArray;
console.log("myVar3 => ", myVar3);
console.log("myVar4 => ", myVar4);


let myNewArray = myArray.slice(2); // it will return a new array starting from index 2
console.log("myNewArray => ", myNewArray);


// new way of destructuring
let [myVar5, myVar6, ...myVar7] = myArray;
console.log("myVar5 => ", myVar5);
console.log("myVar6 => ", myVar6);
console.log("myVar7 => ", myVar7);




