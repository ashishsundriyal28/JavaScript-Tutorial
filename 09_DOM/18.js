// how to get dimensions of element

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
const infoWidth = sectionTodo.getBoundingClientRect().width;
console.log(info);
console.log(infoWidth);

