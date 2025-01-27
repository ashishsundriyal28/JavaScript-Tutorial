// For loop in array

let fruits = ["apple", "mango", "grapes", "banana"];
console.log(fruits);
console.log(fruits.length);

// how to get last element of the array
console.log(fruits[fruits.length-1]);

let fruits2 = [];
for(let i=0; i<fruits.length;i++)
{
    console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i].toUpperCase());
    console.log("--------");
}
console.log(fruits2);


// use const instead of let for array

const fruits3 = ["apple", "mango"];
fruits3.push("banana");
console.log(fruits3);

// difference of using const and let in case of arrays : 
// we can re-assign the array in case of let but we can't re-assign the array in case of const
// only push/pop is allowed in case of const


