// difference between dot and bracket notation
const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"],
}

console.log(person["person hobbies"]);

// difference between dot and bracket notation
// while adding key value pair to object
person.key = "abc@gmail.com";
person[key] = "abc@gmail.com";
console.log(person);








