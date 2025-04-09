
// before
// after

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach students" ;
const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem);
todoList.after(newTodoItem);