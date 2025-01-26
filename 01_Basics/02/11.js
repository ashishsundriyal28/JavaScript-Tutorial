// undefined
let firstName;
console.log(typeof firstName)
firstName = "Ashish";
console.log(typeof firstName, firstName)


// null
let myVariable = null;
console.log(myVariable);
myVariable = "Ashish";
console.log(myVariable, typeof myVariable);

// gives type object, its a bug in js and will not be fixed
console.log(typeof null);


//BigInt
let myNumber = 123;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// BigInt should always be performed with only BigInt, not with any other data-type
let myNumber1 = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber1+sameMyNumber); // 135n




