// computed properties

const key1 = 'objKey1';
const key2 = 'objKey2';

const value1 = "myValue1";
const value2 = "myValue2";

// way 1
// const obj = {
//     [key1]:value1,
//     [key2]:value2,
// }

// way 2
const obj={};
obj[key1] = value1;
obj[key2] = value2;
console.log(obj);




