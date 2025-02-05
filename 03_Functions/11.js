// callback functions
// definition: 
// a callback function is a function that is passed as an argument to another function, to be “called back” at a later time. 

// A function that accepts other functions as arguments is called a higher-order function, 
// which contains the logic for when the callback function gets executed. 
// It’s the combination of these two that allow us to extend our functionality.
function myFunc2(name){
    console.log("hello world 2 !!!!"); 
    console.log(`your name is ${name}`); 
}

function myFunc(callback){
    console.log("hello there!!!!");    
    // console.log(a);
    callback("ASHISH"); 
}

myFunc(myFunc2);