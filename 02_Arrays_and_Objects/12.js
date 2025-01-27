console.clear();
// spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// way 1
// const newArray = [...array1, ...array2];

// way 2
const newArray = [..."abc"];
console.log("newArray => ", newArray);



// spread operator with objects
const obj1 = {
    key1 : "value1",
    key2 : "value2",
};
const obj2 = {
    key1 : "value101",
    key3 : "value3",
    key4 : "value4",
};

// const newObject = {...obj1};
// console.log(newObject);

// key1 ki vo value ayegi jo bhi last mei add hui hogi
// like latest added value will be prioritized
// if obj1 is added first then obj2 is added then key1 will be value101
// if obj2 is added first then obj1 is added then key1 will be value1
// const newObject = {...obj1, ...obj2};
// const newObject = {...obj2, ...obj1};
// console.log(newObject);


// const newObject = {..."abc"};
const newObject = {...["item1", "item2"]};
console.log(newObject);
// explaination of above line
// theory : string is an array of characters











