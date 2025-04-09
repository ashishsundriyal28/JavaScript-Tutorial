// Add new HTML elements to page



// innerHTML to add html element
const todoList = document.querySelector(".todo-list");
console.log("------------ todoList ---------- ");
console.log(todoList);
console.log("------------ todoList.innerHTML ------------");
console.log(todoList.innerHTML);

// todoList.innerHTML = "<li>NEW TODO</li>";
todoList.innerHTML += "<li>NEW TODO</li>";
todoList.innerHTML += "<li>Teach Student</li>";


// when you should use it, when you should not

// when you should not
// naye elements ko add krne ke liye nahi krna - performance issues

// when you should
// jab existing pe changes perform krne ho

// naye element ko add krne ke liye use hota hai
// document.createElement()
// har koi ise hi use krta hai
// 12.js mei hai implementation
