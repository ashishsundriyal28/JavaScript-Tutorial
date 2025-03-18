// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll


// --------------------------------------------------------------------------------
// get multiple elements using getElements by class name
// --------------------------------------------------------------------------------
// simple string pass kr di (na dot ns kuch)
// matlab vo saare elements jinki class nav-item hogi
// sb ke sb select ho jayenge
const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection

// returns HTML.Collections which is array like object
// can be iterated using index
// but it is not array (just iterating with index values, nothing else)
console.log("navItems => ", navItems);
console.log("navItems[0] => ", navItems[0]);
console.log("typeof navItems => ", typeof navItems);

// to prove that it is not an array
console.log("Array.isArray(navItems) => ", Array.isArray(navItems)); // false


// --------------------------------------------------------------------------------
// get multiple elements items using querySelectorAll
// --------------------------------------------------------------------------------
// saare chahiye, jinki bhi class .nav-item hogi
const navItems1 = document.querySelectorAll(".nav-item"); // NodeList
console.log("navItems1 => ", navItems1);
console.log("navItems1[0] => ", navItems1[0]);
