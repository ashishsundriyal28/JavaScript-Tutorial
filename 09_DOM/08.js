// --------------------------------------------------------------------------------
// Working with HTMLCollection
// --------------------------------------------------------------------------------

// arrsy like object ---> indexing, length, property
// const navItems = document.getElementsByTagName("a");   // HTMLCollection
// console.log("a navItems => ", navItems);
// console.log("a navItems.length => ", navItems.length);

// we can't use *forEach* method to iterate through HTMLCollection
// forEach loop(can't use in HTMLCollection)

// simple for loop
// for(let i=0;i<navItems.length;i++) {
//     //console.log(navItems[i]);
//     const navItem = navItems[i];

//     navItem.style.backgroundColor= '#fff'
//     navItem.style.color= 'red';
//     navItem.style.fontWeight= 'bold';
// }

// for of loop
// for(let navItem of navItems) {
//     navItem.style.backgroundColor= '#fff'
//     navItem.style.color= 'red';
//     navItem.style.fontWeight= 'bold';
// }


// to use forEach method, we first have to convert the HTMLCollection into array

// navItems1 = Array.from(navItems);

// console.log("Array.isArray(navItems1) => ", Array.isArray(navItems1));

// navItems1.forEach((navItem)=>{
//     navItem.style.backgroundColor= '#fff'
//     navItem.style.color= 'red';
//     navItem.style.fontWeight= 'bold';
// })





// --------------------------------------------------------------------------------
// Working with HTMLCollection
// --------------------------------------------------------------------------------

const navItems = document.querySelectorAll("a");   // NodeList
console.log("navItems => ", navItems);


// forEach loop(can be used in NodeList)
// simple for loop
// for of loop

// simple for loop
// for(let i=0;i<navItems.length;i++) {
//     //console.log(navItems[i]);
//     const navItem = navItems[i];

//     navItem.style.backgroundColor= '#fff'
//     navItem.style.color= 'red';
//     navItem.style.fontWeight= 'bold';
// }

// for of loop
// for(let navItem of navItems) {
//     navItem.style.backgroundColor= '#fff'
//     navItem.style.color= 'green';
//     navItem.style.fontWeight= 'bold';
// }

// forEach loop
navItems.forEach((navItem)=>{
    navItem.style.backgroundColor= '#fff'
    navItem.style.color= 'red';
    navItem.style.fontWeight= 'bold';
})


// Convert NodeList into array
navItems1 = Array.from(navItems);
// now its converted to array
// you can apply array methods like map, reduce, filter to it
console.log(Array.isArray(navItems1));

