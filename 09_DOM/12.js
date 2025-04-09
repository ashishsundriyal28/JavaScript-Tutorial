// document.createElement()
// append
// prepend
// remove

const newTodoItem = document.createElement("li");

// way1 to add text in list item
// const newTodoItemText = document.createTextNode("Teach Students!!");
// newTodoItem.append(newTodoItemText);

// way2 to add text in list item
newTodoItem.textContent = "Teach Students" ;

const todoList = document.querySelector(".todo-list") ;

// append adds the item in the last of the current list
todoList.append(newTodoItem);
// prepend adds the item in the last of the current list
todoList.prepend(newTodoItem);

console.log(newTodoItem);



// remove the element
const todo1 = document.querySelector('.todo-list li');
console.log("todo1");
console.log(todo1);
todo1.remove();
console.log("todo1");
console.log(todo1);