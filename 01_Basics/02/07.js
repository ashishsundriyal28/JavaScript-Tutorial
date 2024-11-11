// trim()
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "      Harshit         "
console.log(firstName.length);

// trim generates new string, doesn't make changes in existing one
let newString = firstName.trim();
console.log(newString.length);
console.log(firstName.length);
