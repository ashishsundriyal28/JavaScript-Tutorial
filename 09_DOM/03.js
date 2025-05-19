// select element using query selector
// # for id, . for class
const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");

// this will give the first occurance of class *nav-item*
const navItem = document.querySelector(".nav-item");
// this will give all the occurance of class *nav-item* (querySelectorAll)
const navItemAll = document.querySelectorAll(".nav-item");
// console.log(mainHeading);
// console.log(header);
console.log(navItem); // getting first occurance
console.log(navItemAll); // getting all occurance