// how to iterate over object

const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"],
}

// for in loop
for (let key in person) {
    console.log(key,":", person[key]);
    console.log(`${key} : ${person[key]}`);
    
}

// object.keys
console.log("==================================");
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(typeof Object.keys(person));
console.log(Array.isArray(Object.keys(person)));


// for each
for (let key of Object.keys(person))
{
    console.log(person[key]);
    
}










