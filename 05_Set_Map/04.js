// clone using object.assign

// memory

const obj = {
    key1 : "value1",
    key2 : "value2",
}

// if done like this, key3 wil also be added in obj2
// const obj2 = obj;

// if done like this, key3 wil not be added in obj2
const obj2 = {...obj};
obj.key3 = "value3";
console.log(obj);
console.log(obj2);


