// document.createElement()
// append
// prepend
// remove

const newTodoItem = document.createElement("li");
const newTodoItemText = document.createTextNode("Teach Students!!");
const todoList = document.querySelector(".todo-list") ;
newTodoItem.append(newTodoItemText);
todoList.append(newTodoItem);
console.log(newTodoItem);

