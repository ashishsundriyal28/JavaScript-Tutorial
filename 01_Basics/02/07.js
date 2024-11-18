// trim()
// toUpperCase()
// toLowerCase()
// slice()

/*
let firstName = "      Harshit         "
console.log(firstName.length);
*/
// trim generates new string, doesn't make changes in existing one
/*
let newString = firstName.trim();
console.log(newString.length);
console.log(firstName.length);
*/

// As strings are immutable, these methods will create a new string
// and will not change the current string
/*
console.log(newString.toUpperCase());
console.log(newString.toLowerCase());
*/
// start index
// end index
let firstName = "Harshit"
let newString = firstName.slice(0,4) ;
console.log(newString);
