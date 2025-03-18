const sectionTodo = document.querySelector(".section-todo")
console.log(sectionTodo);

// hume dekhna hai ki is section ko humne kitni classes de rkhi hai
console.log(sectionTodo.classList); // DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']


// adding class using js
sectionTodo.classList.add("bg-dark");

// removing class using js
sectionTodo.classList.remove("container");

// to check if a particular class is present or not
const ans = sectionTodo.classList.contains("container");
console.log(ans); // DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']


// agar pehle se bg-dark class nhi hai to add kr dega
// agar pehle se bg-dark class hai to remove kr dega
sectionTodo.classList.toggle("bg-dark");



// Experiment with header
const header = document.querySelector(".header") ;
console.log(header.classList); //DOMTokenList ['header', value: 'header']
header.classList.add("bg-dark");




