// Maps
// Maps object in JavaScript

// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string



// --------------- object literal ---------------------------
// in case of object literal, key can be only string or symbol
// key -> string
// key -> symbol
/*
const person = {
    firstName: "harshit",
    age: 7,
    1: "one"
}
// console.log(person. firstName);
// console.log(person["firstName"]);
console.log(person['1']);
for (let key in person) {
    console.log(typeof key);
}
*/

// --------------- Map object => key-value pair ---------------------------
// in this case, key can also be any other data-type

/*
const person = new Map();
person.set('firstName','Harshit');
person.set('age',7);
person.set(1,'one');
*/
// person.set([1,2,3],'onetwothree');
// person.set({1:'one'},'onetwothree');
// console.log(person);


// how to access value
// in this map object case
/*
console.log(person.get('firstName'));
console.log(person.get('age'));
console.log(person.get(1));

// return all keys
console.log(person.keys());

console.log("--------------------------------------------");
console.log("--------------------------------------------");
for (const key of person.keys()) {
    console.log(key, typeof key);
}
console.log("--------------------------------------------");
console.log("--------------------------------------------");
for (const key of person) {
    // console.log(typeof key);
    console.log(Array.isArray(key));
}

console.log("--------------------------------------------");
console.log("--------------------------------------------");

for (const [key, value] of person) {
    console.log(key, value);
}
*/


// const person = new Map([['firstName','harshit'],['age',8]]);
// //                          1-key-value pair    ,   2nd key-value pair
// console.log(person);



const person1 = { 
    id:1, 
    firstName:'harshit'
}
const person2 = { 
    id:2, 
    firstName:'harshita'
}

const extraInfo = new Map();
// below is like person1(key) => (value){age:8,gender:"male"}
extraInfo.set(person1,{age:8,gender:"male"});
extraInfo.set(person2,{age:9,gender:"female"});
console.log(person1.id);
console.log(person2.id);
console.log("extraInfo.keys() => ",extraInfo.keys());
console.log(extraInfo.get(person1));
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2));
console.log(extraInfo.get(person2).age);
console.log(extraInfo.get(person2).gender);








