// static list vs live list

// querySelectorAll hamein static list degi.
// getElementBySomething hamein live list degi.
// const listItems = document.querySelectorAll(".todo-list li");
// console.log(listItems);

// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems);


// getElementsBySomething gives HTMLCollections in return
const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
console.log(listItems);

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
ul.append(sixthLi);
console.log(listItems);