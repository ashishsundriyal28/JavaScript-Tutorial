// optional chaining
// user -> nested objects

const user = {
    firstName : "harshit",
    // address : {houseNumber : '1234'}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber);
