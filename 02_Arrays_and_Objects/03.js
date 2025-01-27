// primititve vs reference data types

//primitive data types
let num1=6;
let num2=num1;
console.log("value of num1: ", num1);
console.log("value of num2: ", num2);

num1++;
console.log("value of num1: ", num1);
console.log("value of num2: ", num2);


//reference data types
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1 = ", array1);
console.log("array2 = ", array2);

array1.push("item3");
console.log("array1: ", array1);
console.log("array2: ", array2);

// explaination : 
// array1 and array2 are pointing to the same memory location. 
// So, when we change the value of array1, it also changes the value of array2.

// prepare diagram for it.
// primitive data types are stored in stack memory
// reference data types are stored in heap memory
// stack memory is faster than heap memory
// stack memory is limited in size
// heap memory is larger in size
// stack memory is automatically allocated
// heap memory is manually allocated and deallocated

