// block scope vs function scope

// let and const are block scope
// var is function scope

// {
//     const firstName = "John";
//     console.log(firstName);
// }

// //console.log(firstName);

// {
//     var lastName = "Ashish";
//     console.log(lastName);
// }

// console.log(lastName);




function myApp(){
    if(true){
        var firstName = "John";
        console.log(firstName);
    }
    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();