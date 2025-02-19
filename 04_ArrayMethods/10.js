// splice method
// start,delete,insert
// it gives the deleted item in an array
// we can store it if we want

const myArray = ['item1','item2','item3','item4','item5']

// //delete
// const deletedItem = myArray.splice(1,1);
// console.log(deletedItem);
// console.log(myArray);
// //insert
// myArray.splice(1,0,'inserted item');
// console.log(myArray);



// insert and delete together
const deletedItem = myArray.splice(1,2,"inserted item1", "inserted item2");
console.log(deletedItem);
console.log(myArray);


